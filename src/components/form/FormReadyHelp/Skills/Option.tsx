import { components, OptionProps } from 'react-select';

interface IOption {
  value: string;
  label: string;
  isSelected: boolean;
}

const Option = (props: OptionProps<IOption>) => {
  console.log(props.isSelected);
  console.log(props.label);
  return (
    <div>
      <components.Option {...props}>
        <input type='checkbox' checked={props.isSelected} />
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default Option;
