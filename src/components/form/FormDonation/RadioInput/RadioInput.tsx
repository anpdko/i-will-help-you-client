import s from './RadioInput.module.scss';

interface RadioInputProps {
  name: string;
  id: string;
  onChange: (value: string) => void;
  value: string;
  title: string;
  checked?: boolean;
}

const RadioInput = ({ name, id, onChange, value, title }: RadioInputProps) => {
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
      />
      <label htmlFor={id} className={s.radio__label}>
        {title}
      </label>
    </>
  );
};

export default RadioInput;
