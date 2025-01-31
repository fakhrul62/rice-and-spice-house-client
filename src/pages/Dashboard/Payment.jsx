import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CheckOutForm from "./CheckOutForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import "../../css/Payment.css"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [cart,] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  useEffect(() => {
    // Simulate API call to fetch the clientSecret
    const fetchClientSecret = async () => {
      try {
        const response = await axiosSecure.post("/create-payment-intent", { price: totalPrice });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error fetching clientSecret:", error);
      }
    };

    fetchClientSecret();
  }, [axiosSecure, totalPrice]);


  const options = {
    clientSecret
  };

  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold logo-1 tracking-widest text-zinc-900 inline-block border-b-4 border-amber-400 pb-1">
          PAY NOW
        </h2>
      </div>
      <div>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckOutForm />
          </Elements>
        ) : (
          <p>Loading payment form...</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
