import s from './AboutItem.module.scss';
import { ITabName } from '../../../data/aboutTab';
import { Link } from 'react-router-dom';
import ButtonApp from '../../UI/ButtonApp/ButtonApp';
import { useGsapFrom } from '../../../hooks/useGsap';

interface AboutProps {
  tab: ITabName;
}

const AboutItem = ({ tab }: AboutProps) => {
  const refAboutItem = useGsapFrom({
    opacity: 0,
    x: -60,
    delay: 0,
    duration: 1,
  });

  return (
    <article className={s.about__item} ref={refAboutItem}>
      <div>
        <h2 className={`${s.item__title} heading2`}>{tab.title}</h2>
        <p className={`${s.item__text} text`}>{tab.description}</p>
      </div>

      <div>
        <Link className={s.item__link} to={tab.link}>
          Share Your Story
        </Link>
        <div className={s.item__buttons}>
          <ButtonApp size='large' className={s.item__button}>
            Donate Now
          </ButtonApp>
          <ButtonApp size='large' color='white' className={s.item__button}>
            Become a Volunteer
          </ButtonApp>
        </div>
      </div>
    </article>
  );
};

export default AboutItem;
