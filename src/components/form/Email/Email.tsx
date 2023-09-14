import { useTranslation } from 'react-i18next';
import { TextInput } from '../../UI';

interface EmailProps {
  className?: string;
}

const Email = ({ className }: EmailProps) => {
  const { t } = useTranslation();

  return (
    <TextInput
      type='email'
      id='email'
      placeholder='mail@example.com'
      required={true}
      regexp={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
      message={t('Please write your email in the format mail@example.com')}
      title={t('Email *')}
      classNameContainer={className}
    />
  );
};

export default Email;
