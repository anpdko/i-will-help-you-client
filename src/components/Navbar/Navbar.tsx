import s from './Navbar.module.scss'
import { NavLink } from "react-router-dom";
import { Translation } from '../../components'
import { useTranslation } from "react-i18next";

// use <div class='container'></div>
const Navbar = () => {
   const { t } = useTranslation();

   const links = [
     {
       text: "Ready to Help",
       link: "/readyneed",
     },
     {
       text: "Need Help",
       link: "/needhelp",
     },
     {
       text: "Projects",
       link: "/projects",
     },
     {
       text: "About us",
       link: "/about",
     },
   ];

   return (
      <nav className={s.nav}>
         <ul className={s.nav__list}>
        {links
          ? links.map((link, i) => (
              <li key={i} className={s.nav__item}>
                <NavLink to={link.link} className={s.nav__link}>
                  {t(link.text)}
                </NavLink>
              </li>
            ))
          : null}
      </ul>
         <Translation/>
      </nav>
   );
};
export default Navbar