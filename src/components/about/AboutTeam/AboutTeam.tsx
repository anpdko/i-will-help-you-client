import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper/modules';
import i18n from '@/translation/i18n';

import aboutTeamData from '@/data/aboutTeamData';

import s from './AboutTeam.module.scss';
import sprite from '@/assets/sprite.svg';
import { LazyImage } from '@components/index';

const AboutTeam = () => {
  const IMAGE_PREFIX = '/static/images/team/';

  return (
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
          {aboutTeamData?.map((item) => {
            const translation = item.translations.find(
              (translation) => translation.language === i18n.language,
            );
            return (
              <SwiperSlide key={item._id}>
                {item.linkedIn ? (
                  <a
                    rel='noreferrer'
                    href={item.linkedIn}
                    target='_blank'
                    className={`${s.content} ${s._link}`}
                  >
                    <div className={s.image}>
                      <LazyImage
                        src={IMAGE_PREFIX + item.imgPath}
                        alt={translation?.fullName}
                      />
                    </div>
                    <h3>{translation?.fullName}</h3>
                    <h4>{translation?.activity}</h4>
                    <span>LinkedIn</span>
                  </a>
                ) : (
                  <div className={`${s.content}`}>
                    <div className={s.image}>
                      <LazyImage
                        src={IMAGE_PREFIX + item.imgPath}
                        alt={translation?.fullName}
                      />
                    </div>
                    <h3>{translation?.fullName}</h3>
                    <h4>{translation?.activity}</h4>
                  </div>
                )}
              </SwiperSlide>
            );
          })}

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

export default AboutTeam;
