import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews/reviewsSlice';
import { AppDispatch, RootState } from '../../store/store';

import ReviewBlock from './ReviewBlock/ReviewBlock';
import sprite from '../../assets/sprite.svg';
import s from './Reviews.module.scss';

const API_URL = import.meta.env.VITE_API_URL;

const Reviews = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { reviews } = useSelector((state: RootState) => state.reviews);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    dispatch(getReviews() as any);
  }, [dispatch]);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handlePrevSlide = () => {
    const prevTab = activeTab > 0 ? activeTab - 1 : reviews.length - 1;
    setActiveTab(prevTab);
  };

  const handleNextSlide = () => {
    const nextTab = activeTab < reviews.length - 1 ? activeTab + 1 : 0;
    setActiveTab(nextTab);
  };

  const isPrevDisabled = reviews.length === 0 || activeTab === 0;
  const isNextDisabled =
    reviews.length === 0 || activeTab === reviews.length - 1;

  return (
    <section>
      <div className='container'>
        <div className={s.reviews}>
          <div className={s.reviews__tabs} id='scrollbar'>
            {reviews.map((tab, index) => (
              <div
                key={tab._id}
                className={`${s.reviews__tab} ${
                  activeTab === index ? s.reviews__active : ''
                }`}
                onClick={() => handleTabChange(index)}
              >
                <div className={s.reviews__img}>
                  <img
                    src={API_URL + 'static/images/reviews/' + tab.foto}
                    alt='review img'
                  />
                </div>

                <div>
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
            {reviews.map(
              (tab, index) =>
                activeTab === index && <ReviewBlock key={tab._id} tab={tab} />,
            )}

            <div className={s.slide_navigation}>
              <button
                onClick={handlePrevSlide}
                disabled={isPrevDisabled}
                className={`${s.slide_navigation__button} ${
                  isPrevDisabled ? s.slide_navigation__disabled : ''
                }`}
              >
                <svg>
                  <use href={sprite + '#arrow-left'}></use>
                </svg>
              </button>
              <button
                onClick={handleNextSlide}
                disabled={isNextDisabled}
                className={`${s.slide_navigation__button} ${
                  isNextDisabled ? s.slide_navigation__disabled : ''
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
