import { useTranslation } from 'react-i18next';
import { DateInput } from '../../../UI';
import s from './DateOfBirth.module.scss';

const DateOfBirth = () => {
  const { t } = useTranslation();
  return (
    <DateInput
      title={t('Date of Birth *')}
      name='dateOfBirth'
      required={true}
      message={t('Please enter your birthday in the format MM/DD/YYYY')}
      placeholder={t('MM/DD/YYYY')}
      format='MM/DD/YYYY'
      classNameContainer={s.dob}
      classNameError={s.dob__error}
    />
  );
};

export default DateOfBirth;
