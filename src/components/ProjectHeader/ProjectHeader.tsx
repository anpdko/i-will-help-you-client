import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Controller, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Preloader } from '../UI';
import { IProjectsState } from '../../store/projects/projectsType';

const API_URL = import.meta.env.VITE_API_URL;

import s from './ProjectHeader.module.scss';
import sprite from '../../assets/sprite.svg';

import 'swiper/scss';
import 'swiper/css/effect-fade';
import SlideContent from './SlideContent/SlideContent';
import SlideImage from './SlideImage/SlideImage';
import SlideAbout from './SlideAbout/SlideAbout';

const ProjectHeader: React.FC<
  IProjectsState & { selectedId: string | undefined }
> = ({ projects, loading, selectedId }) => {
  const navigate = useNavigate();

  const handleSlideChange = (swiper: any) => {
    const activeSlide = swiper.realIndex;
    const newId = projects[activeSlide]._id;

    if (newId) {
      navigate(`/projects/${newId}`);
    }
  };

  const IMAGE_PREFIX = '/static/images/projects/';

  //! need to find what type
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  const [thirdSwiper, setThirdSwiper] = useState<any>(null);

  const initialSlideIndex = projects.findIndex(
    (project) => project._id === selectedId,
  );

  useEffect(() => {}, [firstSwiper, secondSwiper, thirdSwiper]);

  return (
    <section className={s.projects}>
      <div className='container'>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <div className={s.swipers_header}>
              <div className={s.swiper_content}>
                <Swiper
                  modules={[Controller, EffectFade]}
                  effect={'fade'}
                  fadeEffect={{ crossFade: true }}
                  spaceBetween={0}
                  slidesPerView={1}
                  onSwiper={setFirstSwiper}
                  onSlideChange={handleSlideChange}
                  initialSlide={initialSlideIndex}
                  allowSlidePrev={false}
                  allowSlideNext={false}
                  // controller={{ control: [secondSwiper, thirdSwiper] }}
                >
                  {projects.map((project) => (
                    <SwiperSlide
                      key={project._id}
                      style={{ background: '#F1F1F1' }}
                    >
                      <SlideContent
                        title={project.translations[0].title}
                        slogan={project.translations[0].slogan}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={s.swiper_image}>
                <Swiper
                  modules={[Navigation, Controller]}
                  navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  }}
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
                  onSwiper={setSecondSwiper}
                  controller={{ control: [firstSwiper, thirdSwiper] }}
                  style={{ overflow: 'visible' }}
                  onSlideChange={handleSlideChange}
                  initialSlide={initialSlideIndex}
                >
                  {projects.map((project) => (
                    <SwiperSlide key={project._id}>
                      <SlideImage
                        imgCover={`${API_URL}${IMAGE_PREFIX}${project.imgCover}`}
                        title={project.translations[0].title}
                      />
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
            <div className={s.swiper_about}>
              <Swiper
                modules={[Controller]}
                spaceBetween={100}
                slidesPerView={1}
                onSwiper={setThirdSwiper}
                controller={{ control: [firstSwiper, secondSwiper] }}
                onSlideChange={handleSlideChange}
                initialSlide={initialSlideIndex}
                autoHeight={true}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project._id}>
                    <SlideAbout project={project} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectHeader;
