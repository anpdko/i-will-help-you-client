import { Controller, useFormContext } from 'react-hook-form';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { useTranslation } from 'react-i18next';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import s from './PhoneNumber.module.scss';

const PhoneNumber = () => {
  const { control } = useFormContext();
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
        render={({ field: { value, ref, onChange }, fieldState }) => (
          <div className={s.wrap}>
            {console.log(ref)}
            <PhoneInput
              value={value}
              onChange={(value) => onChange(value)}
              hideDropdown={true}
              defaultCountry={t('pl')}
              placeholder={t('+48 605 555 555')}
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
