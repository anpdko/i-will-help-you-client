import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useFilteredProjects from '@/hooks/useFilteredProjects';

import { Preloader } from '@/components/UI/';

import { getProjects } from '@/store/projects/projectsSlice';
import { RootState, useAppDispatch } from '@/store/store';

import s from './ProjectsFund.module.scss';
import sprite from '@/assets/sprite.svg';

import 'swiper/scss';
import { LazyImage } from '@/components';

const ProjectsFund = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { loading } = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const IMAGE_PREFIX = '/static/images/projects/';

  const filteredProjects = useFilteredProjects();

  return (
    <section className={s.projects}>
      <div className='container'>
        <div className={s.header}>
          <h2 className={`${s.header__title} heading2`}>
            {t('Fund’s projects')}
          </h2>
          <div className={s.header__subtitle}>{t('Fund’s projects')}</div>
        </div>
        {loading ? (
          <Preloader />
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1170: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {filteredProjects?.map((project) => (
              <SwiperSlide key={project._id}>
                <article className={s.project}>
                  <Link to={`/projects/${project._id}`} className={s.link}>
                    <div className={s.content}>
                      <h3 className={s.content__title}>
                        {project.translations[0].title}
                      </h3>
                      <p className={s.content__description}>
                        {project.translations[0].description}
                      </p>
                      <div className={s.content__icon}>
                        <svg>
                          <use href={sprite + '#arrow-up-right'} />
                        </svg>
                      </div>
                    </div>
                    <div className={s.image}>
                      <LazyImage
                        src={IMAGE_PREFIX + project.imgCover}
                        alt={project.translations[0].title}
                      />
                    </div>
                  </Link>
                </article>
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
        )}
      </div>
    </section>
  );
};

export default ProjectsFund;
