import { useTranslation } from 'react-i18next';

import { ButtonApp } from '../UI';

import NotFoundPng from '../../assets/image/404-Error-Page-not-Found.png';
import s from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  const { t } = useTranslation();

  return (
    <section className={s.main}>
      <div className='container'>
        <div className={s.image}>
          <img src={NotFoundPng} alt='404 Error Page not Found' />
        </div>
        <p className={`${s.text} text`}>{t('not found text')}</p>
        <ButtonApp type='link' to='/' size='small'>
          {t('Back to Home')}
        </ButtonApp>
      </div>
    </section>
  );
};

export default NotFoundBlock;
