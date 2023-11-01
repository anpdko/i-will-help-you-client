import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { getReviews } from '../../../store/reviews/reviewsSlice';

import { Navigation, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperRef } from 'swiper';

import { useTranslation } from 'react-i18next';

import ReviewBlock from '../ReviewBlock/ReviewBlock';

import sprite from '../../../assets/sprite.svg';
import s from './ReviewsDesktop.module.scss';

const API_URL = import.meta.env.VITE_API_URL;

const ReviewsDesktop = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { reviews } = useSelector((state: RootState) => state.reviews);

  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const [isActive, setIsActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const activeTabRef = useRef<HTMLDivElement | null>(null);

  const swiperRef = useRef<SwiperRef | null>(null);

  const { i18n } = useTranslation();

  const { isLast, isFirst } = slideBegOrNot;

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  useEffect(() => {
    if (tabsContainerRef.current && activeTabRef.current) {
      const containerRect = tabsContainerRef.current.getBoundingClientRect();
      const activeTabRect = activeTabRef.current.getBoundingClientRect();

      if (activeTabRect.bottom > containerRect.bottom) {
        tabsContainerRef.current.scrollTop +=
          activeTabRect.bottom - containerRect.bottom;
      } else if (activeTabRect.top < containerRect.top) {
        tabsContainerRef.current.scrollTop +=
          activeTabRect.top - containerRect.top;
      }
    }
  }, [isActive]);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const onSlideChange = (swiper: SwiperRef) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });

    setIsActive(swiper.activeIndex);
  };

  const handleTabClick = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(e.currentTarget.scrollTop);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const y = e.clientY - startY;
    e.currentTarget.scrollTop = scrollTop - y;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTabKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (e.key === 'Enter') {
      handleTabClick(index);
    }
  };

  return (
    <div className={s.reviews_desktop}>
      <div
        className={s.reviews_desktop__tabs}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={tabsContainerRef}
        role='tablist'
        tabIndex={-1}
      >
        {reviews.map((tab, index) => {
          const transReviews = () => {
            return tab.translations.find(
              (item) => i18n.language === item.language,
            );
          };
          return (
            <div
              ref={(ref) => {
                if (isActive === index) {
                  activeTabRef.current = ref;
                }
              }}
              key={tab._id}
              onClick={() => handleTabClick(index)}
              className={`${s.reviews_desktop__tab} ${
                isActive === index ? s.reviews_desktop__active : ''
              }`}
              role='tab'
              tabIndex={0}
              onKeyDown={(e) => handleTabKeyDown(isActive, e)}
            >
              <div className={s.reviews_desktop__img}>
                <img
                  src={API_URL + '/static/images/reviews/' + tab.foto}
                  alt='review img'
                />
              </div>

              <div className={s.reviews_desktop__info}>
                <h3 className={`${s.reviews_desktop__name} cards-header`}>
                  {transReviews()?.name}
                </h3>
                <p className={s.reviews_desktop__status}>
                  {transReviews()?.job}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={s.reviews_desktop__text}>
        <Swiper
          modules={[Navigation, EffectFade]}
          className={s.reviews_desktop__text_slider}
          onSlideChange={onSlideChange}
          slidesPerView={1}
          spaceBetween={0}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {reviews.map((tab) => (
            <div key={tab._id} className={s.reviews_desktop__text_content}>
              <SwiperSlide key={tab._id}>
                <ReviewBlock tab={tab} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        <div className={s.slide_navigation}>
          <button
            onClick={handlePrevSlide}
            className={`${s.slide_navigation__button} ${
              isFirst ? s.slide_navigation__disabled : ''
            }`}
            aria-label='previous slide'
          >
            <svg>
              <use href={sprite + '#arrow-left'}></use>
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className={`${s.slide_navigation__button} ${
              isLast ? s.slide_navigation__disabled : ''
            }`}
            aria-label='previous slide'
          >
            <svg>
              <use href={sprite + '#arrow-right'}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDesktop;
