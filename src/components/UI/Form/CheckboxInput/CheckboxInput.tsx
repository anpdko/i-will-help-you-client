import { useFormContext } from 'react-hook-form';
import s from './CheckboxInput.module.scss';

interface CheckboxInputProps {
  id: string;
  required: boolean;
  text: string;
}

const CheckboxInput = ({ id, required = false, text }: CheckboxInputProps) => {
  const { register } = useFormContext();

  return (
    <div className={s.checkboxes__wrap}>
      <input
        type='checkbox'
        id={id}
        {...register(id, {
          required: required,
        })}
        className={s.checkboxes__input}
      />
      <p className={s.checkboxes__text}>{text}</p>
    </div>
  );
};

export default CheckboxInput;
