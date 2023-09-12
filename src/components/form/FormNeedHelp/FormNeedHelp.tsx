import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ButtonApp } from '../../UI';
import FormWrapper from '../../wrapper/FormWrapper/FormWrapper';
import s from './FormNeedHelp.module.scss';
import FirstName from '../FirstName/FirstName';
import LastName from '../LastName/LastName';
import Email from '../Email/Email';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import Checkboxes from '../Checkboxes/Checkboxes';
import Comment from '../Comment/Comment';
import Files from './Files/Files';
import TypeOfAssistance from './TypeOfAssistance/TypeOfAssistance';

interface DataForm {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  typeOfAssistance: string[];
  selectAll: boolean;
  comment: string;
  files: { name: string; file: File }[];
  mailing: boolean;
  dataProcessing: boolean;
}

const FormNeedHelp = () => {
  const { t } = useTranslation();
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = (data: DataForm) => {
    const formattedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.countryCode + data.phone,
      typeOfAssistance: data.typeOfAssistance,
      comment: data.comment,
      files: data.files,
      mailing: data.mailing,
    };

    console.log(formattedData);
  };

  return (
    <FormWrapper
      subtitle={t('Form for receiving assistance')}
      title={t('Applying for assistance')}
    >
      <FormProvider {...methods}>
        <form
          id='formNeedHelp'
          onSubmit={methods.handleSubmit(
            onSubmit as SubmitHandler<FieldValues>,
          )}
          className={s.form}
        >
          <FirstName />
          <LastName />
          <Email className={s.form__email} />
          <PhoneNumber />
          <TypeOfAssistance />
          <Comment title='Leave a comment' placeholder='Tell your story...' />
          <Files />
          <Checkboxes />
          <ButtonApp
            type='submit'
            size='Xlarge'
            className={s.form__button}
            disabled={!isValid}
          >
            {t('Send my form')}
          </ButtonApp>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default FormNeedHelp;
