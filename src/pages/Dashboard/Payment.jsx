import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
  

 
  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold logo-1 tracking-widest text-zinc-900 inline-block border-b-4 border-amber-400 pb-1">
          PAY NOW
        </h2>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
