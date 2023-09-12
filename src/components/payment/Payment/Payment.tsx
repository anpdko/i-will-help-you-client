import { useEffect, useState } from 'react';
import s from './Payment.module.scss';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import {Preloader} from '@components/UI'

const API_URL: string | undefined = import.meta.env.VITE_API_URL;
interface IPaymentProps {
  email: string
  amount: string
}

const isNumber = (str:string) => {
  return /^[0-9]+$/.test(str);
}

function Payment({ email, amount }:IPaymentProps) {
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<string>('');

  useEffect(() => {
    fetch(`${API_URL}/api/payment/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    axios.post(`${API_URL}/api/payment/create-payment-intent`, {
      email, amount: isNumber(amount)?amount:1
    })
    .then(async (result) => {
      var { clientSecret } = await result.data;
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div className={s.payment}>
      {
        (clientSecret && stripePromise) 
        ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )
        :<div className={s.preloader}>
          <Preloader/>
        </div> 
      }
    </div>
  );
}

export default Payment;
