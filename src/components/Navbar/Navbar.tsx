import s from './Navbar.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { Translation } from '../../components';
import { useTranslation } from 'react-i18next';
import sprite from '../../assets/sprite.svg';
import ButtonApp from '../UI/ButtonApp/ButtonApp';

interface ILinks {
  text: string;
  link: string;
}

const Navbar = () => {
  const { t } = useTranslation();

  const links: ILinks[] = [
    {
      text: 'Ready to Help',
      link: '/readyneed',
    },
    {
      text: 'Need Help',
      link: '/needhelp',
    },
    {
      text: 'Projects',
      link: '/projects',
    },
    {
      text: 'About us',
      link: '/about',
    },
  ];

  return (
    <header className={s.box_nav}>
      <div className='container'>
        <nav className={s.nav}>
          <Link to='/' className={s.nav__logo}>
            <svg>
              <use href={sprite + '#logo'} />
            </svg>
          </Link>
          <div className={s.nav__left}>
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
            <ButtonApp>Donate</ButtonApp>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
