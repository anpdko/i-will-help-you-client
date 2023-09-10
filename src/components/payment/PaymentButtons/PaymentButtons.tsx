import { PaymentRequestButtonElement} from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';

const PaymentButtons = ({stripe}:{stripe:any}) => {
   const [paymentRequest, setPaymentRequest] = useState<any>(null);

   useEffect(() => {
      if (stripe) {
        const pr:any = stripe.paymentRequest({
          country: 'US',
          currency: 'usd',
          total: {
            label: 'Demo total',
            amount: 1099,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        });
  
        pr.canMakePayment().then((result:any) => {
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
export default PaymentButtons