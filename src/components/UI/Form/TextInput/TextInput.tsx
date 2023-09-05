import { useFormContext } from 'react-hook-form';
import s from '../Form.module.scss';

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  type?: 'text' | 'email';
  id: string;
  placeholder?: string;
  required?: boolean;
  regexp?: RegExp;
  message?: string;
  title?: string;
  classNameContainer?: string;
  classNameLabel?: string;
  classNameInput?: string;
  classNameError?: string;
  rest?: Record<string, any>;
}

const TextInput = ({
  id,
  type = 'text',
  placeholder = '',
  required = false,
  regexp = /^.+$/,
  message = 'Please fill in this field',
  title = '',
  classNameContainer,
  classNameLabel,
  classNameInput,
  classNameError,
  ...rest
}: TextInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${s.form__container} ${classNameContainer}`}>
      <label className={`${s.form__label} ${classNameLabel}`}>
        {title}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(id, {
            required: required,
            pattern: {
              value: regexp,
              message: message,
            },
          })}
          className={`${s.form__input} ${classNameInput}`}
          {...rest}
        />
      </label>
      {errors[id] && (
        <p className={`${s.form__error} ${classNameError}`}>
          {errors[id]?.message as string}
        </p>
      )}
    </div>
  );
};

export default TextInput;
