import { useFormContext } from 'react-hook-form';
import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
import { InputFormApp } from '../../UI';
import basic from '../FormReadyHelp.module.scss';
import s from './FullName.module.scss';

interface FullNameProps {
  nameType: 'firstName' | 'lastName';
}

const FullName = ({ nameType }: FullNameProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  const title = nameType === 'firstName' ? 'First Name *' : 'Last Name *';
  const type = nameType === 'firstName' ? 'firstName' : 'lastName';
  const placeholder =
    nameType === 'firstName' ? 'Enter your first name' : 'Enter your last name';
  const nameValidations = errors[nameType] && (
    <p className={basic.form__error}>{errors[nameType]?.message as string}</p>
  );
  return (
    <FormItemContainer section={nameType}>
      <FormLabel title={title} labelFor={type} />
      <InputFormApp
        id={type}
        placeholder={placeholder}
        required={true}
        regexp={
          /^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/
        }
        message='Please type your name'
      />
      {nameValidations}
    </FormItemContainer>
  );
};

export default FullName;
