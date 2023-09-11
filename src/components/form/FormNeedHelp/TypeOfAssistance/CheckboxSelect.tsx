import s from './TypeOfAssistance.module.scss';

interface CheckboxSelectProps {
  title: string;
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const CheckboxSelect = ({
  title,
  name,
  id,
  onChange,
  checked,
}: CheckboxSelectProps) => {
  return (
    <>
      <input
        type='checkbox'
        name={name}
        id={id}
        className={s.checkboxItem_input}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className={s.checkboxItem_label}>
        {title}
      </label>
    </>
  );
};

export default CheckboxSelect;
