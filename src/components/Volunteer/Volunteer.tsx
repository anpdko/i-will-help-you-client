import ButtonApp from '../UI/ButtonApp/ButtonApp';
import s from './Volunteer.module.scss';

const Volunteer = () => {
	return (
		<div className={s.volunteer}>
         <div className={s.volunteer_container}>
			<p className={s.volunteer_text}>VOLUNTEER NEEDED</p>
			<ButtonApp color="white" size="medium">
				Become a Volunteer
			</ButtonApp>
         </div>
		</div>
	);
};
export default Volunteer;
