import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { ButtonApp } from '../../../UI';
import PaymentBlock from '../PaymentBlock/PaymentBlock';
import Email from '../../Email/Email';
import Comment from '../../Comment/Comment';
import ChooseProject from './ChooseProject';
import s from './PaymentForm.module.scss';

interface PaymentFormProps {
  content?: string;
}

const PaymentForm = ({ content }: PaymentFormProps) => {
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
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
