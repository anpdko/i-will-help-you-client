import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper/modules';

import s from './AboutTeam.module.scss';
import sprite from '../../assets/sprite.svg';

import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import aboutTeamData from '@/data/aboutTeamData';
import i18n from '@/translation/i18n';

const API_URL = import.meta.env.VITE_API_URL;

const AboutTeam = () => {
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
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1170: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={24}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {aboutTeamData?.map((item, index) => {
              const translation = item.translations.find(
                (translation) => translation.language === i18n.language,
              );
              return (
                <SwiperSlide key={item.id}>
                  <div className={s.content}>
                    <div className={s.image}>
                      <img
                        src={API_URL + IMAGE_PREFIX + item.imgPhath}
                        alt={translation?.fullName}
                      />
                    </div>
                    <h3>{translation?.fullName}</h3>
                    <h4>{translation?.activity}</h4>
                  </div>
                </SwiperSlide>
              );
            })}

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
