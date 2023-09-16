import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { getTypeOfAssistance } from '@/api/getTypeOfAssistance';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import CheckboxSelect from './CheckboxSelect';
import { CheckboxInput } from '@components/UI';
import s from './TypeOfAssistance.module.scss';
import checkLabelsNearby from '@/services/form/checkLabelsNearby'

interface AssistanceTranslation {
  language: string;
  title: string;
}

interface AssistanceItem {
  _id: string;
  translations: AssistanceTranslation[];
}

interface TypeOfAssistance {
  title: string | undefined;
  id: string;
}

const TypeOfAssistance = () => {
  const { control } = useFormContext();
  const { t } = useTranslation();
  const [typeOfAssistanceList, setTypeOfAssistanceList] = useState<
    TypeOfAssistance[]
  >([]);

  const storedLanguage = localStorage.getItem('language');
  const language = storedLanguage && JSON.parse(storedLanguage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: AssistanceItem[] = await getTypeOfAssistance();

        const filteredData = data
          .filter((item) =>
            item.translations.some(
              (translation: AssistanceTranslation) =>
                translation.language === language,
            ),
          )
          .map((item) => ({
            title: item.translations.find(
              (translation: AssistanceTranslation) =>
                translation.language === language,
            )?.title,
            id: item._id,
          }));

        setTypeOfAssistanceList(filteredData);
      } catch (error) {
        console.error('Error fetching assistance list:', error);
        setTypeOfAssistanceList([]);
      }
    };

    fetchData();
  }, [language]);


  const checkButtonsNearbySide = () =>{
    const elems = document.querySelectorAll('#list_projects li')
    checkLabelsNearby(elems, s)
  }

  return (
    <FormItemWrapper
      className={s.assistance}
      title={t('Type of assistance (you can select several options) *')}
    >
      <Controller
        control={control}
        name='typeOfAssistance'
        rules={{ required: true }}
        render={({ field: { onChange, value = [] } }) => (
          <>
            <ul className={s.assistance__wrap} id="list_projects">
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
                        onChange(value.filter((val: string) => val !== item.id));
                      }
                      checkButtonsNearbySide()
                    }}
                  />
                </li>
              ))}
            </ul>
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
                checkButtonsNearbySide()
              }}
            />
          </>
        )}
      />
    </FormItemWrapper>
  );
};

export default TypeOfAssistance;
