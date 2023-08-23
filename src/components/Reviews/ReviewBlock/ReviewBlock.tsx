import { IReviewData } from '../../../data/reviewData';
import s from './ReviewBlock.module.scss';

interface ReviewProps {
	tab: IReviewData;
}
const ReviewBlock = ({ tab }: ReviewProps) => {
	return (
		<div className={s.review_block}>
			<h2 className={`${s.review_block__title} review-title`}>{tab.title}</h2>
			<p className={s.review_block__description}>{tab.description}</p>
		</div>
	);
};

export default ReviewBlock;
