import s from './Navbar.module.scss'
import { NavLink } from "react-router-dom";
import { Translation } from '../../components'
import { useTranslation } from "react-i18next";
import logoImg from '../../assets/logo.svg'

interface ILinks {
  text: string;
  link: string;
}

const Navbar = () => {
  const { t } = useTranslation();

  const links:ILinks[] = [
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
    <div className={s.box_nav}>
      <div className='container'>
        <nav className={s.nav}>
          <img src={logoImg} alt="" />
          <div className={s.left}>
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
            <Translation />
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar