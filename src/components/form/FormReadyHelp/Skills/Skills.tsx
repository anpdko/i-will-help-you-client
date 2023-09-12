import { useTranslation } from 'react-i18next';
import { useFormContext, Controller } from 'react-hook-form';
import Select from 'react-select';
import { skillsList } from '../../../../utils/skillsList';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import customStyles from '../../../UI/form/SelectInput/selectStyle';
import s from './Skills.module.scss';

const Skills = () => {
  const { control } = useFormContext();

  const { t } = useTranslation();

  const skills = skillsList.map((item) => ({
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
            value={skills.find((option: any) => option.value === field.value)}
            onChange={(selectedOption) => {
              field.onChange(selectedOption?.map((skill) => skill.value));
            }}
            className={s.skills__input}
          />
        )}
      />
    </FormItemWrapper>
  );
};

export default Skills;
