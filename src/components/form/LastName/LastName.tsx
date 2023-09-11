import { TextInput } from '../../UI';
import s from './LastName.module.scss';

const LastName = () => {
  return (
    <TextInput
      type='text'
      id='lastName'
      placeholder='Enter your last name'
      required={true}
      regexp={
        /^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/
      }
      message='Please type your last name'
      title='Last Name *'
      classNameContainer={s.lastName}
    />
  );
};

export default LastName;
