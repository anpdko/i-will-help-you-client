import s from './Banner.module.scss';
import arrow_icon from '../../../assets/icons/arrow.svg';

interface BunnerProps {
	img: string;
	title: string;
	description: string;
	link: string;
}

const Bunner = (props: BunnerProps) => {
	return (
		<div className={s.banner}>
			<img className={s.banner__img} src={props.img} alt="banner img" />

			<div className={s.banner__content}>
				<h3 className={`${s.banner__title} bunner-title`}>{props.title}</h3>
				<p className={s.banner__discription}>{props.description}</p>
			</div>
			<a className={s.banner__btn} href={s.banner__link}>
				<img src={arrow_icon} />
			</a>
		</div>
	);
};

export default Bunner;
