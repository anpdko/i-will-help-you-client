import { useTranslation } from 'react-i18next';
import { TextInput } from '../../UI';
import s from './LastName.module.scss';

const LastName = () => {
  const { t } = useTranslation();

  return (
    <TextInput
      type='text'
      id='lastName'
      placeholder={t('Enter your last name')}
      required={true}
      regexp={/^(?=.*[a-zA-Z\xC0-\uFFFF])[a-zA-Z\xC0-\uFFFF\-]{2,100}$/}
      message={{
        required: t('Please type your last name'),
        pattern: t(
          'Last name should be 2-100 characters long and can only contain Latin and Cyrillic letters and hyphens',
        ),
      }}
      title={t('Last Name *')}
      classNameContainer={s.lastName}
      capitalizeFirstLetter={true}
    />
  );
};

export default LastName;
