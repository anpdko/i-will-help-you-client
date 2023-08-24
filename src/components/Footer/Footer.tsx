import { Link } from 'react-router-dom';
import s from './Footer.module.scss';
import sprite from '../../assets/sprite.svg';
// import facebook from '../../assets/icons-all/facebook.svg'
// import instagram from '../../assets/icons-all/instagram.svg'
import ButtonApp from '../UI/ButtonApp/ButtonApp';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <div className={s.footer_links}>
          <Link to='/' className={s.footer_links__logo}>
            <svg>
              <use href={sprite + '#logo'} />
            </svg>
          </Link>

          <nav className={s.sb__footer_links_div}>
            <ul className={s.footer_links__list}>
              <li>
                <Link to='#'>Conditions</Link>
              </li>
              <li>
                <Link to='#'>Publicity</Link>
              </li>
              <li>
                <Link to='#'>Documents</Link>
              </li>
            </ul>
          </nav>
          <nav className={s.sb__footer_links_div}>
            <ul className={s.footer_links__list}>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='#'>FAQ</Link>
              </li>
            </ul>
          </nav>
          <nav className={s.sb__footer_links_div}>
            <ul className={s.footer_links__list}>
              <li>
                <Link to='/readyneed'>Volunteering</Link>
              </li>
              <li>
                <Link to='/needhelp'>Help</Link>
              </li>
            </ul>
          </nav>
          <div className={s.footer_links__div}>
            <p>Follow us</p>
            <ul className={s.footer_links__socialmedia}>
              <li>
                <Link to='#' className={s.footer_links__socialmedia__link}>
                  <svg
                    className={s.footer_links__socialmedia__link__icon_f}
                    width='2.75rem'
                    height='2.75rem'
                  >
                    <use href={sprite + '#facebook'} />
                  </svg>
                  {/* <img src={facebook}/> */}
                </Link>
              </li>
              <li>
                <Link to='#' className={s.footer_links__socialmedia__link}>
                  <svg className={s.footer_links__socialmedia__link__icon_i}>
                    <use href={sprite + '#instagram'} />
                  </svg>
                  {/* <img src={instagram}/> */}
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.sb__footer_links_div}>
            <ul>
              <ButtonApp>Donate</ButtonApp>
              <ul>
                <li>
                  <p>Mon-Fri 8:00 - 18:00</p>
                </li>
                <li>
                  <Link to='tel:++380000000000'>+0 (000) 000 00 00</Link>
                </li>
                <li>
                  <Link to='mailto:iwillhelpu@post.com'>
                    iwillhelpu@post.com
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
