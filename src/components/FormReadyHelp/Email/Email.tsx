import { useFormContext } from 'react-hook-form';
import { InputFormApp } from '../../UI';
import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
import basic from '../FormReadyHelp.module.scss';
import s from './Email.module.scss';

const Email = () => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FormItemContainer section='email'>
      <FormLabel labelFor='email' title='Email *' />
      <InputFormApp
        type='email'
        id='email'
        placeholder='mail@example.com'
        required={true}
        regexp={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
        message='Please write your email in the format mail@example.com'
      />
      {errors?.email && (
        <p className={basic.form__error}>{errors?.email.message as string}</p>
      )}
    </FormItemContainer>
  );
};

export default Email;
