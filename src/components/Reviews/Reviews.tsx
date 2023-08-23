import { useState } from 'react';
import s from './Reviews.module.scss';
import reviewData from '../../data/reviewData';
import ReviewBlock from './ReviewBlock/ReviewBlock';
import sprite from '../../assets/sprite.svg';

const API_URL = import.meta.env.VITE_API_URL;

const Reviews = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabChange = (tab: number) => {
		setActiveTab(tab);
	};

	const handlePrevSlide = () => {
		const prevTab = activeTab > 1 ? activeTab - 1 : reviewData.length;
		setActiveTab(prevTab);
	};

	const handleNextSlide = () => {
		const nextTab = activeTab < reviewData.length ? activeTab + 1 : 1;
		setActiveTab(nextTab);
	};

	const isPrevDisabled = activeTab === 1;
	const isNextDisabled = activeTab === reviewData.length;

	return (
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
							<div className={s.reviews__img}>
								<img src={API_URL + tab.tabImg} alt="review img" />
							</div>

							<div>
								<h3 className={`${s.reviews__name} cards-header`}>
									{tab.tabName}
								</h3>
								<p className={s.reviews__status}>{tab.tabStatus}</p>
							</div>
						</div>
					))}
				</div>

				<div className={s.reviews__text}>
					{reviewData.map(
						(tab) =>
							activeTab === tab.id && <ReviewBlock key={tab.id} tab={tab} />
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
	);
};

export default Reviews;
