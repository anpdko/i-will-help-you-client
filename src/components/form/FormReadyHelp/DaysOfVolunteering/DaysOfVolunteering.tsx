import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import customStyles from '@components/UI/form/SelectInput/selectStyle';
import {
  daysOfWeekOptions,
  timeOptions,
} from '@utils/daysOfVolunteeringList';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { PlusIcon } from '@components/icons/PlusIcon';
import { DeleteIcon } from '@components/icons/DeleteIcon';
import s from './DaysOfVolunteering.module.scss';

const DaysOfVolunteering = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'daysVolunteer',
  });

  if (fields.length === 0) {
    append({ day: null, timeStart: null, timeFinish: null });
  }

  const addDaysField = () => {
    append({ day: null, timeStart: null, timeFinish: null });
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
    <FormItemWrapper
      className={s.volunteer}
      title='Days and hours you can volunteer (you can select several options) *'
    >
      {fields.map((item, index) => (
        <div key={item.id} className={s.volunteer__inputs}>
          <div className={s.volunteer__wrap}>
            <p className={s.volunteer__title}>Day of the week</p>
            <Controller
              name={`daysVolunteer[${index}].day`}
              control={control}
              rules={{ required: true }}
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
            />
          </div>

          <div className={s.volunteer__wrap}>
            <p className={s.volunteer__title}>Time (start)</p>
            <Controller
              name={`daysVolunteer[${index}].timeStart`}
              control={control}
              rules={{ required: true }}
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
            />
          </div>

          <div className={s.volunteer__wrap}>
            <p className={s.volunteer__title}>Time (finish)</p>
            <Controller
              name={`daysVolunteer[${index}].timeFinish`}
              control={control}
              rules={{ required: true }}
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
            />
          </div>

          {index > 0 && (
            <button
              type='button'
              onClick={() => remove(index)}
              className={s.volunteer__button_remove}
            >
              <DeleteIcon />
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
    </FormItemWrapper>
  );
};

export default DaysOfVolunteering;
