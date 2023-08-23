import { useState } from 'react';
import s from './Reviews.module.scss';
import reviewData from '../../data/reviewData';
import ReviewBlock from './ReviewBlock/ReviewBlock';

const API_URL = import.meta.env.VITE_API_URL;
const Reviews = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabChange = (tab: number) => {
		setActiveTab(tab);
	};
	return (
		// спробувати  swiper thumbs
		<div className="container">
			<div className={s.reviews}>
				<div className={s.reviews__tabs}>
					{reviewData.map((tab) => (
						<div
							key={tab.id}
							className={`${s.reviews__tab} ${
								activeTab === tab.id ? s.reviews__active : ''
							}`}
							onClick={() => handleTabChange(tab.id)}
						>
							<img src={API_URL + tab.tabImg} alt="review img" />
							<h3>{tab.tabName}</h3>
							<p>{tab.tabStatus}</p>
						</div>
					))}
				</div>

				<div className={s.reviews__text}>
					{reviewData.map(
						(tab) =>
							activeTab === tab.id && <ReviewBlock key={tab.id} tab={tab} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Reviews;
