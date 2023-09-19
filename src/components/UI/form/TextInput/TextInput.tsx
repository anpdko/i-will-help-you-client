import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import s from '../Form.module.scss';

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  type?: 'text' | 'email';
  id: string;
  placeholder?: string;
  required?: boolean;
  regexp?: RegExp;
  message?: { required: string; pattern: string };
  title?: string;
  classNameContainer?: string;
  classNameLabel?: string;
  classNameInput?: string;
  classNameError?: string;
  capitalizeFirstLetter?: boolean;
  rest?: Record<string, any>;
}

const TextInput = ({
  id,
  type = 'text',
  placeholder = '',
  required = false,
  regexp = /^.+$/,
  message = {
    required: 'Please fill in this field',
    pattern: 'Please fill in this field',
  },
  title = '',
  classNameContainer,
  classNameLabel,
  classNameInput,
  classNameError,
  capitalizeFirstLetter = false,
  ...rest
}: TextInputProps) => {
  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const capitalizedInput = capitalizeFirstLetter
      ? inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
      : inputValue;
    setValue(id, capitalizedInput);
    trigger(id);
  };

  return (
    <div className={`${s.form__container} ${classNameContainer}`}>
      <label className={`${s.form__label} ${classNameLabel}`}>
        {title}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(id, {
            required: required ? message.required : false,
            pattern: {
              value: regexp,
              message: message.pattern,
            },
          })}
          className={`${s.form__input} ${classNameInput}`}
          onChange={handleInputChange}
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
