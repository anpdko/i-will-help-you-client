import { useTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';

import FormingPng from '../../assets/image/forming-team-leadership-pana.png';

import { ButtonApp } from '../UI';

import s from './AboutHeader.module.scss';

const AboutHeader = () => {
  const { t } = useTranslation();
  return (
    <section className={s.about}>
      <div className='container'>
        <div className={s.content}>
          <h1 className={`${s.content__title} heading1`}>{t('COMING SOON')}</h1>
          <MediaQuery maxWidth={659}>
            <div className={s.image}>
              <img src={FormingPng} alt='Forming team leadership pana' />
            </div>
          </MediaQuery>
          <p className={`${s.content__text} text`}>{t('COMING SOON TEXT')}</p>
          <ButtonApp type='link' to='/' size='small'>
            {t('Back to Home')}
          </ButtonApp>
        </div>
        <MediaQuery minWidth={660}>
          <div className={s.image}>
            <img src={FormingPng} alt='Forming team leadership pana' />
          </div>
        </MediaQuery>
      </div>
    </section>
  );
};

export default AboutHeader;
