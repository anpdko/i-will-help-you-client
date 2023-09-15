import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import aboutHeaderData from '@/data/aboutHeaderData';

import s from './AboutHeader.module.scss';
import sprite from '../../assets/sprite.svg';

const API_URL = import.meta.env.VITE_API_URL;

const AboutHeader = () => {
  const { t, i18n } = useTranslation();

  const IMAGE_PREFIX = '/static/images/about/';

  return (
    <section className={s.about_header}>
      <div className='container'>
        <h1 className={`${s.title} heading1`}>
          {t('Find out about our foundation')}
        </h1>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {aboutHeaderData?.map((item) => {
            const translation = item.translations.find(
              (translation) => translation.language === i18n.language,
            );
            return (
              <SwiperSlide key={item.id}>
                <div className={s.content}>
                  <img
                    src={API_URL + IMAGE_PREFIX + item.imgPhath}
                    alt='Find out about our foundation'
                  />
                  <p>{translation?.text}</p>
                </div>
              </SwiperSlide>
            );
          })}

          <div className={s.arrows}>
            <button className={`${s.arrow_prev} swiper-button-prev`} aria-label='previous slide'>
              <svg>
                <use href={sprite + '#arrow-left'}></use>
              </svg>
            </button>
            <button className={`${s.arrow_next} swiper-button-next`} aria-label='next slide'>
              <svg>
                <use href={sprite + '#arrow-right'}></use>
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutHeader;
