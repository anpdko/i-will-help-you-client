import { components, OptionProps } from 'react-select';
import s from './Skills.module.scss';

interface IOption {
  value: string;
  label: string;
}

const Option = (props: OptionProps<IOption>) => {
  return (
    <div className={s.container}>
      <components.Option {...props}>
        <input
          className={s.checkboxes}
          type='checkbox'
          checked={props.isSelected}
        />
        <label className={s.label}>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default Option;
