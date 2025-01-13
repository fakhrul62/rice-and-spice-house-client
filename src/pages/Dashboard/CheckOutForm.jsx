import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const {user} = useAuth();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    };
    //confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                name: user.displayName || "Anonymous",
                email: user.email || "anonymous@mail.com "
            }
        }
    })
    if(confirmError){
        console.log("confirm error", confirmError);
    }
    else{
        console.log("payment intent", paymentIntent);
    }
    if(paymentIntent.status ==="succeeded"){
        Swal.fire({
            title: "Payment Successful",
            icon: "success",
            iconColor: "#f4ec11",
            html: `Thank you for your payment. <span><br></span> Your Transaction ID: <b>${paymentIntent.id}</b>.`,
            customClass: {
              confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
              title: "font-head font-bold text-2xls",
            },
        })
    }
  };
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-500">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              backgroundColor: "#111111",
              color: "#ffffff",
              "::placeholder": {
                color: "#ffffff",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="bg-amber-400 hover:bg-zinc-900 hover:text-amber-400 rounded-full text-lg px-6 py-3 "
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckOutForm;
