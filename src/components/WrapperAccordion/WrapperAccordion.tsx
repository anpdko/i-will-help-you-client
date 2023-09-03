import React from 'react';
import { useTranslation } from 'react-i18next';

import { IProjectsState } from '../../store/projects/projectsType';

import ArticleSection from './WrapperAccordionArticle/WrapperAccordionArticle';
import Preloader from '../UI/Preloader/Preloader';
import ButtonApp from '../UI/ButtonApp/ButtonApp';

import s from './WrapperAccordion.module.scss';

const WrapperAccordion: React.FC<IProjectsState> = ({ projects, loading }) => {
  const { t } = useTranslation();

  const selectedProject = projects[0]?.translations[0];

  const title = selectedProject?.title;
  const description = selectedProject?.description;
  const criteria = selectedProject?.criteria;
  const goals = selectedProject?.goals;
  console.log('WrapperAccordion',projects);
  return (
    <section className={s.wrapper}>
      <div className='container'>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <ArticleSection
              title={t(`About the ${title}`)}
              subtitle={t('Project’s description')}
              items={description?.split('\n') || []}
              variant='paragraphs'
            />
            <ArticleSection
              title={t('Key Objectives')}
              subtitle={t('Our main goals')}
              items={goals || []}
              variant='list'
            />
            <ArticleSection
              title={t('Selection Criteria for Participation')}
              subtitle={t('Selection criteria')}
              items={criteria || []}
              variant='list'
            />
          </>
        )}
        <ButtonApp color='white' size='medium'>
          {t('Join the OpportunityConnect')}
        </ButtonApp>
      </div>
    </section>
  );
};

export default WrapperAccordion;
