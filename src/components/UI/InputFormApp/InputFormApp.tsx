import { useFormContext } from 'react-hook-form';
import s from './InputFormApp.module.scss';

interface InputFormAppProps {
  id: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  regexp?: RegExp;
  message?: string;
}

const InputFormApp = ({
  id,
  placeholder = "",
  className,
  required = true,
  regexp = /^.+$/,
  message = 'Please fill in this field',
}: InputFormAppProps) => {
  const { register } = useFormContext();

  return (
    <input
      type='text'
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
    />
  );
};

export default InputFormApp;
