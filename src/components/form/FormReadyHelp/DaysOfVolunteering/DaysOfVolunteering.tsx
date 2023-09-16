import { useTranslation } from 'react-i18next';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import customStyles from '@components/UI/form/SelectInput/selectStyle';
import { daysOfWeekOptions, timeOptions } from '@utils/daysOfVolunteeringList';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';
import s from './DaysOfVolunteering.module.scss';

const DaysOfVolunteering = () => {
  const { control } = useFormContext();
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

  const times = timeOptions.map((item) => ({
    value: item.time,
    label: item.time,
  }));

  return (
    <FormItemWrapper
      className={s.volunteer}
      title={t(
        'Days and hours you can volunteer (you can select several options) *',
      )}
    >
      {fields.map((item, index) => (
        <div key={item.id} className={s.volunteer__inputs}>
          <div className={s.volunteer__column}>
            <div className={s.volunteer__wrap}>
              <p className={s.volunteer__title}>{t('Day of the week')}</p>
              <Controller
                name={`daysVolunteer[${index}].day`}
                control={control}
                rules={{ required: true }}
                defaultValue={null}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={days}
                    placeholder={t('Day')}
                    isSearchable={false}
                    value={days.find((option) => option.value === field.value)}
                    onChange={(selectedOption) => {
                      field.onChange(
                        (selectedOption as { value: string; label: string })
                        ?.value,
                        );
                      }}
                    styles={customStyles}
                    className={s.volunteer__input_days}
                  />
                )}
              />
            </div>
          </div>

          <div className={s.volunteer__columns}>
            <div className={s.volunteer__wrap}>
              <p className={s.volunteer__title}>{t('Time (start)')}</p>
              <Controller
                name={`daysVolunteer[${index}].timeStart`}
                control={control}
                rules={{ required: true }}
                defaultValue={null}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={times}
                    placeholder={t('Start Time')}
                    isSearchable={false}
                    value={times.find((option) => option.value === field.value)}
                    onChange={(selectedOption) => {
                      field.onChange(
                        (selectedOption as { value: string; label: string })
                        ?.value,
                        );
                      }}
                    styles={customStyles}
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
                  <Select
                    {...field}
                    options={times}
                    placeholder={t('End Time')}
                    isSearchable={false}
                    value={times.find((option) => option.value === field.value)}
                    onChange={(selectedOption) => {
                      field.onChange(
                        (selectedOption as { value: string; label: string })
                        ?.value,
                        );
                      }}
                    styles={customStyles}
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
              className={s.volunteer__button_remove}
            >
              <HiOutlineX />
            </button>
          )}
        </div>
      ))}
      <button
        type='button'
        onClick={addDaysField}
        className={s.volunteer__button_add}
      >
        {t('Add one more')} <HiOutlinePlus />
      </button>
    </FormItemWrapper>
  );
};

export default DaysOfVolunteering;
