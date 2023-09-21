import { useTranslation } from 'react-i18next';

import ArticleSection from '@/components/UI/ArticleSection/ArticleSection';
import AboutTeam from '@/components/AboutTeam/AboutTeam';

import { Volunteer, AboutHeader, AboutDocuments } from '../../components';

import aboutArticleData from '../../data/aboutArticleData';

import s from './AboutPage.module.scss';

const AboutPage = () => {
  const { i18n } = useTranslation();

  const translations = (id: string) => {
    const article = aboutArticleData.find((item) => item.section === id);
    const translation = article?.translations.find(
      (item) => item.language === i18n.language,
    );
    return translation;
  };

  const aboutOurActivitiesTranslation = translations('about_our_activities');

  const adaptedItems = aboutOurActivitiesTranslation?.list
    ? aboutOurActivitiesTranslation.list.map((item) => ({
        _id: item._id,
        listTitle: item.listTitle,
        subItems: item.subItems,
      }))
    : [];

  return (
    <>
      <AboutHeader />

      <section className={s.about_goals}>
        <div className='container'>
          <ArticleSection
            title={translations('goals_and_vision')?.title || ''}
            subtitle={translations('goals_and_vision')?.subtitle || ''}
            items={[translations('goals_and_vision')?.description || '']}
            variant='paragraphs-3'
          />
        </div>
      </section>

      <section className={s.about_team}>
        <div className='container'>
          <ArticleSection
            title={translations('our_team')?.title || ''}
            subtitle={translations('our_team')?.subtitle || ''}
            items={[translations('our_team')?.description || '']}
            variant='paragraphs-3'
          />
        </div>
      </section>

      <AboutTeam />

      <section className={s.about_our_activities}>
        <div className='container'>
          <ArticleSection
            title={translations('about_our_activities')?.title || ''}
            subtitle={translations('about_our_activities')?.subtitle || ''}
            items={adaptedItems}
            variant='list-count'
          />
        </div>
      </section>

      <AboutDocuments />

      <Volunteer />
    </>
  );
};

export default AboutPage;
