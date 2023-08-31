import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Navigation, Controller, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Preloader from '../UI/Preloader/Preloader';
import ButtonApp from '../UI/ButtonApp/ButtonApp';
import { IProjectsState } from '../../store/projects/projectsType';

const API_URL = import.meta.env.VITE_API_URL;

import s from './ProjectHeader.module.scss';
import sprite from '../../assets/sprite.svg';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/effect-fade';

const ProjectHeader: React.FC<IProjectsState> = ({ projects, loading }) => {
  const { t } = useTranslation();

  const IMAGE_PREFIX = '/static/images/projects/';

  // need to find what type
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);

  useEffect(() => {}, [firstSwiper, secondSwiper]);

  return (
    <section className={s.projects}>
      <div className='container'>
        {loading ? (
          <Preloader />
        ) : (
          <div className={s.body}>
            <div className={s.swiper_content}>
              <Swiper
                modules={[Navigation, Controller, EffectFade]}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => setFirstSwiper(swiper)}
                controller={{ control: secondSwiper }}
              >
                {projects.map((project) => (
                  <SwiperSlide
                    key={project._id}
                    style={{ background: '#F1F1F1' }}
                  >
                    <div className={s.content}>
                      <h2 className='heading2'>
                        {project.translations[0].title}
                      </h2>
                      <p>{`"${project.translations[0].slogan}"`}</p>
                      <div className={s.actions}>
                        <ButtonApp>{t('Donate')}</ButtonApp>
                        <ButtonApp color='white'>{t('Need Help')}</ButtonApp>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={s.swiper_image}>
              <Swiper
                modules={[Controller]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 17,
                  },
                  768: {
                    slidesPerView: 1.3,
                    spaceBetween: 40,
                  },
                  1170: {
                    slidesPerView: 1,
                    spaceBetween: 78,
                  },
                }}
                onSwiper={(swiper) => setSecondSwiper(swiper)}
                controller={{ control: firstSwiper }}
                style={{ overflow: 'visible' }}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project._id}>
                    <div className={s.image}>
                      <img
                        src={`${API_URL}${IMAGE_PREFIX}${project.imgCover}`}
                        alt={project.translations[0].title}
                      />
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
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectHeader;
