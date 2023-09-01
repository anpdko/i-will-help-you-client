import { useFormContext } from 'react-hook-form';
import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
import { InputFormApp } from '../../UI';
import basic from '../FormReadyHelp.module.scss';
import s from './PhoneNumber.module.scss';

const PhoneNumber = () => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FormItemContainer section='phone'>
      <FormLabel labelFor='phone' title='Phone Number *' />
      <div className={s.phone__wrap}>
        <div className={s.phone__inputs}>
          <InputFormApp
            id='countryCode'
            placeholder='+ 48'
            required={true}
            regexp={/^\+\d{2}$/}
            message='The country code should start with the "+" symbol and be followed by exactly two digits.'
            maxLength={3}
            className={s.phone__code}
          />
          <InputFormApp
            id='phone'
            placeholder='605 555 555'
            required={true}
            regexp={/^\d+$/}
            message='Please enter your phone number.'
            className={s.phone__number}
          />
        </div>
        <div className={s.phone__errors}>
          {errors?.countryCode && (
            <p className={`${basic.form__error} ${s.phone__error}`}>
              {errors?.countryCode.message as string}
            </p>
          )}
          {errors?.phone && (
            <p className={`${basic.form__error} ${s.phone__error}`}>
              {errors?.phone.message as string}
            </p>
          )}
        </div>
      </div>
    </FormItemContainer>
  );
};

export default PhoneNumber;
