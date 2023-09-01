import { useFormContext } from 'react-hook-form';
import s from './InputFormApp.module.scss';

interface InputFormAppProps extends React.HTMLProps<HTMLInputElement> {
  type?: string;
  id: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  regexp?: RegExp;
  message?: string;
  rest?: Record<string, any>;
}

const InputFormApp = ({
  type,
  id,
  placeholder = '',
  className,
  required = true,
  regexp = /^.+$/,
  message = 'Please fill in this field',
  ...rest
}: InputFormAppProps) => {
  const { register } = useFormContext();

  return (
    <input
      type={type || 'text'}
      id={id}
      placeholder={placeholder}
      {...register(id, {
        required: required,
        pattern: {
          value: regexp,
          message: message,
        },
      })}
      className={`${s.input} ${className}`}
      {...rest}
    />
  );
};

export default InputFormApp;
