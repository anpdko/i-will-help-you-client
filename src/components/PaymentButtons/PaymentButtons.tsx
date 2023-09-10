import { useState, useEffect } from 'react';
import { PaymentRequestButtonElement } from '@stripe/react-stripe-js';

const PaymentButtons = ({ stripe }: { stripe: any }) => {
  const [applePayElement, setApplePayElement] = useState<any>(null);
  const [googlePayElement, setGooglePayElement] = useState<any>(null);

  useEffect(() => {
    if (stripe) {
      // Создайте элемент для Apple Pay
      const applePay = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: 1099,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      applePay.canMakePayment().then((result: any) => {
        if (result) {
          setApplePayElement(applePay);
        }
      });

      // Создайте элемент для Google Pay
      const googlePay = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: 1099,
        },
        requestPayerName: true,
        requestPayerEmail: true,
        googlePay: true, // Включите поддержку Google Pay
      });

      googlePay.canMakePayment().then((result: any) => {
        if (result) {
          setGooglePayElement(googlePay);
        }
      });
    }
  }, [stripe]);

  return (
    <div>
      {applePayElement && (
        <PaymentRequestButtonElement options={{ paymentRequest: applePayElement }} />
      )}

      {googlePayElement && (
        <PaymentRequestButtonElement options={{ paymentRequest: googlePayElement }} />
      )}
    </div>
  );
};

export default PaymentButtons;
