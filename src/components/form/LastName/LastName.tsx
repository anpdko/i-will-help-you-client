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
      regexp={
        /^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/
      }
      message={t('Please type your last name')}
      title={t('Last Name *')}
      classNameContainer={s.lastName}
    />
  );
};

export default LastName;
