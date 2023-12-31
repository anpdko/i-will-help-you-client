import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import aboutTab from '@/data/aboutTab';
import AboutItem from './AboutItem/AboutItem';
import sprite from '@/assets/sprite.svg';
import s from './About.module.scss';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const { i18n, t } = useTranslation();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className={s.about}>
      <div className='container'>
        <h2 className='heading1'>{t('Our Commitment and Vision')}</h2>
        <div className={s.about__body}>
          <div className={s.about__tabs}>
            {aboutTab.map((tab) => {
              const transAbout = () => {
                return tab.translations.find(
                  (item) => i18n.language === item.language,
                );
              };
              return (
                <button
                  key={tab.id}
                  className={`${s.about__tab} ${
                    activeTab === tab.id ? s.about__active : ''
                  }`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <svg>
                    <use href={sprite + tab.tabIcon} />
                  </svg>
                  {transAbout()?.tabName}
                </button>
              );
            })}
          </div>
          <div className={s.about__items}>
            {aboutTab.map(
              (tab) =>
                activeTab === tab.id && <AboutItem key={tab.id} tab={tab} />,
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
