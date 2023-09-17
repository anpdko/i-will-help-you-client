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
      <Controller
        name='phoneNumber'
        control={control}
        rules={{
          required: t('Please type your phone number'),
          minLength: 7,
        }}
        defaultValue=''
        render={({ field: { value, onChange }, fieldState }) => (
          <>
            <PhoneInput
              value={value}
              onChange={(value) => onChange(value)}
              hideDropdown={true}
              defaultCountry={t('pl')}
              placeholder={t('+48 605 555 555')}
              disableDialCodePrefill={true}
            />
            {fieldState.error && (
              <p className={`${s.phone__error}`}>
                {fieldState.error.message as string}
              </p>
            )}
          </>
        )}
      />
    </FormItemWrapper>
  );
};

export default PhoneNumber;
