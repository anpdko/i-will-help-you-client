import { useTranslation } from 'react-i18next';
import { TextInput } from '../../UI';

interface EmailProps {
  className?: string;
  required?: boolean;
}

const Email = ({ className, required = true }: EmailProps) => {
  const { t } = useTranslation();

  return (
    <TextInput
      type='email'
      id='email'
      placeholder='mail@example.com'
      required={required}
      regexp={
        /^(?!.*--)(?!.*__)(?!.*\.\.)(?!.*-$)(?!.*\.$)(?!.*^\..*$)(?!.*\.$)(?!.*^-)[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/g
      }
      message={{
        required: t('Please type your email address'),
        pattern: t('Please write your email in the format mail@example.com'),
      }}
      title={required ? t('Email ') + '*' : t('Email ')}
      classNameContainer={className}
    />
  );
};

export default Email;
