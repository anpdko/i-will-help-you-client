import s from './AboutItem.module.scss';
import { ITabName } from '../../../data/aboutTab';
import { Link } from 'react-router-dom';

interface AboutProps {
	tab: ITabName;
}

const AboutItem = ({ tab }: AboutProps) => {
	return (
		<div className={s.about__item}>
			<div>
				<h2 className={`${s.about__item_title} heading2`}>{tab.title}</h2>
				<p className={s.about__item_text}>{tab.description}</p>
			</div>

			<div>
				<Link className={s.about__item_link} to={tab.link}>
					Share Your Story
				</Link>
				<div className={s.about__item_buttons}>
					{/* Місце для button компонента*/}
				</div>
			</div>
		</div>
	);
};

export default AboutItem;
