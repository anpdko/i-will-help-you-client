import ButtonApp from '../UI/ButtonApp/ButtonApp';
import s from './Volunteer.module.scss';

const Volunteer = () => {
	return (
		<div className={s.volunteer}>
			<p></p>
			<ButtonApp color="white" size="medium">
				Become a Volunteer
			</ButtonApp>
		</div>
	);
};
export default Volunteer;
