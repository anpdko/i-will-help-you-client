interface CheckboxSelectProps {
  title: string;
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent) => void;
  checked?: boolean;
}

const CheckboxSelect = ({
  title,
  name,
  id,
  onChange,
  checked,
  onClick,
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
      <label onClick={onClick} htmlFor={id}>
        {title}
      </label>
    </>
  );
};

export default CheckboxSelect;
