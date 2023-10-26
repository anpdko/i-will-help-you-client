import { useEffect, useState } from 'react';
import s from './Payment.module.scss';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Preloader } from '@components/UI';

const API_URL: string | undefined = import.meta.env.VITE_API_URL;
interface IPaymentProps {
  email: string;
  amount: string;
}

const isNumber = (str: string) => {
  return /^[0-9]+$/.test(str);
};

function Payment({ email, amount }: IPaymentProps) {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string>('');

  useEffect(() => {
    fetch(`${API_URL}/api/payment/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    axios
      .post(`${API_URL}/api/payment/create-payment-intent`, {
        email,
        amount: isNumber(amount) ? amount : 1,
      })
      .then(async (result) => {
        const { clientSecret } = await result.data;
        setClientSecret(clientSecret);
      });
  }, [amount, email]);

  return (
    <div className={s.payment}>
      <div className={s.details}>
        <h3>Payment details</h3>
        <p className={s.aid}>
          Aid to fund: <span>non-refundable charitable contribution.</span>
        </p>
        <p>
          Payable: <span className={s.amount}>${amount}</span>
        </p>
      </div>
      {clientSecret && stripePromise ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      ) : (
        <div className={s.preloader}>
          <Preloader />
        </div>
      )}
    </div>
  );
}

export default Payment;
