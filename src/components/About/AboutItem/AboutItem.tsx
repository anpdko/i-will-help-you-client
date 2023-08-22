import s from './AboutItem.module.scss';
import { ITabName } from '../../../data/aboutTab';
import { Link } from 'react-router-dom';
import ButtonApp from '../../UI/ButtonApp/ButtonApp';
import { useGsapFrom } from '../../../hooks/useGsap';

interface AboutProps {
	tab: ITabName;
}

const AboutItem = ({ tab }: AboutProps) => {
	const refAboutItem =  useGsapFrom({
      opacity: 0, 
		x: -60, 
		delay: 0, 
		duration: 1,
   })

	return (
		<div className={s.about__item} ref={refAboutItem}>
			<div>
				<h2 className={`${s.about__item_title} heading2`}>{tab.title}</h2>
				<p className={s.about__item_text}>{tab.description}</p>
			</div>

			<div>
				<Link className={s.about__item_link} to={tab.link}>
					Share Your Story
				</Link>
				<div className={s.about__item_buttons}>
					<ButtonApp size="large">Donate Now</ButtonApp>
					<ButtonApp size="large" color="white">
						Become a Volunteer
					</ButtonApp>
				</div>
			</div>
		</div>
	);
};

export default AboutItem;
