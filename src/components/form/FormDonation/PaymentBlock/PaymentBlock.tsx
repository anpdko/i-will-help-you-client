import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useFormContext } from 'react-hook-form';
import { paymentMethods } from '@utils/donationOptions';
import { transferList } from '@/utils/invoicePaymentList';
import RadioInput from '../RadioInput/RadioInput';
import CardPayment from './CardPayment';
import InvoicePayment from './InvoicePayment';
import s from './PaymentBlock.module.scss';

const PaymentBlock = () => {
  const { t } = useTranslation();
  const { control } = useFormContext();
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className={s.paymentBlock}>
      <div className={`border-style ${s.paymentBlock__method}`}>
        {paymentMethods.map((item, index) => (
          <Controller
            key={item.id}
            name='paymentMethod'
            rules={{ required: true }}
            control={control}
            defaultValue={item.id === 'card' ? item.id : null}
            render={({ field }) => (
              <>
                <RadioInput
                  name={field.name}
                  id={item.id}
                  onChange={(e) => {
                    field.onChange(e);
                    setPaymentMethod(e);
                  }}
                  value={field.value}
                  title={t(item.title)}
                  disabled={index === 2}
                />
              </>
            )}
          />
        ))}
      </div>
      {paymentMethod === 'card' && <CardPayment />}
      {paymentMethod === 'transfer' && (
        <InvoicePayment list={transferList} method='transfer' />
      )}
      {/* {paymentMethod === 'crypto' && <InvoicePayment list={cryptoList} />} */}
    </div>
  );
};

export default PaymentBlock;
