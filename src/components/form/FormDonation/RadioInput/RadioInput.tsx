import s from './RadioInput.module.scss';

interface RadioInputProps {
  name: string;
  id: string;
  onChange: (value: string) => void;
  value: string;
  title: string;
  checked?: boolean;
  disabled?: boolean;
}

const RadioInput = ({
  name,
  id,
  onChange,
  value,
  title,
  disabled = false,
}: RadioInputProps) => {
  return (
    <>
      <input
        type='radio'
        name={name}
        id={id}
        className={s.radio__input}
        value={id}
        onChange={(e) => onChange(e.target.value)}
        checked={value === id}
        disabled={disabled}
      />
      <label htmlFor={id} className={s.radio__label}>
        {title}
      </label>
    </>
  );
};

export default RadioInput;
