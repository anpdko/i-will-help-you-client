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
    // 'scroll-lock' для body
    if (!isMenuOpen) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('scroll-lock');
  };

  const handleLogoClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove('scroll-lock');
    }
  };

  return (
    <header className={`${s.nav} ${isMenuOpen ? `${s.open}` : ''}`}>
      <div className='container'>
        <div className={s.nav__logo}>
          <Link to='/' onClick={handleLogoClick}>
            <svg>
              <use href={sprite + '#logo-header'} />
            </svg>
          </Link>
        </div>
        <nav className={s.nav__menu}>
          <div className={s.actions}>
            <Translation long className='black' />
            <ButtonApp
              type='link'
              to='/donate'
              size='smaller'
              className={s.btn}
              onClick={handleLogoClick}
            >
              {t('Donate')}
            </ButtonApp>
          </div>
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
                      <svg>
                        <use href={sprite + '#arrow-menu'}></use>
                      </svg>
                    </NavLink>
                  </li>
                ))
              : null}
          </ul>

          <div className={s.social}>
            <h3 className={s.social__title}>{t('Follow us')}</h3>
            <ul className={s.social__list}>
              <li>
                <Link to='#' className={s.social__link}>
                  <svg className={s.facebook}>
                    <use href={sprite + '#facebook'} />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to='#' className={s.social__link}>
                  <svg className={s.instagram}>
                    <use href={sprite + '#instagram'} />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <ul className={s.contacts}>
            <li className={s.contacts__item}>
              <Link to='tel:+380000000000' className={s.contacts__link}>
                <div className={s.contacts__link_text}>
                  <span>{t('Hotline')}</span>
                  +0 (000) 000 00 00
                </div>
                <svg>
                  <use href={sprite + '#phone'} />
                </svg>
              </Link>
            </li>
            <li className={s.contacts__item}>
              <Link
                to='mailto:iwillhelpu@post.com'
                className={s.contacts__link}
              >
                <div className={s.contacts__link_text}>
                  <span>{t('Email')}</span>
                  iwillhelpu@post.com
                </div>
                <svg>
                  <use href={sprite + '#mail'} />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={s.nav__actions}>
          <Translation />
          <ButtonApp
            type='link'
            to='/donate'
            size='small'
            className={s.btn}
            onClick={handleLogoClick}
          >
            {t('Donate')}
          </ButtonApp>
        </div>
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
