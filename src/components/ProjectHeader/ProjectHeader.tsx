import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Navigation, Controller, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ButtonApp from '../UI/ButtonApp/ButtonApp';

import projectHeaderData from '../../data/projectHeaderData';

const API_URL = import.meta.env.VITE_API_URL;

import s from './ProjectHeader.module.scss';
import sprite from '../../assets/sprite.svg';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/effect-fade';

const ProjectHeader = () => {
  const { t } = useTranslation();

  // need to find what type
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);

  useEffect(() => {
    console.log(firstSwiper, secondSwiper);
  }, [firstSwiper, secondSwiper]);

  return (
    <section className={s.projects}>
      <div className='container'>
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
              {projectHeaderData.map((project) => (
                <SwiperSlide key={project.id} style={{ background: '#F1F1F1' }}>
                  <div className={s.content}>
                    <h2 className='heading2'>{project.title}</h2>
                    <p>{project.description}</p>
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
              spaceBetween={78}
              slidesPerView={1}
              onSwiper={(swiper) => setSecondSwiper(swiper)}
              controller={{ control: firstSwiper }}
              style={{ overflow: 'visible' }}
            >
              {projectHeaderData.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className={s.image}>
                    <img src={API_URL + project.img} alt={project.title} />
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
      </div>
    </section>
  );
};

export default ProjectHeader;
