import s from './AboutItem.module.scss';
import { ITabName } from '../../../data/aboutTab';
import { Link } from 'react-router-dom';
import ButtonApp from '../../UI/ButtonApp/ButtonApp';
import { useGsapFrom } from '../../../hooks/useGsap';
import { useTranslation } from 'react-i18next';

interface AboutProps {
  tab: ITabName;
}

const AboutItem = ({ tab }: AboutProps) => {
  const { i18n, t } = useTranslation();

  const transAbout = () => {
    return tab.translations.find((item) => i18n.language === item.language);
  };

  const refAboutItem = useGsapFrom({
    opacity: 0,
    x: -60,
    delay: 0,
    duration: 1,
  });

  return (
    <article className={s.about__item} ref={refAboutItem}>
      <div>
        <h2 className={`${s.item__title} heading2`}>{transAbout()?.title}</h2>
        <p className={`${s.item__text} text`}>{transAbout()?.description}</p>
      </div>

      <div>
        <Link className={s.item__link} to={tab.link}>
          {t('Share Your Story')}
        </Link>
        <div className={s.item__buttons}>
          <ButtonApp
            type='link'
            to='/donate'
            size='large'
            className={s.item__button}
          >
            {t('Donate Now')}
          </ButtonApp>
          <ButtonApp
            type='link'
            to='/readyneed'
            size='large'
            color='white'
            className={s.item__button}
          >
            {t('Become a Volunteer')}
          </ButtonApp>
        </div>
      </div>
    </article>
  );
};

export default AboutItem;
