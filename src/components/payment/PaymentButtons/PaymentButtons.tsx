import { PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { Stripe, PaymentRequest } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';

const PaymentButtons = ({ stripe }: { stripe: Stripe | null }) => {
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null,
  );

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: 1099,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);

  return (
    <div>
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
    </div>
  );
};
export default PaymentButtons;
