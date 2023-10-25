import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Controller, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Preloader } from '../../UI';
import { IProjectsState } from '@/store/projects/projectsType';

import s from './ProjectHeader.module.scss';
import sprite from '@/assets/sprite.svg';

import 'swiper/scss';
import 'swiper/css/effect-fade';
import SlideContent from './SlideContent/SlideContent';
import SlideImage from './SlideImage/SlideImage';
import SlideAbout from './SlideAbout/SlideAbout';

const ProjectHeader: React.FC<IProjectsState> = ({
  projects,
  loading,
  selectedUrl,
}: IProjectsState) => {
  const navigate = useNavigate();

  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    const activeSlide = swiper.realIndex;
    const newUrl = projects[activeSlide].url;

    if (newUrl) {
      navigate(`/projects/${newUrl}`);
    }
  };

  const IMAGE_PREFIX = '/static/images/projects/';

  //! need to find what type
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  const [thirdSwiper, setThirdSwiper] = useState<any>(null);

  const initialSlideIndex = projects.findIndex(
    (project) => project.url === selectedUrl,
  );

  useEffect(() => {}, [firstSwiper, secondSwiper, thirdSwiper]);

  return (
    <section className={s.projects}>
      <div className='container'>
        {loading ? (
          <Preloader />
        ) : (
          <div className={s.body}>
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
                        key={project._id}
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
                        tabIndex={-1}
                        imgCover={`${IMAGE_PREFIX}${project.imgCover}`}
                        title={project.translations[0].title}
                      />
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
                </Swiper>
              </div>
            </div>
            <div className={s.swiper_about}>
              <Swiper
                ref={swiperRef}
                modules={[Controller]}
                spaceBetween={100}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  setThirdSwiper(swiper);
                  swiperRef.current = swiper;
                }}
                controller={{ control: [firstSwiper, secondSwiper] }}
                onSlideChange={handleSlideChange}
                initialSlide={initialSlideIndex}
                autoHeight={true}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project._id}>
                    <SlideAbout project={project} swiperRef={swiperRef} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectHeader;
