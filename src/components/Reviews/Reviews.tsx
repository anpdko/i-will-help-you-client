import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews/reviewsSlice';
import { AppDispatch, RootState } from '../../store/store';

import { Navigation, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperRef } from 'swiper';

import ReviewBlock from './ReviewBlock/ReviewBlock';
import sprite from '../../assets/sprite.svg';
import s from './Reviews.module.scss';

import 'swiper/scss';
import 'swiper/css/effect-fade';

const API_URL = import.meta.env.VITE_API_URL;

const Reviews = () => {
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

  const swiperRef = useRef<SwiperRef | null>(null);

  const { isLast, isFirst } = slideBegOrNot;

  useEffect(() => {
    dispatch(getReviews());
  }, []);

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const onSlideChange = (swiper: any) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });

    setIsActive(swiper.activeIndex);
  };

  const handleTabClick = (index: any) => {
    swiperRef.current?.slideTo(index);
  };

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(e.currentTarget.scrollTop);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;

    const y = e.clientY - startY;
    e.currentTarget.scrollTop = scrollTop - y;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section>
      <div className='container'>
        <h2 className='heading1'>Stories of Hope and Gratitude</h2>
        <div className={s.reviews}>
          <div
            className={s.reviews__tabs}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {reviews.map((tab, index) => (
              <div
                key={tab._id}
                onClick={() => handleTabClick(index)}
                className={`${s.reviews__tab} ${
                  isActive === index ? s.reviews__active : ''
                }`}
              >
                <div className={s.reviews__img}>
                  <img
                    src={API_URL + '/static/images/reviews/' + tab.foto}
                    alt='review img'
                  />
                </div>

                <div className={s.reviews__info}>
                  <h3 className={`${s.reviews__name} cards-header`}>
                    {
                      tab.translations.find((trans) => trans.language === 'en')
                        ?.name
                    }
                  </h3>
                  <p className={s.reviews__status}>
                    {
                      tab.translations.find((trans) => trans.language === 'en')
                        ?.job
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={s.reviews__text}>
            <Swiper
              modules={[Navigation, EffectFade]}
              className={s.reviews__text_slider}
              onSlideChange={onSlideChange}
              slidesPerView={1}
              spaceBetween={0}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {reviews.map((tab) => (
                <div key={tab._id} className={s.reviews__text_content}>
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
              >
                <svg>
                  <use href={sprite + '#arrow-right'}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
