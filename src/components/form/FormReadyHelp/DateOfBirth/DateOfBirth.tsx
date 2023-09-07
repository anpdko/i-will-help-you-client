import { DateInput } from '../../../UI';
import s from './DateOfBirth.module.scss';

const DateOfBirth = () => {
  return (
    <DateInput
      title='Date of Birth *'
      name='dataOfBirth'
      required={true}
      message='Please enter your birthday in the format MM/DD/YYYY'
      placeholder='MM/DD/YYYY'
      format='MM/DD/YYYY'
      classNameContainer={s.dob}
      classNameError={s.dob__error}
    />
  );
};

export default DateOfBirth;
