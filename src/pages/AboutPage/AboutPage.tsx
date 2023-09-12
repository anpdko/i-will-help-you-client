import { useTranslation } from 'react-i18next';

import ArticleSection from '@/components/UI/ArticleSection/ArticleSection';
import { Volunteer, AboutHeader } from '../../components';

import aboutArticleData from '../../data/aboutArticleData';

import s from './AboutPage.module.scss';

const AboutPage = () => {
  const { i18n } = useTranslation();

  const translations = (id: string) => {
    const article = aboutArticleData.find((item) => item.id === id);
    const translation = article?.translations.find(
      (item) => item.language === i18n.language,
    );
    return translation;
  };

  return (
    <>
      <AboutHeader />

      <section className={s.about_goals}>
        <div className='container'>
          <ArticleSection
            title={translations('goals_and_vision')?.title || ''}
            subtitle={translations('goals_and_vision')?.subtitle || ''}
            items={[translations('goals_and_vision')?.description || '']}
            variant='paragraphs'
          />
        </div>
      </section>

      <section className={s.about_team}>
        <div className='container'>
          <ArticleSection
            title={translations('our_team')?.title || ''}
            subtitle={translations('our_team')?.subtitle || ''}
            items={[translations('our_team')?.description || '']}
            variant='paragraphs'
          />
        </div>
      </section>

      {/* <AboutTeam /> */}

      <section className={s.about_objectives}>
        <div className='container'>
          <ArticleSection
            title={translations('our_objectives')?.title || ''}
            subtitle={translations('our_objectives')?.subtitle || ''}
            items={[translations('our_objectives')?.description || '']}
            variant='list-count'
          />
        </div>
      </section>

      <Volunteer />
    </>
  );
};

export default AboutPage;
