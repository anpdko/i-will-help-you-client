import { Link } from 'react-router-dom';

import s from './Banner.module.scss';
import sprite from '../../../assets/sprite.svg';
import { IBannersData } from '../../../data/bannersData';
import { useTranslation } from 'react-i18next';
import { LazyImage } from '@/components';

interface BunnerProps {
  tab: IBannersData;
}

const Bunner = ({ tab }: BunnerProps) => {
  const IMAGE_PREFIX = '/static/images/banners/';
  const { i18n } = useTranslation();

  const transBanners = () => {
    return tab.translations.find((item) => i18n.language === item.language);
  };

  return (
    <article className={s.banner}>
      <Link to={tab.link}>
        <LazyImage
          className={s.banner__img}
          src={IMAGE_PREFIX + tab.img}
          alt='banner img'
        />
        <div className={s.banner__filter}></div>

        <div className={s.banner__content}>
          <h3 className={`${s.banner__title} bunner-title`}>
            {transBanners()?.title}
          </h3>
          <p className={`${s.banner__discription} text`}>
            {transBanners()?.description}
          </p>
        </div>

        <svg className={s.banner__icon}>
          <use href={sprite + '#arrow-up-right'} />
        </svg>
      </Link>
    </article>
  );
};

export default Bunner;
