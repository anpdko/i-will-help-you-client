import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Translation } from '../../components';
import ButtonApp from '../UI/ButtonApp/ButtonApp';

import s from './Navbar.module.scss';
import sprite from '../../assets/sprite.svg';

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${s.nav} ${isMenuOpen ? `${s.open}` : ''}`}>
      <div className='container'>
        <div className={s.nav__logo}>
          <Link to='/'>
            <svg>
              <use href={sprite + '#logo'} />
            </svg>
          </Link>
        </div>
        <div className={s.nav__menu}>
          <nav className={s.nav__body}>
            <ul className={s.nav__list}>
              {links
                ? links.map((link, i) => (
                    <li key={i} className={s.nav__item}>
                      <NavLink
                        to={link.link}
                        className={s.nav__link}
                        onClick={handleMenuLinkClick}
                      >
                        {t(link.text)}
                      </NavLink>
                    </li>
                  ))
                : null}
            </ul>
          </nav>
        </div>
        <Translation />
        <ButtonApp>{t('Donate')}</ButtonApp>
        <button
          type='button'
          className={s.burger}
          aria-label='Menu'
          onClick={handleMenuToggle}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
};
export default Navbar;
