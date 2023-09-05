import { Link } from 'react-router-dom';

import s from './Banner.module.scss';
import sprite from '../../../assets/sprite.svg';

interface BunnerProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

const Bunner = (props: BunnerProps) => {
  return (
    <article className={s.banner}>
      <Link to={props.link}>
        <img className={s.banner__img} src={props.img} alt='banner img' />
        <div className={s.banner__filter}></div>

        <div className={s.banner__content}>
          <h3 className={`${s.banner__title} bunner-title`}>{props.title}</h3>
          <p className={`${s.banner__discription} text`}>{props.description}</p>
        </div>

        <svg className={s.banner__icon}>
          <use href={sprite + '#arrow-up-right'} />
        </svg>
      </Link>
    </article>
  );
};

export default Bunner;
