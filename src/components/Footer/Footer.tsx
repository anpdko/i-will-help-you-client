import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';

import ButtonApp from '../UI/ButtonApp/ButtonApp';

import s from './Footer.module.scss';
import sprite from '../../assets/sprite.svg';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const facebookProfileIdEn = '61551308008265';
  const facebookProfileIdUa = '61551465054599';

  const facebookProfileId =
    i18n.language === 'en' ? facebookProfileIdEn : facebookProfileIdUa;

  const facebookLink = `https://www.facebook.com/profile.php?id=${facebookProfileId}`;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={s.footer}>
      <div className='container'>
        <div className={s.top}>
          <div className={s.logo}>
            <Link onClick={handleScrollTop} to='/' aria-label='Logo'>
              <svg>
                <use href={sprite + '#logo-header'} />
              </svg>
            </Link>
            <MediaQuery maxWidth={767}>
              <ButtonApp type='link' to='/donate' className={s.button}>
                {t('Donate')}
              </ButtonApp>
            </MediaQuery>
          </div>
          <MediaQuery minWidth={768}>
            <div className={s.links}>
              <MediaQuery minWidth={992}>
                <nav className={s.nav}>
                  <div className={s.nav__column}>
                    <h2>{t('Documents')}</h2>
                    <ul>
                      <li>
                        <NavLink to='/publicity'>{t('Publicity')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/conditions'>{t('Conditions')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/privacy'>{t('Privacy Policy')}</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className={s.nav__column}>
                    <h2>{t('Foundation')}</h2>
                    <ul>
                      <li>
                        <NavLink to='/projects'>{t('Projects')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/about'>{t('About Us')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/faq'>{t('FAQ')}</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className={s.nav__column}>
                    <h2>{t('Assistance')}</h2>
                    <ul>
                      <li>
                        <NavLink to='/volunteer'>{t('Ready to Help')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/needhelp'>{t('Need Help')}</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </MediaQuery>
              <MediaQuery maxWidth={991}>
                <nav className={s.nav}>
                  <div className={s.nav__column}>
                    <ul>
                      <li>
                        <NavLink to='/publicity'>{t('Publicity')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/conditions'>{t('Conditions')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/privacy'>{t('Privacy Policy')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/faq'>{t('FAQ')}</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className={s.nav__column}>
                    <ul>
                      <li>
                        <NavLink to='/projects'>{t('Projects')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/about'>{t('About Us')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/volunteer'>{t('Ready to Help')}</NavLink>
                      </li>
                      <li>
                        <NavLink to='/needhelp'>{t('Need Help')}</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </MediaQuery>
              <div className={s.contacts}>
                <ButtonApp type='link' to='/donate' className={s.button}>
                  {t('Donate')}
                </ButtonApp>
                <ul className={s.contacts__list}>
                  <li>
                    <p>{t('Mon-Fri')} 8:00 - 18:00</p>
                  </li>
                  <li>
                    <Link to='tel:+48575728854'>+48-575-728-854</Link>
                  </li>
                  <li>
                    <Link to='mailto:contact@iwillhelpyou.charity'>
                      contact@iwillhelpyou.charity
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <nav className={s.nav}>
              <div className={s.nav__column}>
                <ul>
                  <li>
                    <NavLink to='/publicity'>{t('Publicity')}</NavLink>
                  </li>
                  <li>
                    <NavLink to='/conditions'>{t('Conditions')}</NavLink>
                  </li>
                  <li>
                    <NavLink to='/privacy'>{t('Privacy Policy')}</NavLink>
                  </li>
                  <li>
                    <NavLink to='/faq'>{t('FAQ')}</NavLink>
                  </li>
                </ul>
              </div>
              <div className={s.nav__column}>
                <ul>
                  <li>
                    <NavLink to='/projects'>{t('Projects')}</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about'>{t('About Us')}</NavLink>
                  </li>
                  <li>
                    <NavLink to='/volunteer'>{t('Ready to Help')}</NavLink>
                  </li>
                  <li>
                    <NavLink to='/needhelp'>{t('Need Help')}</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </MediaQuery>
        </div>

        <div className={s.bottom}>
          <div className={s.text}>
            <p>NIP 7011082198</p>
            <p>REGON 521645127</p>
            <p>KRS 0000961731</p>
          </div>
          <MediaQuery maxWidth={767}>
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
                  to='mailto:contact@iwillhelpyou.charity'
                  className={s.contacts__link}
                >
                  <div className={s.contacts__link_text}>
                    <span>{t('Email')}</span>
                    contact@iwillhelpyou.charity
                  </div>
                  <svg>
                    <use href={sprite + '#mail'} />
                  </svg>
                </Link>
              </li>
            </ul>
          </MediaQuery>
          <div className={s.social}>
            <ul className={s.social__items}>
              <li>
                <Link
                  to='https://t.me/IWillHelpYouCharity'
                  target='_blank'
                  className={s.social__link}
                  aria-label='link telegram'
                >
                  <svg>
                    <use href={sprite + '#telegram'} />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to='https://www.instagram.com/iwillhelpyoucharity/?fbclid=IwARlX-K6LDvtT-73bOxav9ni37oh20veCSDBfo9auoIU36aoFamKCSK41Qfg'
                  target='_blank'
                  className={s.social__link}
                  aria-label='link instagram'
                >
                  <svg>
                    <use href={sprite + '#instagram'} />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to={facebookLink}
                  target='_blank'
                  className={s.social__link}
                  aria-label='link facebook'
                >
                  <svg>
                    <use href={sprite + '#facebook'} />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to='https://www.linkedin.com/company/charity-foundation-i-will-help-you/'
                  target='_blank'
                  className={s.social__link}
                  aria-label='link linkedin'
                >
                  <svg>
                    <use href={sprite + '#linkedin'} />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
