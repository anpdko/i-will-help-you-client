import { useTranslation } from 'react-i18next';
import { useFormContext, Controller } from 'react-hook-form';
import Select, { OnChangeValue } from 'react-select';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import Option from './Option';
import { skillsList } from '@utils/skillsList';
import customStyles from '@components/UI/form/SelectInput/selectStyle';
import s from './Skills.module.scss';

interface ISkills {
  value: string;
  label: string;
  isSelected: boolean;
}

const Skills = () => {
  const { control } = useFormContext();

  const { t } = useTranslation();

  const skills = skillsList.map((item) => ({
    isSelected: false,
    value: `${t(item.skill)}`,
    label: `${t(item.skill)}`,
  }));

  return (
    <FormItemWrapper
      className={s.skills}
      title={t('Choose your skills (you can select several options) *')}
    >
      <Controller
        name='skills'
        control={control}
        rules={{
          required: {
            value: true,
            message: `${t('Please select at least one skill')}`,
          },
        }}
        defaultValue={null}
        render={({ field }) => (
          <Select
            {...field}
            options={skills}
            placeholder={t('Search your skills')}
            styles={customStyles}
            isMulti
            closeMenuOnSelect={false}
            value={skills.find((option) => option.value === field.value)}
            hideSelectedOptions={false}
            components={{
              Option
            }}
            onChange={(selectedOption: OnChangeValue<ISkills, boolean>) => {
              field.onChange(
                (selectedOption as ISkills[])?.map((skill) => skill.value),
              );
            }}
            className={s.skills__input}
            // menuIsOpen={true}
          />
        )}
      />
    </FormItemWrapper>
  );
};

export default Skills;
