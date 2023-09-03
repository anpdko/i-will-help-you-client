import { useEffect } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import {
  daysOfWeekOptions,
  timeOptions,
} from '../../../utils/daysOfVolunteeringList';
import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
import { PlusIcon } from '../../icons/PlusIcon';
import customStyles from '../selectStyle';
import s from './DaysOfVolunteering.module.scss';

const DaysOfVolunteering = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'daysVolunteer',
  });

  useEffect(() => {
    if (fields.length === 0) {
      append({ day: null, timeStart: null, timeEnd: null });
    }
  }, [append, fields.length]);

  const addDaysField = () => {
    append({ day: null, timeStart: null, timeEnd: null });
  };

  const days = daysOfWeekOptions.map((item) => ({
    value: item.day,
    label: item.day,
  }));

  const times = timeOptions.map((item) => ({
    value: item.time,
    label: item.time,
  }));

  return (
    <FormItemContainer section='days' className={s.volunteer}>
      <FormLabel
        labelFor='days'
        title='Days and hours you can volunteer (you can select several options) *'
      />
      {fields.map((item, index) => (
        <div key={item.id} className={s.volunteer__inputs}>
          <div className={s.volunteer__wrap}>
            <p className={s.volunteer__title}>Day of the week</p>
            <Controller
              name={`daysVolunteer[${index}].day`}
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <Select
                  {...field}
                  options={days}
                  placeholder='Day'
                  styles={customStyles}
                  value={days.find((option) => option.value === field.value)}
                  onChange={(selectedOption) => {
                    field.onChange(
                      (selectedOption as { value: string; label: string })
                        ?.value,
                    );
                  }}
                  className={s.volunteer__input_days}
                />
              )}
              rules={{ required: true }}
            />
          </div>

          <div className={s.volunteer__wrap}>
            <p className={s.volunteer__title}>Time (start)</p>
            <Controller
              name={`daysVolunteer[${index}].timeStart`}
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <Select
                  {...field}
                  options={times}
                  placeholder='Start Time'
                  styles={customStyles}
                  value={times.find((option) => option.value === field.value)}
                  onChange={(selectedOption) => {
                    field.onChange(
                      (selectedOption as { value: string; label: string })
                        ?.value,
                    );
                  }}
                  className={s.volunteer__input_time}
                />
              )}
              rules={{ required: true }}
            />
          </div>

          <div className={s.volunteer__wrap}>
            <p className={s.volunteer__title}>Time (finish)</p>
            <Controller
              name={`daysVolunteer[${index}].timeEnd`}
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <Select
                  {...field}
                  options={times}
                  placeholder='End Time'
                  styles={customStyles}
                  value={times.find((option) => option.value === field.value)}
                  onChange={(selectedOption) => {
                    field.onChange(
                      (selectedOption as { value: string; label: string })
                        ?.value,
                    );
                  }}
                  className={s.volunteer__input_time}
                />
              )}
              rules={{ required: true }}
            />
          </div>

          {index > 0 && (
            <button
              type='button'
              onClick={() => remove(index)}
              className={s.volunteer__button_remove}
            >
              Delete
            </button>
          )}
        </div>
      ))}
      <button
        type='button'
        onClick={addDaysField}
        className={s.volunteer__button_add}
      >
        Add one more <PlusIcon />
      </button>
    </FormItemContainer>
  );
};

export default DaysOfVolunteering;
