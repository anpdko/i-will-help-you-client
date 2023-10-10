import { useTranslation } from 'react-i18next';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import {
  daysOfWeekOptions,
  startTimeOptions,
  finishTimeOptions,
} from '@utils/daysOfVolunteeringList';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { SelectInput } from '@/components/UI';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';
import s from './DaysOfVolunteering.module.scss';

const DaysOfVolunteering = () => {
  const { control, formState } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'daysVolunteer',
  });

  const { t } = useTranslation();

  if (fields.length === 0) {
    append({ day: null, timeStart: null, timeFinish: null });
  }

  const addDaysField = () => {
    append({ day: null, timeStart: null, timeFinish: null });
  };

  const days = daysOfWeekOptions.map((item) => ({
    value: `${t(item.day)}`,
    label: `${t(item.day)}`,
  }));

  const startTimes = startTimeOptions.map((item) => ({
    value: item.time,
    label: item.time,
  }));

  const finishTimes = finishTimeOptions.map((item) => ({
    value: item.time,
    label: item.time,
  }));

  const hasError = formState.errors.daysVolunteer;

  return (
    <FormItemWrapper
      className={s.volunteer}
      title={t(
        'Days and hours you can volunteer (you can select several options) *',
      )}
    >
      <div className={s.volunteer__block}>
        {fields.map((item, index) => (
          <div key={item.id} className={s.volunteer__inputs}>
            <div className={s.volunteer__day}>
              <div className={s.volunteer__wrap}>
                <p className={s.volunteer__title}>{t('Day of the week')}</p>
                <Controller
                  name={`daysVolunteer[${index}].day`}
                  control={control}
                  rules={{ required: true }}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectInput
                      field={field}
                      options={days}
                      placeholder={t('Day')}
                      className={s.volunteer__input_days}
                    />
                  )}
                />
              </div>
            </div>

            <div className={s.volunteer__time}>
              <div className={s.volunteer__wrap}>
                <p className={s.volunteer__title}>{t('Time (start)')}</p>
                <Controller
                  name={`daysVolunteer[${index}].timeStart`}
                  control={control}
                  rules={{ required: true }}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectInput
                      field={field}
                      options={startTimes}
                      placeholder={t('Start Time')}
                      className={s.volunteer__input_time}
                    />
                  )}
                />
              </div>
              <div className={s.volunteer__wrap}>
                <p className={s.volunteer__title}>{t('Time (finish)')}</p>
                <Controller
                  name={`daysVolunteer[${index}].timeFinish`}
                  control={control}
                  rules={{ required: true }}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectInput
                      field={field}
                      options={finishTimes}
                      placeholder={t('End Time')}
                      className={s.volunteer__input_time}
                    />
                  )}
                />
              </div>
            </div>

            {index > 0 && (
              <button
                type='button'
                onClick={() => remove(index)}
                className={s.button_remove}
              >
                {t('Delete previous one')} <HiOutlineX />
              </button>
            )}
          </div>
        ))}

        <button type='button' onClick={addDaysField} className={s.button_add}>
          {t('Add one more')} <HiOutlinePlus />
        </button>

        {hasError && (
          <p className={s.error}>{t('Please fill in all the fields')}</p>
        )}
      </div>
    </FormItemWrapper>
  );
};

export default DaysOfVolunteering;
