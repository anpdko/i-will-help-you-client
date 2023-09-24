import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from 'react-international-phone';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import 'react-international-phone/style.css';
import s from './PhoneNumber.module.scss';
import './PhoneNumber.scss';

const PhoneNumber = () => {
  const { control } = useFormContext();
  const { t } = useTranslation();

  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return !['ru', 'by'].includes(iso2);
  });

  const validatePhoneNumber = (phoneNumber: string) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (cleanedPhoneNumber.length < 7) {
      return t('Phone number should be at least 7 digits long');
    }
    return true;
  }

  return (
    <FormItemWrapper className={s.phone} title={t('Phone Number *')}>
      <Controller
        name='phoneNumber'
        control={control}
        rules={{
          required: t('Please type your phone number'),
          validate: (value) => validatePhoneNumber(value),
        }}
        defaultValue=''
        render={({ field: { value, onChange }, fieldState }) => (
          <div className={s.wrap}>
            <PhoneInput
              countries={countries}
              defaultCountry={t('pl')}
              placeholder={t('+48 605 555 555')}
              value={value}
              onChange={(value) => onChange(value)}
              disableDialCodePrefill={true}
            />
            {fieldState.error && (
              <p className={`${s.error}`}>
                {fieldState.error.message as string}
              </p>
            )}
          </div>
        )}
      />
    </FormItemWrapper>
  );
};

export default PhoneNumber;
