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
      regexp={/^(?=.*[a-zA-Z\xC0-\uFFFF])[a-zA-Z\xC0-\uFFFF\-]{2,30}$/}
      message={{
        required: t('Please type your first name'),
        pattern: t(
          'First name should be 2-30 characters long and can only contain Latin and Cyrillic letters and hyphens',
        ),
      }}
      title={t('First Name *')}
      classNameContainer={s.firstName}
      capitalizeFirstLetter={true}
    />
  );
};

export default FirstName;
