import React, { useContext, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { userContext } from "../../../App";
import swal from 'sweetalert';

const PaymentForm = ({service}) => {
   
  const stripe = useStripe();
  const elements = useElements();
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
     
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      const name = loggedInuser.displayName;
      const email = loggedInuser.email;
      const orderTime = new Date().toLocaleString().split(",")[0];

    const orderDetails = {
      name: name,
      email: email,
      service: service,
      payment: paymentMethod,
      status: 'Pending',
      orderTime: orderTime,
    };
    fetch("https://repair-master-server.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal({
            title: "Your Order Placed Successfully!",
            icon: "success",
          });
        }
      });
      
    }

 
    
  };

  return (
        <div className='payment-form-section'>
            <form onSubmit={handleSubmit}>
                <div className="py-3">
                    <label className="h6">Card Number</label>
                    <CardNumberElement />
                </div>
                <div className="py-3">
                    <label className="h6">Expiration Date</label>
                    <CardExpiryElement />
                </div>
                <div className="py-3">
                    <label className="h6">CVC</label>
                    <CardCvcElement />
                </div>
                <div className="py-1">
                    {paymentError && <p className="text-danger">{paymentError}</p>}
                    {paymentSuccess && (
                    <p className="text-success">Your Payment Successfully Complete</p>
                    )}
                </div>
                <div className="text-center py-4">
                    <button
                    className="btn button-white w-50"
                    type="submit"
                    disabled={!stripe}
                    >
                    Order Service
                    </button>
                </div>
            </form>
        </div>
  );
};

export default PaymentForm;
