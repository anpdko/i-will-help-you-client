import { useEffect } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { languageList, languageLevel } from '../../../../utils/languageList';
import { SelectInput } from '../../../UI';
import { PlusIcon } from '../../../icons/PlusIcon';
import s from './Language.module.scss';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';

const Language = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'languages',
  });

  useEffect(() => {
    if (fields.length === 0) {
      append({ language: null, languageLevel: null });
    }
  }, [append, fields.length]);

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
          <SelectInput
            commonName='languages'
            name='language'
            options={languages}
            placeholder='Choose language'
            index={index}
            className={s.language__input}
          />

          <SelectInput
            commonName='languages'
            name='languageLevel'
            options={listOfLevels}
            placeholder='Choose level'
            index={index}
            className={s.language__input}
          />

          {index > 0 && (
            <button type='button' onClick={() => remove(index)}>
              Delete
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
