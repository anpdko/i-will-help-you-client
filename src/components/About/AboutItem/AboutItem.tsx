import s from './AboutItem.module.scss';
import { ITabName } from '../../../data/aboutTab'
import { Link } from 'react-router-dom'

interface ProjectProps {
	tab: ITabName
}

const AboutItem = ({tab}:ProjectProps) => {
	return (
		<div className={s.about__item}>
			<h2>{tab.title}</h2>
			<p>{tab.description}</p>
			<Link to={tab.link}>Share Your Story</Link>
		</div>
	);
};

export default AboutItem;
