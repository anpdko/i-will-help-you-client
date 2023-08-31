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
          <div className={s.content}>
            <div className={s.header}>
              <h2 className={`${s.title} heading2`}>
                About the OpportunityConnect
              </h2>
              <div className={s.subtitle}>Project’s description</div>
            </div>
            <div className={s.list}>
              {about?.split('\n').map((paragraph, index) => (
                <p className='text' key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
        {loading ? (
          <Preloader />
        ) : (
          <div className={s.content}>
            <div className={s.header}>
              <h2 className={`${s.title} heading2`}>Key Objectives</h2>
              <div className={s.subtitle}>Our main goals</div>
            </div>
            <ul className={s.list}>
              {goals?.map((item) => (
                <li key={item._id} className={s.item}>
                  <h3 className={s.tag}>{item.tag}</h3>
                  <p className={s.desc}>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {loading ? (
          <Preloader />
        ) : (
          <div className={s.content}>
            <div className={s.header}>
              <h2 className={`${s.title} heading2`}>
                Selection Criteria for Participation
              </h2>
              <div className={s.subtitle}>Selection criteria</div>
            </div>
            <ul className={s.list}>
              {criteria?.map((item) => (
                <li key={item._id} className={s.item}>
                  <h3 className={s.tag}>{item.tag}</h3>
                  <p className={s.desc}>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ButtonApp color='white' size='medium'>
          {t('Join the OpportunityConnect')}
        </ButtonApp>
      </div>
    </section>
  );
};

export default WrapperAccordion;
