import { useTranslation } from 'react-i18next';

import ButtonApp from '../UI/ButtonApp/ButtonApp';

import s from './Volunteer.module.scss';

const Volunteer = () => {
  const { t } = useTranslation();
  return (
    <section className={s.volunteer}>
      <div className='container'>
        <p className={s.volunteer_text}>{t('VOLUNTEER NEEDED')}</p>
        <ButtonApp color='white' size='medium'>
          {t('Become a Volunteer')}
        </ButtonApp>
      </div>
    </section>
  );
};
export default Volunteer;
