import { useFormContext } from 'react-hook-form';
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

  const textareaProps = {
    name,
    id,
    placeholder: placeholder || 'Type here...',
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
