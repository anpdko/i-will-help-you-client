import { useFormContext } from 'react-hook-form';
import basic from '../Form.module.scss';
import s from './PhoneNumberInput.module.scss';

const PhoneNumberInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={s.phone__container}>
      <label className={basic.form__label}>
        Phone Number *
        <div className={s.phone__inputs}>
          <input
            type='text'
            id='countryCode'
            placeholder='+ 48'
            {...register('countryCode', {
              required: true,
              pattern: {
                value: /^\+\d{2}$/,
                message:
                  'The country code should start with the "+" symbol and be followed by exactly two digits.',
              },
            })}
            className={`${basic.form__input} ${s.phone__input_code}`}
          />

          <input
            type='text'
            id='phone'
            placeholder='605 555 555'
            {...register('phone', {
              required: true,
              pattern: {
                value: /^\d+$/,
                message: 'Please enter your phone number.',
              },
            })}
            className={`${basic.form__input} ${s.phone__input_number}`}
          />
        </div>
      </label>
      {errors?.countryCode && (
        <p className={`${basic.form__error}`}>
          {errors?.countryCode.message as string}
        </p>
      )}
      {errors?.phone && (
        <p className={`${basic.form__error}`}>
          {errors?.phone.message as string}
        </p>
      )}
    </div>
  );
};

export default PhoneNumberInput;
