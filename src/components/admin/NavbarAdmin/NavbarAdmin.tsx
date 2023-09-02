import { AppDispatch } from '../../../store/store';
import { adminLogout } from '../../../store/admin/adminSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ButtonApp } from '../../UI';
import s from './NavbarAdmin.module.scss';
import sprite from '../../../assets/sprite.svg';
import { useState } from 'react';
import { useGsapFrom } from '../../../hooks/useGsap';
//   /panel/reviews
//   /panel/projects
interface ILinks {
  text: string;
  link: string;
}

const NavbarAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(true);
  const links: ILinks[] = [
    {
      text: 'Projects',
      link: '/admin/panel/projects',
    },
    {
      text: 'Reviews',
      link: '/admin/panel/reviews',
    },
  ];

  const refAboutItem = useGsapFrom({
    opacity: 0,
    x: -60,
    delay: 0,
    duration: 1,
  });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside
      className={`${s.navbar_admin} ${
        isOpen ? '' : `${s.navbar_admin__close}`
      }`}
    >
      <button onClick={handleClick} className={s.navbar_admin__menu}>
        <svg>
          <use href={sprite + '#arrow-right'} />
        </svg>
      </button>
      {isOpen && (
        <div ref={refAboutItem}>
          <h1 className={s.navbar_admin__title}>Admin Panel</h1>
          <ul className={s.navbar_admin__list}>
            {links.map((link, i) => (
              <li key={i} className={s.nav__item}>
                <NavLink to={link.link} className={s.nav__link}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <ButtonApp size='smaller' onClick={() => dispatch(adminLogout())}>
            Exit
          </ButtonApp>
        </div>
      )}
    </aside>
  );
};
export default NavbarAdmin;
