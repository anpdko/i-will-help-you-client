import { useTranslation } from 'react-i18next';
import { Controller, useFormContext } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import 'react-international-phone/style.css';
import s from './PhoneNumber.module.scss';

interface PhoneNumberProps {
  defaultCountry?: string;
}

const PhoneNumber = ({ defaultCountry = 'pl' }: PhoneNumberProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();

  return (
    <FormItemWrapper className={s.phone} title={t('Phone Number *')}>
      <Controller
        name='phoneNumber'
        control={control}
        rules={{
          required: t('Please type your phone number'),
          minLength: 7,
        }}
        defaultValue=''
        render={({ field }) => (
          <>
            <PhoneInput
              {...field}
              hideDropdown={true}
              defaultCountry={defaultCountry}
              placeholder={t('+48 605 555 555')}
              disableDialCodePrefill={true}
            />
            {errors?.phoneNumber && (
              <p className={`${s.phone__error}`}>
                {errors?.phoneNumber.message as string}
              </p>
            )}
          </>
        )}
      />
    </FormItemWrapper>
  );
};

export default PhoneNumber;
