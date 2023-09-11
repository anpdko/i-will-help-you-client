import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useState } from 'react';
import { ButtonApp } from '../../../UI';
import PaymentBlock from '../PaymentBlock/PaymentBlock';
import Email from '../../Email/Email';
import Comment from '../../Comment/Comment';
import ChooseProject from './ChooseProject';
import s from './PaymentForm.module.scss';
import { Modal } from '../../../UI';
import Payment from '@components/payment/Payment/Payment';

interface PaymentFormProps {
  content?: string;
}

const PaymentForm = ({ content }: PaymentFormProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    toggleModal();
  };

  const toggleModal = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  return (
    <FormProvider {...methods}>
      {isOpenModal && (
        <Modal onClose={toggleModal} title='Payment'>
          <Payment />
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
        <Comment />
        <ButtonApp
          type='submit'
          size='medium'
          className={s.form__button}
          disabled={!isValid}
        >
          Pay urgent!
        </ButtonApp>
      </form>
    </FormProvider>
  );
};

export default PaymentForm;
