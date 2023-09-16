import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import customStyles from './selectStyle';
import s from './SelectInput.module.scss';

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
  isMulti = false,
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
        <>
          <Select
            {...field}
            options={options}
            placeholder={placeholder}
            isMulti={isMulti}
            isSearchable={isSearchable}
            value={options.find((option: any) => option.value === field.value)}
            onChange={(selectedOption) => {
              field.onChange(
                (selectedOption as { value: string; label: string })?.value,
              );
            }}
            styles={customStyles}
            className={`${className}`}
          />
          {required && errorMessage && errors.country && (
            <p className={s.error}>{errorMessage}</p>
          )}
        </>
      )}
    />
  );
};

export default SelectInput;
