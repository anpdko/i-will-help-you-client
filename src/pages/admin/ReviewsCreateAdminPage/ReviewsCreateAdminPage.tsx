import s from './ReviewsCreateAdminPage.module.scss';
import { ButtonApp, InputFormApp } from '../../../components/UI';
import { useForm, FormProvider } from 'react-hook-form';

const ReviewsCreateAdminPage = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={s.reviews_create_admin_page}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <InputFormApp id='name' />
          <ButtonApp type='submit'>Create</ButtonApp>
        </form>
      </FormProvider>
    </div>
  );
};
export default ReviewsCreateAdminPage;
