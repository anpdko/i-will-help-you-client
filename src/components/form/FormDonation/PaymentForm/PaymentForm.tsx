import { useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Modal } from '@components/UI';
import PaymentBlock from '../PaymentBlock/PaymentBlock';
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const methods = useForm({
    mode: 'onChange',
  });

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
      </form>
      {/* </FormProvider> */}
    </>
  );
};

export default PaymentForm;
