import { PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { ButtonApp } from '../../UI';
import PaymentButtons from '../PaymentButtons/PaymentButtons';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState<any>(false);


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsProcessing(false);
  };


  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <PaymentButtons stripe={stripe}/>
      <PaymentElement id='payment-element'/>
      <ButtonApp disabled={isProcessing || !stripe || !elements} type='submit'>
        {isProcessing ? 'Processing ... ' : 'Pay now'}
      </ButtonApp>
      {message && <div id='payment-message'>{message}</div>}
    </form>
  );
}
