import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import s from '../Form.module.scss';

interface DateInputProps {
  title?: string;
  name: string;
  required?: boolean;
  message?: string;
  placeholder?: string;
  format?: string;
  classNameContainer?: string;
  classNameLabel?: string;
  classNameDate?: string;
  classNameError?: string;
}

const DateInput = ({
  title,
  name,
  required = false,
  message = '',
  placeholder = '',
  format = 'MM/DD/YYYY',
  classNameContainer,
  classNameLabel,
  classNameDate,
  classNameError,
}: DateInputProps) => {
  const { control } = useFormContext();

  return (
    <div className={`${s.form__container} ${classNameContainer}`}>
      <label className={`${s.form__label} ${classNameLabel}`}>
        {title}
        <Controller
          control={control}
          name={name}
          rules={{
            required: {
              value: required,
              message: message,
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <>
                <DatePicker
                  placeholder={placeholder}
                  format={format}
                  ref={field.ref}
                  name={field.name}
                  onBlur={field.onBlur}
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) => {
                    field.onChange(date ? date.valueOf() : null);
                  }}
                  className={`${s.form__input} ${classNameDate}`}
                />
                {fieldState.error ? (
                  <p className={`${s.form__error} ${classNameError}`}>
                    {fieldState.error?.message}
                  </p>
                ) : null}
              </>
            );
          }}
        />
      </label>
    </div>
  );
};

export default DateInput;
