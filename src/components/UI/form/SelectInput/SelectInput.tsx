import { Controller, useFormContext } from 'react-hook-form';
import { Select } from 'antd';
import s from './SelectInput.module.scss';
import './SelectStyles.scss';

interface SelectInputProps {
  name: string;
  commonName?: string;
  index?: number;
  options: any;
  placeholder: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  required?: boolean;
  errorMessage?: string;
  className?: string;
}

const SelectInput = ({
  commonName,
  name,
  index,
  options,
  placeholder,
  isSearchable = true,
  required = false,
  errorMessage,
  className,
}: SelectInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={index ? `${commonName}[${index}].${name}` : name}
      control={control}
      defaultValue={null}
      rules={{ required: required }}
      render={({ field }) => (
        <div className={s.wrap}>
          <Select
            {...field}
            options={options}
            placeholder={placeholder}
            showSearch={isSearchable}
            className={`${className}`}
          />
          {required && errorMessage && errors.country && (
            <p className={s.error}>{errorMessage}</p>
          )}
        </div>
      )}
    />
  );
};

export default SelectInput;
