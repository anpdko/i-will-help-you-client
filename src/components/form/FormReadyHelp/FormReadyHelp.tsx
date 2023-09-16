import { useState } from 'react';
import axios from 'axios';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import FormWrapper from '@components/wrapper/FormWrapper/FormWrapper';
import FirstName from '../FirstName/FirstName';
import LastName from '../LastName/LastName';
import DateOfBirth from './DateOfBirth/DateOfBirth';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import SelectCountry from './SelectCountry/SelectCountry';
import SocialNetwork from './SocialNetwork/SocialNetwork';
import Email from '../Email/Email';
import DaysOfVolunteering from './DaysOfVolunteering/DaysOfVolunteering';
import Language from './Language/Language';
import Skills from './Skills/Skills';
import Comment from '../Comment/Comment';
import Checkboxes from '../Checkboxes/Checkboxes';
import { ButtonApp, Modal } from '@components/UI';
import { convertUnixTimestampToDate } from '@utils/convertUnixTimestampToDate';
import { generateSocialMediaLink } from '@utils/generateSocialMediaLink';
import s from './FormReadyHelp.module.scss';
import { useTranslation } from 'react-i18next';

const API_URL = import.meta.env.VITE_API_URL;

interface DataForm {
  firstName: string;
  lastName: string;
  dateOfBirth: number;
  countryCode: string;
  phone: string;
  country: string;
  network: string;
  networkLogo: string;
  email: string;
  daysVolunteer: string[];
  languages: string[];
  skills: string[];
  comment: string;
  mailing: boolean;
  dataProcessing: boolean;
}

const FormReadyHelp = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useTranslation();

  const methods = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data: DataForm) => {
    const formattedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: convertUnixTimestampToDate(data.dateOfBirth),
      phone: data.countryCode + data.phone,
      country: data.country,
      network: generateSocialMediaLink(data.network, data.networkLogo),
      email: data.email,
      daysVolunteer: data.daysVolunteer,
      languages: data.languages,
      skills: data.skills,
      comment: data.comment,
      mailing: data.mailing,
    };

    console.log(formattedData);
    try {
      const res = await axios.post(API_URL + '/api/readyneed', formattedData);
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
    <FormWrapper subtitle={t('Form')} title={t('Volunteer application form')}>
      <FormProvider {...methods}>
        <form
          id='formReadyToHelp'
          onSubmit={methods.handleSubmit(
            onSubmit as SubmitHandler<FieldValues>,
          )}
          className={s.form}
        >
          <FirstName />
          <LastName />
          <DateOfBirth />
          <PhoneNumber />
          <SelectCountry />
          <SocialNetwork />
          <Email className={s.form__email} />
          <DaysOfVolunteering />
          <Language />
          <Skills />
          <Comment
            title='Comment (what do you to do? in what areas?)'
            placeholder='Type here...'
            maxLength={2500}
          />
          <Checkboxes />
          <ButtonApp
            type='submit'
            size='Xlarge'
            className={s.form__button}
          >
            {t('Send my form')}
          </ButtonApp>
        </form>
      </FormProvider>
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

export default FormReadyHelp;
