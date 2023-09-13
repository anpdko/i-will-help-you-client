import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';

import ButtonApp from '../UI/ButtonApp/ButtonApp';

import s from './Footer.module.scss';
import sprite from '../../assets/sprite.svg';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={s.footer}>
      <div className='container'>
        <Link to='/' className={s.logo}>
          <svg>
            <use href={sprite + '#logo-header'} />
          </svg>
        </Link>
        <nav className={s.nav}>
          <ul className={s.nav__list}>
            <li>
              <Link to='#'>{t('Conditions')}</Link>
            </li>
            <li>
              <Link to='#'>{t('Publicity')}</Link>
            </li>
            <li>
              <Link to='#'>{t('Documents')}</Link>
            </li>
          </ul>

          <ul className={s.nav__list}>
            <li>
              <Link to='/about'>{t('About Us')}</Link>
            </li>
            <li>
              <Link to='/projects'>{t('Projects')}</Link>
            </li>
            <li>
              <Link to='#'>{t('FAQ')}</Link>
            </li>
          </ul>

          <ul className={s.nav__list}>
            <li>
              <Link to='/volunteer'>{t('Volunteering')}</Link>
            </li>
            <li>
              <Link to='/needhelp'>{t('Help')}</Link>
            </li>
          </ul>
        </nav>

        <div className={s.social}>
          <p>{t('Follow us')}</p>
          <ul className={s.social__items}>
            <li>
              <Link to='#' className={s.social__link}>
                <svg>
                  <use href={sprite + '#facebook'} />
                </svg>
              </Link>
            </li>
            <li>
              <Link to='#' className={s.social__link}>
                <svg>
                  <use href={sprite + '#instagram'} />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div className={s.contacts}>
          <ButtonApp type='link' to='/donate' className={s.contacts__btn}>
            {t('Donate')}
          </ButtonApp>
          <MediaQuery minWidth={391}>
            <ul className={s.contacts__list}>
              <li>
                <p>{t('Mon-Fri')} 8:00 - 18:00</p>
              </li>
              <li>
                <Link to='tel:+48575728854'>+48-575-728-854</Link>
              </li>
              <li>
                <Link to='mailto:admin@iwillhelpyou.charity'>
                  admin@iwillhelpyou.charity
                </Link>
              </li>
            </ul>
          </MediaQuery>
          <MediaQuery maxWidth={390}>
            <ul className={s.contacts}>
              <li className={s.contacts__item}>
                <Link to='tel:+48575728854' className={s.contacts__link}>
                  <div className={s.contacts__link_text}>
                    <span>{t('Hotline')}</span>
                    +48-575-728-854
                  </div>
                  <svg>
                    <use href={sprite + '#phone'} />
                  </svg>
                </Link>
              </li>
              <li className={s.contacts__item}>
                <Link
                  to='mailto:admin@iwillhelpyou.charity'
                  className={s.contacts__link}
                >
                  <div className={s.contacts__link_text}>
                    <span>{t('Email')}</span>
                    admin@iwillhelpyou.charity
                  </div>
                  <svg>
                    <use href={sprite + '#mail'} />
                  </svg>
                </Link>
              </li>
            </ul>
          </MediaQuery>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
