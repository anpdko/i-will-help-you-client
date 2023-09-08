import { useFormContext, Controller } from 'react-hook-form';
import Select from 'react-select';
import { skillsList } from '../../../utils/skillsList';
import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
import customStyles from '../../UI/Form/SelectInput/selectStyle';
import s from './Skills.module.scss';

const Skills = () => {
  const { control } = useFormContext();

  const skills = skillsList.map((item) => ({
    value: item.skill,
    label: item.skill,
  }));

  return (
    <FormItemContainer section='skills' className={s.skills}>
      <FormLabel
        labelFor='skills'
        title='Choose your skills (you can select several options) *'
      />
      <Controller
        name='skills'
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <Select
            {...field}
            options={skills}
            placeholder='Search your skills'
            styles={customStyles}
            isMulti
            onChange={(selectedOption) => {
              field.onChange(selectedOption);
            }}
            className={s.skills__input}
          />
        )}
        rules={{ required: true }}
      />
    </FormItemContainer>
  );
};

export default Skills;
