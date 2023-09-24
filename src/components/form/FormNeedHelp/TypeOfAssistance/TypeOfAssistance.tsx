import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useProjectTitles } from '@/hooks/useProjectTitles';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import CheckboxSelect from './CheckboxSelect';
import { CheckboxInput } from '@components/UI';
import s from './TypeOfAssistance.module.scss';
import checkLabelsNearby from '@/services/form/checkLabelsNearby';

const TypeOfAssistance = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const typeOfAssistanceList = useProjectTitles(language);

  const checkButtonsNearbySide = () => {
    const elems = document.querySelectorAll('#list_projects li');
    checkLabelsNearby(elems, s);
  };

  return (
    <FormItemWrapper
      className={s.assistance}
      title={t('Type of assistance (you can select several options) *')}
    >
      <Controller
        control={control}
        name='typeOfAssistance'
        rules={{ required: t('Please select at least one type of assistance') }}
        render={({ field: { onChange, value = [] } }) => (
          <div className={s.wrap}>
            <ul className={s.assistance__wrap} id='list_projects'>
              {typeOfAssistanceList.map((item) => (
                <li key={item.id}>
                  <CheckboxSelect
                    title={item.title as string}
                    name={item.id}
                    id={item.id}
                    checked={value.includes(item.id)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.checked) {
                        onChange([...value, item.id]);
                      } else {
                        onChange(
                          value.filter((val: string) => val !== item.id),
                        );
                      }
                      checkButtonsNearbySide();
                    }}
                  />
                </li>
              ))}
            </ul>
            {errors.typeOfAssistance && (
              <p className={s.error}>
                {errors.typeOfAssistance.message as string}
              </p>
            )}
            <CheckboxInput
              id='selectAll'
              required={false}
              text={t('Choose all')}
              className={s.assistance__checkbox_all}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked) {
                  const allItemIds = typeOfAssistanceList.map(
                    (item) => item.id,
                  );
                  onChange(allItemIds);
                } else {
                  onChange([]);
                }
                checkButtonsNearbySide();
              }}
            />
          </div>
        )}
      />
    </FormItemWrapper>
  );
};

export default TypeOfAssistance;
