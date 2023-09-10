import { useState, useEffect } from 'react';
import { PaymentRequestButtonElement } from '@stripe/react-stripe-js';

const PaymentButtons = ({ stripe }: { stripe: any }) => {
  const [paymentRequestElement, setPaymentRequestElement] = useState<any>(null);

  useEffect(() => {
    if (stripe) {
      const supportsPaymentRequest = stripe.elements().paymentRequest;

      if (supportsPaymentRequest) {
        const paymentRequest = stripe.paymentRequest({
          country: 'US',
          currency: 'usd',
          total: {
            label: 'Demo total',
            amount: 1099,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        });

        paymentRequest.on('paymentmethod', (ev: any) => {
          console.log('Payment method:', ev.paymentMethod);
        });

        paymentRequest.canMakePayment().then((result: any) => {
          if (result) {
            setPaymentRequestElement(paymentRequest);
          }
        });
      }
    }
  }, [stripe]);

  return (
    <div>
      {paymentRequestElement && (
        <PaymentRequestButtonElement options={{ paymentRequest: paymentRequestElement }} />
      )}
    </div>
  );
};

export default PaymentButtons;
