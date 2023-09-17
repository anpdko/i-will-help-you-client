import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Controller, useFormContext } from 'react-hook-form';
import { paymentFrequency, donationAmount } from '@utils/donationOptions';
import RadioInput from '../RadioInput/RadioInput';
import Email from '../../Email/Email';
import Comment from '../../Comment/Comment';
import { ButtonApp } from '@components/UI';
import s from './PaymentBlock.module.scss';

const CardPayment = () => {
  const { t } = useTranslation();
  const { control, setValue, getValues } = useFormContext();
  const [customAmount, setCustomAmount] = useState('');

  const isMobile = useMediaQuery({ minWidth: 480, maxWidth: 767 });

  const handleCustomInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const regex = /^[0-9]*$/;
    if (regex.test(inputValue)) {
      setCustomAmount(inputValue);
      setValue('donationAmount', inputValue);
    }
  };

  useEffect(() => {
    const selectedValue = getValues('donationAmount');
    if (!selectedValue) {
      setValue('donationAmount', '10');
    }
  }, []);

  return (
    <div className={s.card}>
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
      <Email required={false} />
      <Comment title='Comment' placeholder='Type here...' maxLength={255} />
      <ButtonApp
        type='submit'
        size={isMobile ? 'Xlarge' : 'medium'}
        className={s.card__button}
      >
        {t('Pay urgent!')}
      </ButtonApp>
    </div>
  );
};

export default CardPayment;
