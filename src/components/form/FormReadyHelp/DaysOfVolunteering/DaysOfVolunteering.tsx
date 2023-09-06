import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import {
  daysOfWeekOptions,
  timeOptions,
} from '../../../../utils/daysOfVolunteeringList';
// import FormItemContainer from '../../FormItemContainer';
// import FormLabel from '../../FormLabel';
import { SelectInput } from '../../../UI';
import { PlusIcon } from '../../../icons/PlusIcon';
import s from './DaysOfVolunteering.module.scss';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';

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
    <FormItemWrapper
      className={s.volunteer}
      title='Days and hours you can volunteer (you can select several options) *'
    >
      {fields.map((item, index) => (
        <div key={item.id} className={s.volunteer__inputs}>
          <div className={s.volunteer__wrap}>
            <p className={s.volunteer__title}>Day of the week</p>
            <SelectInput
              commonName='daysVolunteer'
              name='day'
              options={days}
              placeholder='Day'
              index={index}
              className={s.volunteer__input_days}
            />
          </div>

          <div className={s.volunteer__wrap}>
            <p className={s.volunteer__title}>Time (start)</p>
            <SelectInput
              commonName='daysVolunteer'
              name='timeStart'
              options={times}
              placeholder='Start Time'
              index={index}
              className={s.volunteer__input_time}
            />
          </div>

          <div className={s.volunteer__wrap}>
            <p className={s.volunteer__title}>Time (finish)</p>
            <SelectInput
              commonName='daysVolunteer'
              name='timeEnd'
              options={times}
              placeholder='End Time'
              index={index}
              className={s.volunteer__input_time}
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
    </FormItemWrapper>
  );
};

export default DaysOfVolunteering;
