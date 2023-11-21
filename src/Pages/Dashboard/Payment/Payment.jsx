import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div>
      <Elements stripe={stripPromise}>
        <CheckOut />
      </Elements>
    </div>
  );
};

export default Payment;
