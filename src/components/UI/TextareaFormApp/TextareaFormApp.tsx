import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import s from './TextareaFormApp.module.scss';

interface TextareaFormAppProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
}

const TextareaFormApp = ({
  name,
  id,
  placeholder,
  cols,
  rows,
  className,
}: TextareaFormAppProps) => {
  const { register } = useFormContext();
  const { t } = useTranslation();

  const textareaProps = {
    name,
    id,
    placeholder: placeholder || `${t('Type here...')}`,
    cols: cols || 40,
    rows: rows || 5,
  };

  return (
    <textarea
      {...textareaProps}
      {...register(name as string, {})}
      className={`${s.textarea} ${className}`}
    />
  );
};

export default TextareaFormApp;
