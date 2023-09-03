import { useFormContext, Controller } from 'react-hook-form';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
import basic from '../FormReadyHelp.module.scss';
import s from './DateOfBirth.module.scss';

const DateOfBirth = () => {
  const { control } = useFormContext();

  return (
    <FormItemContainer section='dob'>
      <FormLabel title={'Date of Birth *'} labelFor='dataOfBirth' />
      <Controller
        control={control}
        name='dataOfBirth'
        rules={{
          required: 'Please enter your birthday in the format MM/DD/YYYY',
        }}
        render={({ field, fieldState }) => {
          return (
            <>
              <DatePicker
                placeholder='MM/DD/YYYY'
                format={'MM/DD/YYYY'}
                ref={field.ref}
                name={field.name}
                onBlur={field.onBlur}
                value={field.value ? dayjs(field.value) : null}
                onChange={(date) => {
                  field.onChange(date ? date.valueOf() : null);
                }}
                className={`${basic.form__input} ${s.dob__input}`}
              />
              {fieldState.error ? (
                <p className={basic.form__error}>{fieldState.error?.message}</p>
              ) : null}
            </>
          );
        }}
      />
    </FormItemContainer>
  );
};

export default DateOfBirth;
