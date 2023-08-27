import { IReviews } from '../../../store/reviews/reviewsType';
import s from './ReviewBlock.module.scss';

interface ReviewProps {
  tab: IReviews;
}

const ReviewBlock = ({ tab }: ReviewProps) => {
  return (
    <div className={s.review_block}>
      <h2 className={`${s.review_block__title} review-title`}>{tab.translations.find(trans => trans.language === 'en')?.title}</h2>
      <p className={`${s.review_block__description} text`}>{tab.translations.find(trans => trans.language === 'en')?.body}</p>
    </div>
  );
};

export default ReviewBlock;
