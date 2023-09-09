import { PaymentElement} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { ButtonApp } from '../UI';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState<any>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
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

  // const handleGooglePay = async () => {
  //   if (!stripe || !elements) {
  //     return;
  //   }
  
    // Создайте PaymentRequest объект для Google Pay
  //   const paymentRequest = stripe.paymentRequest({
  //     country: 'US', // Укажите свою страну
  //     currency: 'usd', // Укажите свою валюту
  //     total: {
  //       label: 'Total Amount',
  //       amount: 2500, // Укажите сумму в центах
  //     },
  //     requestPayerName: true,
  //     requestPayerEmail: true,
  //   });
  
  //   // Проверьте, поддерживается ли Google Pay
  //   const result = await paymentRequest.canMakePayment();
  
  //   if (result) {
  //     // Отобразите кнопку Google Pay
  //     const googlePayButton = elements.create('paymentRequestButton', {
  //       paymentRequest,
  //     });
  
  //     // Добавьте кнопку на страницу
  //     googlePayButton.mount('#google-pay-button');
  
  //     googlePayButton.on('paymentmethod', async (ev) => {
  //       // Обработайте платежный метод, отправьте его на сервер Stripe и завершите платеж
  //       const { paymentMethod } = await stripe.confirmPayment({
  //         payment_method: ev.paymentMethod.id,
  //       });
  
  //       // Обработайте успешное завершение платежа
  //       if (paymentMethod) {
  //         console.log('Payment successful!', paymentMethod);
  //         // Вы можете обновить состояние компоненты или перенаправить пользователя на страницу "спасибо" здесь
  //       }
  //     });
  //   } else {
  //     console.log('Google Pay is not available on this device.');
  //   }
  // };

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      {/* <div id='google-pay-button' onClick={handleGooglePay}></div> */}
      <PaymentElement id='payment-element'/>
      <ButtonApp disabled={isProcessing || !stripe || !elements} type='submit'>
        {isProcessing ? 'Processing ... ' : 'Pay now'}
      </ButtonApp>
      {/* Show any error or success messages */}
      {message && <div id='payment-message'>{message}</div>}
    </form>
  );
}
