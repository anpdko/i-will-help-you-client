import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
// import MediaQuery from 'react-responsive';

// import FormingPng from '../../assets/image/forming-team-leadership-pana.png';

// import { ButtonApp } from '../UI';

import SlideImg from '../../assets/image/Find_out_about_our_found_ation.jpg';

import s from './AboutHeader.module.scss';
import sprite from '../../assets/sprite.svg';

const AboutHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <section className={s.about}>
        <div className='container'>
          <div className={s.content}>
            <h1 className={`${s.content__title} heading1`}>
              {t('COMING SOON')}
            </h1>
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
      </section> */}

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
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {[...Array(2)].map((item, index) => (
              <SwiperSlide key={index}>
                <div className={s.content}>
                  <img src={SlideImg} alt='Find out about our foundation' />
                  <p>
                    {item}
                    We bring together donors, volunteers, and beneficiaries.
                  </p>
                </div>
              </SwiperSlide>
            ))}

            <div className={s.arrows}>
              <button className={`${s.arrow_prev} swiper-button-prev`}>
                <svg>
                  <use href={sprite + '#arrow-left'}></use>
                </svg>
              </button>
              <button className={`${s.arrow_next} swiper-button-next`}>
                <svg>
                  <use href={sprite + '#arrow-right'}></use>
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;
