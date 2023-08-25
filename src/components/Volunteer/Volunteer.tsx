import ButtonApp from '../UI/ButtonApp/ButtonApp';
import s from './Volunteer.module.scss';

const Volunteer = () => {
  return (
    <section className={s.volunteer}>
      <div className='container'>
        <div className={s.volunteer_container}>
          <p className={s.volunteer_text}>VOLUNTEER NEEDED</p>
          <ButtonApp color='white' size='medium'>
            Become a Volunteer
          </ButtonApp>
        </div>
      </div>
    </section>
  );
};
export default Volunteer;
