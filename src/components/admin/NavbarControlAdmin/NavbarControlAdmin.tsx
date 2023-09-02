import s from './NavbarControlAdmin.module.scss';
import { ButtonApp } from '../../../components/UI';

const NavbarControlAdmin = ({createLink}:{createLink:string}) => {
   return (
      <div className={s.navbar_control_admin}>
        
         <section className={s.section_nav_control_admin_modules}>
            <ButtonApp 
            className={s.submit}
            type='link'
            to={createLink}
            // color='orange'
            size='smaller'
          >
            Create</ButtonApp>
         </section>
      </div>
   );
};
export default NavbarControlAdmin;
