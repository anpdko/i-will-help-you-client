import { useFormContext, Controller } from 'react-hook-form';
import Select, { OnChangeValue } from 'react-select';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { skillsList } from '@utils/skillsList';
import customStyles from '@components/UI/form/SelectInput/selectStyle';
import s from './Skills.module.scss';

interface ISkills {
  value: string,
  label: string,
}

const Skills = () => {
  const { control } = useFormContext();

  const skills = skillsList.map((item) => ({
    value: item.skill,
    label: item.skill,
  }));

  return (
    <FormItemWrapper
      className={s.skills}
      title='Choose your skills (you can select several options) *'
    >
      <Controller
        name='skills'
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Please select at least one skill',
          },
        }}
        defaultValue={null}
        render={({ field }) => (
          <Select
            {...field}
            options={skills}
            placeholder='Search your skills'
            styles={customStyles}
            isMulti
            value={skills.find((option) => option.value === field.value)}
            onChange={(selectedOption: OnChangeValue<ISkills, boolean>) => {
              field.onChange((selectedOption as ISkills[])?.map((skill) => skill.value));
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
