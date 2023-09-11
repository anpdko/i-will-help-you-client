import { TextInput } from '../../UI';
import s from './FirstName.module.scss';

const FirstName = () => {
  return (
    <TextInput
      type='text'
      id='firstName'
      placeholder='Enter your first name'
      required={true}
      regexp={
        /^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/
      }
      message='Please type your first name'
      title='First Name *'
      classNameContainer={s.firstName}
    />
  );
};

export default FirstName;
