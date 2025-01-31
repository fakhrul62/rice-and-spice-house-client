import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const totalPriceStr = cart
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2);
  const totalPrice = parseFloat(totalPriceStr);

  useEffect(() => {
    if (totalPrice) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe is not initialized.");
      return;
    }

    // Confirm the payment using the PaymentElement
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: user.displayName || "Anonymous",
            email: user.email || "anonymous@mail.com",
          },
        },
      },
      redirect: "if_required", // Prevent redirect and handle everything in-app
    });

    if (error) {
      console.error("Payment Error:", error.message);
      setError(error.message);
    } else if (paymentIntent) {
      console.log("Payment Intent:", paymentIntent);

      // Show success alert and navigate to payment history
      Swal.fire({
        title: "Payment Successful",
        icon: "success",
        iconColor: "#f4ec11",
        html: `Transaction ID: <b>${paymentIntent.id}</b>`,
      });

      // Save payment details to the server
      const payment = {
        email: user.email,
        price: totalPrice,
        time: new Date(),
        transactionId: paymentIntent.id,
        cartIds: cart.map((item) => item._id),
        menuItemIds: cart.map((item) => item.menuId),
        status: "pending",
      };

      const res = await axiosSecure.post("/payments", payment);
      console.log("Payment saved:", res.data);

      refetch();
      navigate("/dashboard/payment-history");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 p-6 rounded-lg shadow-md max-w-lg mx-auto"
    >
      <div className="mb-4 *:text-white">
        <PaymentElement />
      </div>
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full text-lg px-6 py-3 w-full"
      >
        Pay
      </button>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </form>
  );
};

export default CheckOutForm;
