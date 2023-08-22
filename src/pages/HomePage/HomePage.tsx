import s from './HomePage.module.scss';
import { Banners, Projects, About, Reviews, Volunteer } from '../../components';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
	const { t } = useTranslation();
	return (
		<div className="container">
			<div className={s.home}>
				<Banners />
				<h1 className="heading1">{t('Empowering Change through Projects')}</h1>
				<Projects />
				<h1 className="heading1">Our Commitment and Vision</h1>
				<About />
				<h1 className="heading1">Stories of Hope and Gratitude</h1>
				<Reviews />
				<Volunteer/>
			</div>
		</div>
	);
};
export default HomePage;
