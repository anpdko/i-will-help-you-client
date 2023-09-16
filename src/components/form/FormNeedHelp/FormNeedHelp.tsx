import { useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { ButtonApp, Modal } from '../../UI';
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
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

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
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useTranslation();
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = async (data: DataForm) => {
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

    //временное решение...
    const { files, ...formattedDataNotFiles } = formattedData;

    try {
      const res = await axios.post(
        API_URL + '/api/needhelps',
        formattedDataNotFiles,
      );
      console.log(res);
      setIsPopupVisible(true);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsPopupVisible(true);
      setIsSuccess(false);
    }
  };

  const modalTitle = isSuccess ? (
    <>
      <AiFillCheckCircle className={s.successIcon} />
      Success!
    </>
  ) : (
    <>
      <AiFillCloseCircle className={s.errorIcon} />
      Something went wrong!
    </>
  );

  return (
    <FormWrapper
      subtitle={t('Form for receiving assistance')}
      title={t('Applying for assistance')}
    >
      {/* <FormProvider {...methods}> */}
      <form
        id='formNeedHelp'
        onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
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
      {/* </FormProvider> */}
      {isPopupVisible && (
        <Modal title={modalTitle} onClose={() => setIsPopupVisible(false)}>
          {isSuccess
            ? 'Your form was successfully submitted!'
            : 'There was an error submitting the form. Please try again.'}
        </Modal>
      )}
    </FormWrapper>
  );
};

export default FormNeedHelp;
