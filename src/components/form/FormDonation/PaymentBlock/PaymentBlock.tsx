import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useFormContext } from 'react-hook-form';
import {
  paymentMethod,
  paymentFrequency,
  donationAmount,
} from '@utils/donationOptions';
import RadioInput from '../RadioInput/RadioInput';
import s from './PaymentBlock.module.scss';

const PaymentBlock = () => {
  const { t } = useTranslation();
  const { control, setValue, getValues } = useFormContext();
  const [customAmount, setCustomAmount] = useState('');

  const handleCustomInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setValue('donationAmount', e.target.value);
  };

  useEffect(() => {
    const selectedValue = getValues('donationAmount');
    if (!selectedValue) {
      setValue('donationAmount', '10');
    }
  }, []);

  return (
    <div className={s.paymentBlock}>
      <div className={`border-style ${s.paymentBlock__method}`}>
        {paymentMethod.map((item, index) => (
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
                  onChange={field.onChange}
                  value={field.value}
                  title={t(item.title)}
                  disabled={index === 1 || index === 2}
                />
              </>
            )}
          />
        ))}
      </div>
      <div className={`border-style ${s.paymentBlock__frequency}`}>
        {paymentFrequency.map((item) => (
          <Controller
            key={item.id}
            name='paymentFrequency'
            rules={{ required: true }}
            control={control}
            defaultValue={item.id === 'oneTime' ? item.id : null}
            render={({ field }) => (
              <>
                <RadioInput
                  name={field.name}
                  id={item.id}
                  onChange={field.onChange}
                  value={field.value}
                  title={t(item.title)}
                />
              </>
            )}
          />
        ))}
      </div>
      <div className={s.paymentBlock__amount}>
        <div className={s.paymentBlock__amount_number}>
          {donationAmount.map((item) => (
            <Controller
              key={item.id}
              name='donationAmount'
              rules={{ required: true }}
              control={control}
              defaultValue={item.id === '10' ? item.id : null}
              render={({ field }) => (
                <>
                  <RadioInput
                    name={field.name}
                    id={item.id}
                    value={field.value}
                    title={item.title}
                    onChange={(e) => {
                      field.onChange(e);
                      setCustomAmount('');
                    }}
                    checked={getValues('donationAmount') === item.id}
                  />
                </>
              )}
            />
          ))}
        </div>
        <label
          htmlFor='customDonationAmount'
          className={`border-style ${s.paymentBlock__amount_custom}`}
        >
          <input
            type='text'
            name='customDonationAmount'
            id='customDonationAmount'
            placeholder={t('$ your donation amount')}
            value={customAmount}
            onChange={handleCustomInputChange}
          />
        </label>
      </div>
    </div>
  );
};

export default PaymentBlock;
