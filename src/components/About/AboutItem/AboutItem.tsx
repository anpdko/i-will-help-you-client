import s from './AboutItem.module.scss';

interface ProjectProps {
	title: string;
	description: string;
}

const AboutItem = (props: ProjectProps) => {
	return (
		<div className={s.about__item}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<a href="">Share Your Story</a>
		</div>
	);
};

export default AboutItem;
