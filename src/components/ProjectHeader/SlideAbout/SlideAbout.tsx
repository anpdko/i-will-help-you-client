import React from 'react';
import ArticleSection from './ArticleSection/ArticleSection';
import { useTranslation } from 'react-i18next';

import { IProject } from '../../../store/projects/projectsType';

import { ButtonApp } from '../../UI';

import s from './SlideAbout.module.scss';

interface ISlideAboutProps {
  project: IProject;
}
const SlideAbout: React.FC<ISlideAboutProps> = ({ project }) => {
  const { t } = useTranslation();

  const { title, description, goals, criteria } = project.translations[0];

  return (
    <div className={s.about}>
      <ArticleSection
        title={t('About the', { title: title })}
        subtitle={t('Project’s description')}
        items={description.split('\n') || []}
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
      <ButtonApp type='link' to='/donate' color='white' size='medium'>
        {t(`Join the OpportunityConnect`)}
      </ButtonApp>
    </div>
  );
};

export default SlideAbout;
