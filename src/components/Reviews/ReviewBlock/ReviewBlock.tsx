import { useTranslation } from 'react-i18next';
import { IReviews } from '../../../store/reviews/reviewsType';
import s from './ReviewBlock.module.scss';

interface ReviewProps {
  tab: IReviews;
}

const ReviewBlock = ({ tab }: ReviewProps) => {
  const { i18n } = useTranslation();

  const transReviews = () => {
    return tab.translations.find((item) => i18n.language === item.language);
  };

  return (
    <div className={s.review_block}>
      <h2 className={`${s.review_block__title} review-title`}>
        {transReviews()?.title}
      </h2>
      <p className={`${s.review_block__description} text`}>
        {transReviews()?.body}
      </p>
    </div>
  );
};

export default ReviewBlock;
