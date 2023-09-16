import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import ReviewsDesktop from './ReviewsDesktop/ReviewsDesktop';
import ReviewsMobile from './ReviewsMobile/ReviewsMobile';

import s from './Reviews.module.scss';

const Reviews = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <section className={s.reviews}>
      <div className='container'>
        <h2 className='heading1'>{t('Stories of Hope and Gratitude')}</h2>
        {isMobile ? <ReviewsMobile /> : <ReviewsDesktop />}
      </div>
    </section>
  );
};

export default Reviews;
