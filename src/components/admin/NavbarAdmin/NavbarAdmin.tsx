import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adminLogout } from '../../../store/admin/adminSlice';
import { AppDispatch } from '../../../store/store';
import { ButtonApp } from '../../UI';

import s from './NavbarAdmin.module.scss';
import sprite from '../../../assets/sprite.svg';

interface ILinks {
  text: string;
  link: string;
}

const NavbarAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const links: ILinks[] = [
    {
      text: 'Projects',
      link: '/admin/panel/projects',
    },
    {
      text: 'Reviews',
      link: '/admin/panel/reviews',
    },
    {
      text: 'Link sheets',
      link: '/admin/panel/sheets',
    },
  ];

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      gsap.set(content, { opacity: 0, x: -100 });
      if (isOpen) {
        gsap.to(content, { opacity: 1, x: 0, duration: 0.5 });
      } else {
        gsap.to(content, { opacity: 0, x: -100, duration: 0.5 });
      }
    }
  }, [isOpen]);

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
          <use
            href={isOpen ? sprite + '#arrow-left' : sprite + '#arrow-right'}
          />
        </svg>
      </button>
      {isOpen && (
        <div ref={contentRef} className={s.navbar_admin__content}>
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
