import { useState, useEffect, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { getReviews } from '../../../store/reviews/reviewsSlice';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperRef } from 'swiper';

import { useTranslation } from 'react-i18next';

import s from './ReviewsMobile.module.scss';
import ReviewBlock from '../ReviewBlock/ReviewBlock';

const API_URL = import.meta.env.VITE_API_URL;

const ReviewsMobile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { reviews } = useSelector((state: RootState) => state.reviews);
  const [isActive, setIsActive] = useState(0);
  const [swiper, setSwiper] = useState<SwiperRef | null>(null);

  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const onSlideChange = (swiper: { activeIndex: SetStateAction<number> }) => {
    setIsActive(swiper.activeIndex);
  };

  const goToSlide = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const totalPages = reviews.length;
  return (
    <div className={s.reviews_mobile}>
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={22}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        onSlideChange={onSlideChange}
      >
        {reviews.map((tab, index) => {
          const transReviews = () => {
            return tab.translations.find(
              (item) => i18n.language === item.language,
            );
          };
          return (
            <SwiperSlide style={{ flexShrink: 'inherit' }} key={tab._id}>
              <div
                className={`${s.reviews_mobile__card} ${
                  isActive === index ? s.reviews_mobile__active : ''
                }`}
              >
                <div className={s.reviews_mobile__person}>
                  <div className={s.reviews_mobile__img}>
                    <img
                      src={API_URL + '/static/images/reviews/' + tab.foto}
                      alt='review img'
                    />
                  </div>
                  <div className={s.reviews_mobile__info}>
                    <h3 className={`${s.reviews_mobile__name} cards-header`}>
                      {transReviews()?.name}
                    </h3>
                    <p className={s.reviews_mobile__status}>
                      {transReviews()?.job}
                    </p>
                  </div>
                </div>

                <div className={s.reviews_mobile__text}>
                  <ReviewBlock tab={tab} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={s.custom_pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${s.pagination_bullet} ${
                isActive === index ? s.pagination_bullet__active : ''
              }`}
              onClick={() => {
                setIsActive(index);
                goToSlide(index);
              }}
            />
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ReviewsMobile;
