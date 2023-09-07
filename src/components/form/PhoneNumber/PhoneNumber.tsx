import { useFormContext } from 'react-hook-form';
import basic from '../FormReadyHelp/FormReadyHelp.module.scss';
import s from './PhoneNumber.module.scss';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';

const PhoneNumber = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormItemWrapper className={s.phone} title='Phone Number *' >
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
          className={`${s.phone__input} ${s.phone__input_code}`}
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
          className={`${s.phone__input} ${s.phone__input_number}`}
        />
      </div>
      {errors?.countryCode && (
        <p className={`${s.phone__error}`}>
          {errors?.countryCode.message as string}
        </p>
      )}
      {errors?.phone && (
        <p className={`${s.phone__error}`}>
          {errors?.phone.message as string}
        </p>
      )}
    </FormItemWrapper>
  );
};

export default PhoneNumber;
