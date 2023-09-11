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
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{title}</label>
    </>
  );
};

export default CheckboxSelect;
