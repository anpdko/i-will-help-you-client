import { TextInput } from '../../UI';
import s from './Email.module.scss';

const Email = () => {
  return (
    <TextInput
      type='email'
      id='email'
      placeholder='mail@example.com'
      required={true}
      regexp={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
      message='Please write your email in the format mail@example.com'
      title='Email *'
      classNameContainer={s.email__container}
    />
  );
};

export default Email;
