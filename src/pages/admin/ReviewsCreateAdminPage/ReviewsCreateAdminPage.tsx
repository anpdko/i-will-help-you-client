import { useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { createReview } from '../../../store/reviews/reviewsSlice';
import { useNavigate } from 'react-router-dom';
import {
  ButtonApp,
  InputFormApp,
  TextareaFormApp,
} from '../../../components/UI';

import s from './ReviewsCreateAdminPage.module.scss';

const ReviewsCreateAdminPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const [submitting, setSubmitting] = useState(false);
  const { loading, message } = useSelector((state: RootState) => state.reviews);

  const onSubmit = async (reviewData: any) => {
    console.log('Review Data:', reviewData);
    setSubmitting(true);
    try {
      const dataToSend = {
        translations: [
          {
            language: 'en',
            name: reviewData.name,
            job: reviewData.job,
            title: reviewData.title,
            body: reviewData.body,
          },
        ],
      };

      await dispatch(createReview(dataToSend));
      reset();
      if (!loading && !message) {
        navigate('/admin/panel/reviews');
        alert('Відгук створено');
      }
    } catch (error) {
      console.error("Помилка при створенні рев'ю:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={s.reviews_create_admin_page}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='foto'
            control={control}
            render={({ field }) => (
              <InputFormApp {...field} type='file' accept='image/*' id='foto' />
            )}
          />
          <Controller
            name='name'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <InputFormApp {...field} id='name' placeholder='Name' />
            )}
          />
          <Controller
            name='job'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <InputFormApp {...field} id='job' placeholder='Job' />
            )}
          />
          <Controller
            name='title'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <InputFormApp {...field} id='title' placeholder='Title' />
            )}
          />
          <Controller
            name='body'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextareaFormApp {...field} name='body' placeholder='Body' />
            )}
          />
          <ButtonApp type='submit'>Створити</ButtonApp>
        </form>
      </FormProvider>
    </div>
  );
};
export default ReviewsCreateAdminPage;
