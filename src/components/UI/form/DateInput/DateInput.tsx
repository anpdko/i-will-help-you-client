import { useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ConfigProvider, DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import locale from 'antd/locale/uk_UA';
import dayjs from 'dayjs';
import s from '../Form.module.scss';

import 'dayjs/locale/uk';

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
  const value = localStorage.getItem('language');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (value) {
      setLang(JSON.parse(value));
    } else {
      return;
    }
  }, [value]);

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    const year = current.year();
    return year < 1923 || year > 2023;
  };

  return (
    <div className={`${s.container} ${classNameContainer}`}>
      <label className={`${s.label} ${classNameLabel}`}>
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
                {lang === 'ua' ? (
                  <ConfigProvider locale={locale}>
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
                      className={`${s.input} ${classNameDate}`}
                      inputReadOnly
                      disabledDate={disabledDate}
                    />
                  </ConfigProvider>
                ) : (
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
                    className={`${s.input} ${classNameDate}`}
                    inputReadOnly
                    disabledDate={disabledDate}
                  />
                )}
                {fieldState.error ? (
                  <p className={`${s.error} ${classNameError}`}>
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
