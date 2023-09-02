import s from './ReadyNeedHeader.module.scss';

const API_URL = import.meta.env.VITE_API_URL;

const ReadyNeedHeader = () => {
  return (
    <section className={s.ready_need_header}>
      <div className={s.ready_need_header_text}>
        <h1>Join our volunteer team</h1>
        <p>
          If you want to join our team of volunteers and help with what you do
          best, fill out the form below and we are waiting for you.
        </p>
      </div>
      <div className={s.ready_need_header_img}>
        <img
          src={API_URL + '/static/images/ready-need-header.jpg'}
          alt='header image'
        />
      </div>
    </section>
  );
};
export default ReadyNeedHeader;
