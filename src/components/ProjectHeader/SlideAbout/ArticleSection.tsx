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

  return (
    <div className={s.about}>
      <ArticleSection
        title={t(`About the ${project.translations[0].title}`)}
        subtitle={t('Project’s description')}
        items={project.translations[0].description?.split('\n') || []}
        variant='paragraphs'
      />
      <ArticleSection
        title={'Key Objectives'}
        subtitle={'Our main goals'}
        items={project.translations[0].goals || []}
        variant='list'
      />
      <ArticleSection
        title={'Selection Criteria for Participation'}
        subtitle={'Selection criteria'}
        items={project.translations[0].criteria || []}
        variant='list'
      />
      <ButtonApp type='link' to='/donate' color='white' size='medium'>
        {t(`Join the OpportunityConnect`)}
      </ButtonApp>
    </div>
  );
};

export default SlideAbout;
