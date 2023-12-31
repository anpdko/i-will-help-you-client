import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import s from './AboutDocuments.module.scss';
import sprite from '@/assets/sprite.svg';

const API_URL = import.meta.env.VITE_API_URL;

const AboutDocuments = () => {
  const { t } = useTranslation();

  const IMAGE_PREFIX = '/static/images/documents/';

  const slides = [
    'documents-1',
    'documents-2',
    'documents-3',
    'documents-4',
    'documents-4',
  ];

  return (
    <section className={s.about_team}>
      <div className='container'>
        <div className={s.header}>
          <h2 className={`${s.title} heading2`}>
            {t('Charter and registration documents of the Fund')}
          </h2>
          <h3 className={s.subtitle}>{t('Documents')}</h3>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar, Pagination]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          scrollbar={{
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: 48,
          }}
          pagination={{
            el: '.swiper-pagination',
            type: 'fraction',
          }}
          breakpoints={{
            319: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={24}
        >
          {slides?.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <div className={s.content}>
                <a
                  href={API_URL + IMAGE_PREFIX + item + '.jpg'}
                  className={s.image}
                >
                  <picture>
                    <source
                      srcSet={API_URL + IMAGE_PREFIX + item + '.webp'}
                      type='image/webp'
                    />
                    <img
                      src={API_URL + IMAGE_PREFIX + item + '.jpg'}
                      alt={item}
                    />
                  </picture>
                  <svg>
                    <use href={sprite + '#lens'}></use>
                  </svg>
                </a>
              </div>
            </SwiperSlide>
          ))}

          <div className={s.arrows}>
            <button
              className={`${s.arrow_prev} swiper-button-prev`}
              aria-label='previous slide'
            >
              <svg>
                <use href={sprite + '#arrow-left'}></use>
              </svg>
            </button>
            <button
              className={`${s.arrow_next} swiper-button-next`}
              aria-label='next slide'
            >
              <svg>
                <use href={sprite + '#arrow-right'}></use>
              </svg>
            </button>
          </div>

          <div className={s.navigation}>
            <div className={s.scrollbar}>
              <div className='swiper-scrollbar'> </div>
            </div>
            <div className={s.pagination}>
              <div className='swiper-pagination'> </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutDocuments;
