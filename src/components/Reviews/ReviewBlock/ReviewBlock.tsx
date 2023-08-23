import { IReviewData } from '../../../data/reviewData';
import s from './ReviewBlock.module.scss';

interface ReviewProps {
	tab: IReviewData;
}
const ReviewBlock = ({ tab }: ReviewProps) => {
	return (
		<div className={s.review_block}>
			<h2>{tab.title}</h2>
			<p>{tab.description}</p>
		</div>
	);
};

export default ReviewBlock;
