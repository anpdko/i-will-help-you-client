import s from './Banners.module.scss';
import Bunner from './Bunner/Banner';

const API_URL = import.meta.env.VITE_API_URL;

const Banners = () => {
	return (
		<div className={s.banners}>
			<Bunner
				img={API_URL + '/static/images/banners/banner-1.png'}
				title='"Be the Change – Volunteer with Us!"'
				description="Embrace the power of giving back and join
				our compassionate team of volunteers.
				Together, we can make a difference
				in the lives of those affected by conflict.
				Become a volunteer today!"
				link="#"
			/>
			<Bunner
				img={API_URL + '/static/images/banners/banner-2.png'}
				title='"Donate to Heal, Empower,
				and Rebuild"'
				description="Every contribution counts. Your generous
				donation helps us reach more war
				survivorsand provide them with the care
				and resources they deserve. Join us
				in making a lasting impact."
				link="#"
			/>
			<Bunner
				img={API_URL + '/static/images/banners/banner-3.png'}
				title='"Seeking Support?
				Weʼre Here for You!"'
				description="Are you a war-affected individual in need
				of assistance? Our dedicated team is ready
				to extend a helping hand. Share your story
				with us and let us support you on your
				healing journey."
				link="#"
			/>
		</div>
	);
};
export default Banners;
