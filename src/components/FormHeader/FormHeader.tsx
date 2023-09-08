import s from './FormHeader.module.scss';

const API_URL = import.meta.env.VITE_API_URL;

const FormHeader = () => {
  return (
    <section className={s.form_header}>
      <div className='container'>
        <div className={s.body}>
          <div className={s.body__content}>
            <h1 className='heading1'>Join our volunteer team</h1>
            <p className='text'>
              If you want to join our team of volunteers and help with what you
              do best, fill out the form below and we are waiting for you.
            </p>
          </div>
          <div className={s.body__image}>
            <img
              src={API_URL + '/static/images/banners/banner-1.jpg'}
              alt='header image'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormHeader;
