import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import s from './AboutTeam.module.scss';
import sprite from '../../assets/sprite.svg';

import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const API_URL = import.meta.env.VITE_API_URL;

const AboutTeam = () => {
  const { t } = useTranslation();

  const IMAGE_PREFIX = '/static/images/team/';

  return (
    <>
      <section className={s.about_team}>
        <div className='container'>
          <Swiper
            modules={[Navigation, Scrollbar, Pagination]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            scrollbar={{
              el: '.swiper-scrollbar',
              draggable: true,
            }}
            pagination={{
              el: '.swiper-pagination', 
              type: 'fraction', 
            }}
            spaceBetween={24}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {[...Array(18)].map((item, index) => (
              <SwiperSlide key={index}>
                <div className={s.content}>
                  <div className={s.image}>
                    <img src={API_URL + IMAGE_PREFIX + 'image-1.jpeg'} alt='' />
                  </div>
                  <h3>Nataliya Kovalenko</h3>
                  <h4>Volunteer</h4>
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

            <div className={s.navigation}>
              <div className={`${s.scrollbar} swiper-scrollbar`}> </div>
              <div className={`${s.pagination} swiper-pagination`}> </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
