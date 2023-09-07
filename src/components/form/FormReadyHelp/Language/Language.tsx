import { useFormContext, useFieldArray, Controller } from 'react-hook-form';
import Select from 'react-select';
import customStyles from '../../../UI/Form/SelectInput/selectStyle';
import { languageList, languageLevel } from '../../../../utils/languageList';
import { PlusIcon } from '../../../icons/PlusIcon';
import s from './Language.module.scss';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { DeleteIcon } from '../../../icons/DeleteIcon';

const Language = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'languages',
  });

  if (fields.length === 0) {
    append({ language: null, languageLevel: null });
  }

  const addLanguageField = () => {
    append({ language: null, languageLevel: null });
  };

  const languages = languageList.map((item) => ({
    value: item.language,
    label: item.language,
  }));

  const listOfLevels = languageLevel.map((item) => ({
    value: item.level,
    label: item.level,
  }));

  return (
    <FormItemWrapper className={s.languages} title='Language knowledge'>
      {fields.map((item, index) => (
        <div key={item.id} className={s.language}>
          <Controller
            name={`languages[${index}].language`}
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Select
                {...field}
                options={languages}
                styles={customStyles}
                placeholder='Choose language'
                value={languages.find((option) => option.value === field.value)}
                onChange={(selectedOption) => {
                  field.onChange(
                    (selectedOption as { value: string; label: string })?.value,
                  );
                }}
                className={s.language__input}
              />
            )}
          />

          <Controller
            name={`languages[${index}].languageLevel`}
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Select
                {...field}
                options={listOfLevels}
                styles={customStyles}
                placeholder='Choose level'
                value={languages.find((option) => option.value === field.value)}
                onChange={(selectedOption) => {
                  field.onChange(
                    (selectedOption as { value: string; label: string })?.value,
                  );
                }}
                className={s.language__input}
              />
            )}
          />

          {index > 0 && (
            <button type='button' onClick={() => remove(index)}>
              <DeleteIcon />
            </button>
          )}
        </div>
      ))}

      <button
        type='button'
        onClick={addLanguageField}
        className={s.language__button_add}
      >
        Add one more <PlusIcon />
      </button>
    </FormItemWrapper>
  );
};

export default Language;
