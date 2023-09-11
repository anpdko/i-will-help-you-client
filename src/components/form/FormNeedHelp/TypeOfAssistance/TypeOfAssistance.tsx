import { Controller, useFormContext } from 'react-hook-form';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import CheckboxSelect from './CheckboxSelect';
import { CheckboxInput } from '../../../UI';
import { typeOfAssistanceList } from '../../../../utils/typeOfAssistanceList';
import s from './TypeOfAssistance.module.scss';

const TypeOfAssistance = () => {
  const { control } = useFormContext();

  return (
    <FormItemWrapper
      className={s.assistance}
      title='Type of assistance (you can select several options) *'
    >
      <Controller
        control={control}
        name='typeOfAssistance'
        rules={{ required: true }}
        render={({ field: { onChange, value = [] } }) => (
          <>
            <div className={s.assistance__wrap}>
              {typeOfAssistanceList.map(
                (item: { id: string, title: string }) => (
                  <CheckboxSelect
                    title={item.title}
                    name={item.id}
                    id={item.id}
                    key={item.id}
                    checked={value.includes(item.id)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.checked) {
                        onChange([...value, item.id]);
                      } else {
                        onChange(
                          value.filter((val: string) => val !== item.id),
                        );
                      }
                    }}
                  />
                ),
              )}
            </div>
            <CheckboxInput
              id='selectAll'
              required={false}
              text='Choose all'
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
              }}
            />
          </>
        )}
      />
    </FormItemWrapper>
  );
};

export default TypeOfAssistance;
