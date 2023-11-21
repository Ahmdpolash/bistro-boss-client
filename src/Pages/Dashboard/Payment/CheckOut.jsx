import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();

  const axiosSecure = useAxios();
  const { data: cart, refetch } = useCart();
  const { user } = useAuth();

  const totalPrice = cart?.reduce((price, item) => price + item?.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment method error", error);
      setError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
      setError("");
    }

    //!confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm-error", confirmError);
    } else {
      console.log("payment-intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction-id", paymentIntent.id);

        setTransactionId(paymentIntent.id);

        //!now save the payment on database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuIds: cart.map((item) => item.menuId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for the payment",
          showConfirmButton: false,
          timer: 1500,
        });

        refetch();
        navigate('/admin/paymentHistory');
      }
    }
  };

  return (
    <div className="px-16   max-w-xl mx-auto">
      <SectionTitle subHeading={"Payment Now"} heading={"Payment"} />
      <form className="" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",

                color: "#424770",
                border: "1px solid #ced4da",
                padding: "10px",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-[#570DF8] text-white mt-4 w-full flex items-center justify-center mx-auto text-center px-6 py-3"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600 font-semibold">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            Your Transaction is is :{transactionId}{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckOut;
