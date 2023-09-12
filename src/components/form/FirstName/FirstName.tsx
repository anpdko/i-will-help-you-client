import { useTranslation } from 'react-i18next';
import { TextInput } from '../../UI';
import s from './FirstName.module.scss';

const FirstName = () => {
  const { t } = useTranslation();

  return (
    <TextInput
      type='text'
      id='firstName'
      placeholder={t('Enter your first name')}
      required={true}
      regexp={
        /^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/
      }
      message={t('Please type your first name')}
      title={t('First Name *')}
      classNameContainer={s.firstName}
    />
  );
};

export default FirstName;
