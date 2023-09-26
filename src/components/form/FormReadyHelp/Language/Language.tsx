import { useTranslation } from 'react-i18next';
import { useFormContext, useFieldArray, Controller } from 'react-hook-form';
import { languageList, languageLevel } from '@utils/languageList';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { SelectInput } from '@/components/UI';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';
import s from './Language.module.scss';

const Language = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'languages',
  });

  const { t } = useTranslation();

  if (fields.length === 0) {
    append({ language: null, level: null });
  }

  const addLanguageField = () => {
    append({ language: null, level: null });
  };

  const languages = languageList.map((item) => ({
    value: `${t(item.language)}`,
    label: `${t(item.language)}`,
  }));

  const listOfLevels = languageLevel.map((item) => ({
    value: `${t(item.level)}`,
    label: `${t(item.level)}`,
  }));

  const hasError = errors.languages;

  return (
    <FormItemWrapper className={s.languages} title={t('Language knowledge *')}>
      {fields.map((item, index) => (
        <div key={item.id} className={s.language}>
          <Controller
            name={`languages[${index}].language`}
            control={control}
            rules={{ required: true }}
            defaultValue={null}
            render={({ field }) => (
              <SelectInput
                field={field}
                options={languages}
                placeholder={t('Choose language')}
                className={s.language__input}
              />
            )}
          />

          <Controller
            name={`languages[${index}].level`}
            control={control}
            rules={{ required: true }}
            defaultValue={null}
            render={({ field }) => (
              <SelectInput
                field={field}
                options={listOfLevels}
                placeholder={t('Choose level')}
                className={s.language__input}
              />
            )}
          />

          {index > 0 && (
            <button type='button' onClick={() => remove(index)}>
              <HiOutlineX />
            </button>
          )}
        </div>
      ))}

      <button
        type='button'
        onClick={addLanguageField}
        className={s.language__button_add}
      >
        {t('Add one more')} <HiOutlinePlus />
      </button>

      {hasError && (
        <p className={s.error}>{t('Please fill in all the fields')}</p>
      )}
    </FormItemWrapper>
  );
};

export default Language;
