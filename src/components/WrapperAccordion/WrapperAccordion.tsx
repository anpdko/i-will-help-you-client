import { useTranslation } from 'react-i18next';

import { IProjectsState } from '../../store/projects/projectsType';
import ButtonApp from '../UI/ButtonApp/ButtonApp';
import s from './WrapperAccordion.module.scss';
import Preloader from '../UI/Preloader/Preloader';

const WrapperAccordion: React.FC<IProjectsState> = ({ projects, loading }) => {
  const { t } = useTranslation();

  const about = projects[0]?.translations[0].description;
  const criteria = projects[0]?.translations[0].criteria;
  const goals = projects[0]?.translations[0].goals;

  return (
    <section className={s.wrapper}>
      <div className='container'>
        {loading ? (
          <Preloader />
        ) : (
          <article className={s.content}>
            <div className={s.header}>
              <h2 className={`${s.title} heading2`}>
                {t('About the OpportunityConnect')}
              </h2>
              <h3 className={s.subtitle}>{t('Project’s description')}</h3>
            </div>
            <div className={s.list}>
              {about?.split('\n').map((paragraph, index) => (
                <p className='text' key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        )}
        {loading ? (
          <Preloader />
        ) : (
          <article className={s.content}>
            <div className={s.header}>
              <h2 className={`${s.title} heading2`}>{t('Key Objectives')}</h2>
              <h3 className={s.subtitle}>{t('Our main goals')}</h3>
            </div>
            <ul className={s.list}>
              {goals?.map((item) => (
                <li key={item._id} className={s.item}>
                  <h4 className={s.tag}>{item.tag}</h4>
                  <p className='text'>{item.desc}</p>
                </li>
              ))}
            </ul>
          </article>
        )}
        {loading ? (
          <Preloader />
        ) : (
          <article className={s.content}>
            <div className={s.header}>
              <h2 className={`${s.title} heading2`}>
                {t('Selection Criteria for Participation')}
              </h2>
              <h3 className={s.subtitle}>{t('Selection criteria')}</h3>
            </div>
            <ul className={s.list}>
              {criteria?.map((item) => (
                <li key={item._id} className={s.item}>
                  <h4 className={s.tag}>{item.tag}</h4>
                  <p className='text'>{item.desc}</p>
                </li>
              ))}
            </ul>
          </article>
        )}
        <ButtonApp color='white' size='medium'>
          {t('Join the OpportunityConnect')}
        </ButtonApp>
      </div>
    </section>
  );
};

export default WrapperAccordion;
