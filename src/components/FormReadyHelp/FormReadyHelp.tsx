import { useForm, FormProvider } from 'react-hook-form';
import FullName from './FullName/FullName';
import DateOfBirth from './DateOfBirth/DateOfBirth';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import SelectCountry from './SelectCountry/SelectCountry';
import SocialNetwork from './SocialNetwork/SocialNetwork';
import Email from './Email/Email';
import DaysOfVolunteering from './DaysOfVolunteering/DaysOfVolunteering';
import Language from './Language/Language';
import Skills from './Skills/Skills';
import Comment from './Comment/Comment';
import Checkboxes from './Checkboxs/Checkboxes';
import s from './FormReadyHelp.module.scss';
import { ButtonApp } from '../UI';

const FormReadyHelp = () => {
  const methods = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        id='form'
        onSubmit={methods.handleSubmit(onSubmit)}
        className={s.form}
      >
        <FullName nameType='firstName' />
        <FullName nameType='lastName' />
        <DateOfBirth />
        <PhoneNumber />
        <SelectCountry />
        <SocialNetwork />
        <Email />
        <DaysOfVolunteering />
        <Language />
        <Skills />
        <Comment />
        <Checkboxes />
        <ButtonApp type='submit' className={s.form__button}>
          Submit
        </ButtonApp>
      </form>
    </FormProvider>
  );
};

export default FormReadyHelp;
