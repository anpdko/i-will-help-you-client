import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { ButtonApp, Modal } from '@components/UI';
import PaymentBlock from '../PaymentBlock/PaymentBlock';
import Email from '../../Email/Email';
import Comment from '../../Comment/Comment';
import ChooseProject from './ChooseProject';
import Payment from '@components/payment/Payment/Payment';
import s from './PaymentForm.module.scss';

interface PaymentFormProps {
  content?: string;
}

interface IDataForm {
  comment?: string;
  donationAmount: string;
  email: string;
  paymentFrequency?: string;
  paymentMethod?: string;
}

const initialDataForm = {
  email: '',
  donationAmount: '10',
};

const PaymentForm = ({ content }: PaymentFormProps) => {
  const [dataForm, setDataForm] = useState<IDataForm>(initialDataForm);
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const methods = useForm({
    mode: 'onChange',
  });
  const isMobile = useMediaQuery({ minWidth: 480, maxWidth: 767 });

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    setDataForm(data);
    toggleModal();
  };

  const toggleModal = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  return (
    <>
      {/* <FormProvider {...methods}> */}
      {isOpenModal && (
        <Modal onClose={toggleModal} title='Payment'>
          <Payment email={dataForm.email} amount={dataForm.donationAmount} />
        </Modal>
      )}
      <form
        id='formDonation'
        onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        className={s.form}
      >
        {content === 'donateProject' && <ChooseProject />}
        <PaymentBlock />
        <Email className={s.form__email} />
        <Comment title='Comment' placeholder='Type here...' />
        <ButtonApp
          type='submit'
          size={isMobile ? 'Xlarge' : 'medium'}
          className={s.form__button}
          disabled={!isValid}
        >
          {t('Pay urgent!')}
        </ButtonApp>
      </form>
      {/* </FormProvider> */}
    </>
  );
};

export default PaymentForm;
