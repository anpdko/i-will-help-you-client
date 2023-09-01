import s from './NavbarControlAdmin.module.scss';
import { ButtonApp } from '../../../components/UI';

const NavbarControlAdmin = () => {
   return (
      <div className={s.navbar_control_admin}>
        
         <section className={s.section_nav_control_admin_modules}>
         <h1>NavbarControlAdmintest</h1>
            <ButtonApp 
            className={s.submit}
            type='submit'
            color='orange'
            size='smaller'
          >
            Create</ButtonApp>
         </section>
      </div>
   );
};
export default NavbarControlAdmin