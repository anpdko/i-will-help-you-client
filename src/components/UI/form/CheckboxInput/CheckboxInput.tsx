import { useFormContext } from 'react-hook-form';
import s from './CheckboxInput.module.scss';

interface CheckboxInputProps {
  id: string;
  required: boolean;
  text: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput = ({
  id,
  required = false,
  text,
  className,
  onChange,
}: CheckboxInputProps) => {
  const { register } = useFormContext();

  return (
    <div className={`${s.checkboxes__wrap} ${className}`}>
      <input
        type='checkbox'
        id={id}
        {...register(id, {
          required: required,
        })}
        className={s.checkboxes__input}
        onChange={onChange}
      />
      <p className={s.checkboxes__text}>{text}</p>
    </div>
  );
};

export default CheckboxInput;
