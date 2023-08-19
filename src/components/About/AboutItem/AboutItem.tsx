import s from './AboutItem.module.scss';
import { ITabName } from '../../../data/aboutTab';
import { Link } from 'react-router-dom';

interface ProjectProps {
	tab: ITabName;
}

const AboutItem = ({ tab }: ProjectProps) => {
	return (
		<div className={s.about__item}>
			<h2 className={`${s.about__item_title} heading2`}>{tab.title}</h2>
			<p className={s.about__item_text}>{tab.description}</p>
			<Link className={s.about__item_link} to={tab.link}>
				Share Your Story
			</Link>
		</div>
	);
};

export default AboutItem;
