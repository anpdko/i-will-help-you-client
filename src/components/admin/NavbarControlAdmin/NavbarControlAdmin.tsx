import s from './NavbarControlAdmin.module.scss';
import { ButtonApp } from '../../../components/UI';

interface INavbarAdmin {
  createLink?: string;
  children?: React.ReactNode;
}
const NavbarControlAdmin = ({ createLink, children }: INavbarAdmin) => {
  return (
    <div className={s.navbar_control_admin}>
      <nav className={s.section_nav_control_admin_modules}>
        {createLink && (
          <ButtonApp
            className={s.submit}
            type='link'
            to={createLink}
            // color='orange'
            size='smaller'
          >
            Create
          </ButtonApp>
        )}
        {children}
      </nav>
    </div>
  );
};
export default NavbarControlAdmin;
