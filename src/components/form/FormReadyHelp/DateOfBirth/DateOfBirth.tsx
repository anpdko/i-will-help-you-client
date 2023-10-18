import { useTranslation } from 'react-i18next';
import { DateInput } from '@components/UI';
import s from './DateOfBirth.module.scss';

const DateOfBirth = () => {
  const { t } = useTranslation();
  return (
    <DateInput
      title={t('Date of Birth *')}
      name='dateOfBirth'
      required={true}
      message={t('Please select your birthday')}
      placeholder={t('MM/DD/YYYY')}
      format='MM/DD/YYYY'
      classNameContainer={s.dob}
    />
  );
};

export default DateOfBirth;
