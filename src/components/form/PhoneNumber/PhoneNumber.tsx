import { useFormContext } from 'react-hook-form';
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
  const { t } = useTranslation();
  const {
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

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
  };

  {
    register('phoneNumber', {
      required: t('Please type your phone number'),
      validate: (value) => validatePhoneNumber(value),
    });
  }

  return (
    <FormItemWrapper className={s.phone} title={t('Phone Number *')}>
      <div className={s.wrap}>
        <PhoneInput
          countries={countries}
          defaultCountry={t('pl')}
          placeholder={t('+48 605 555 555')}
          value={watch('phoneNumber')}
          onChange={(value) => {
            setValue('phoneNumber', value);
            clearErrors('phoneNumber');
          }}
          disableDialCodePrefill={true}
        />
        {errors.phoneNumber && (
          <p className={`${s.error}`}>{errors.phoneNumber.message as string}</p>
        )}
      </div>
    </FormItemWrapper>
  );
};

export default PhoneNumber;
