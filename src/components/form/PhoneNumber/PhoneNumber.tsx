import { useFormContext } from 'react-hook-form';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { useTranslation } from 'react-i18next';
import s from './PhoneNumber.module.scss';

const PhoneNumber = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();

  return (
    <FormItemWrapper className={s.phone} title={t('Phone Number *')}>
      <div className={s.phone__inputs}>
        <input
          type='text'
          id='countryCode'
          placeholder={t('+ 48')}
          {...register('countryCode', {
            required: t('Please enter your country code'),
            pattern: {
              value: /^\+\d{2}$/,
              message: t(
                'The country code should start with the «+» symbol and be followed by exactly two digits',
              ),
            },
          })}
          maxLength={3}
          className={`${s.phone__input} ${s.phone__input_code}`}
          autoComplete='new-password'
        />

        <input
          type='text'
          id='phone'
          placeholder={t('605 555 555')}
          {...register('phone', {
            required: t('Please enter your phone number'),
            pattern: {
              value: /^[0-9]+$/,
              message: t('Please enter your phone number.'),
            },
          })}
          minLength={8}
          maxLength={15}
          className={`${s.phone__input} ${s.phone__input_number}`}
          autoComplete='off'
        />
      </div>
      {errors?.countryCode && (
        <p className={`${s.phone__error}`}>
          {errors?.countryCode.message as string}
        </p>
      )}
      {errors?.phone && (
        <p className={`${s.phone__error}`}>{errors?.phone.message as string}</p>
      )}
    </FormItemWrapper>
  );
};

export default PhoneNumber;
