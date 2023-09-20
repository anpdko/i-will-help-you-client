import { useTranslation } from 'react-i18next';
import { useFormContext, Controller } from 'react-hook-form';
import Select, { OnChangeValue, StylesConfig } from 'react-select';
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

  const skillsStyles: StylesConfig<any> = {
    ...customStyles,
    menu: (baseStyles) => ({
      ...baseStyles,
      paddingTop: '2rem',
      paddingBottom: '2rem',
      borderRadius: '0.6rem',
      border: '1px solid  var(--black)',
    }),
    multiValue: (baseStyles) => ({
      ...baseStyles,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: 'var(--orange-for-states)',
      padding: '0.63rem 1.13rem',
      margin: '0',
      borderRadius: '0.5rem',
    }),
    option: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: 'var(--light-grey)',
      },
    }),
  };

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
            styles={skillsStyles}
            isMulti
            closeMenuOnSelect={false}
            value={skills.find((option) => option.value === field.value)}
            hideSelectedOptions={false}
            components={{
              Option,
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
