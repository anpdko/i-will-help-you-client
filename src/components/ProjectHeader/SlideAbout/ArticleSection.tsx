import React from 'react';
import ArticleSection from './ArticleSection/ProjectHeaderArticle';
import { useTranslation } from 'react-i18next';

import { IProject } from '../../../store/projects/projectsType';

import { ButtonApp } from '../../UI';

import s from './ArticleSection.module.scss';

interface ISlideAboutProps {
  project: IProject;
}
const SlideAbout: React.FC<ISlideAboutProps> = ({ project }) => {
  const { t } = useTranslation();
  
  const { title, description, goals, criteria } = project.translations[0];

  return (
    <div className={s.about}>
      <ArticleSection
        title={t(`About the ${title}`)}
        subtitle={t('Project’s description')}
        items={description.split('\n') || []}
        variant='paragraphs'
      />
      <ArticleSection
        title={'Key Objectives'}
        subtitle={'Our main goals'}
        items={goals || []}
        variant='list'
      />
      <ArticleSection
        title={'Selection Criteria for Participation'}
        subtitle={'Selection criteria'}
        items={criteria || []}
        variant='list'
      />
      <ButtonApp type='link' to='/donate' color='white' size='medium'>
        {t(`Join the OpportunityConnect`)}
      </ButtonApp>
    </div>
  );
};

export default SlideAbout;
