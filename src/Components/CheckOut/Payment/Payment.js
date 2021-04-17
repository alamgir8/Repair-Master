import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';



const stripePromise = loadStripe('pk_test_51IguhVKzKDyCndTSmMwZXO4HgcVl23cKL4lHifvL1sSAKQrYWnJGYKJD5WbIKRGYBeJbJk26R1AZAFw6pC3Ijz1x00ohH1RyRB');

const Payment = ({service}) => {
  return (
    <Elements stripe={stripePromise}>
        <PaymentForm service={service}/>
    </Elements>
  );
};

export default Payment;