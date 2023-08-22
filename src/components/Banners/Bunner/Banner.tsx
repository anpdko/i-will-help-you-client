import s from './Banner.module.scss';
import sprite from '../../../assets/sprite.svg';

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
				<svg className={s.banner__icon}>
					<use href={sprite + '#arrow-up-right'} />
				</svg>
			</a>
		</div>
	);
};

export default Bunner;
