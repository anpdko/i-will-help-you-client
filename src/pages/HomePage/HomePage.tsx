import s from './HomePage.module.scss';
import { Banners, Projects, About, Reviews, Volunteer } from '../../components';

const HomePage = () => {
	return (
		<main className={s.home}>
			<Banners />
			<Projects />
			<About />
			<Reviews />
			<Volunteer />
		</main>
	);
};
export default HomePage;
