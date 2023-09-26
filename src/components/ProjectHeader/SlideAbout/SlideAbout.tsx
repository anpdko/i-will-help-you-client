import React from 'react';
import ArticleSection from '../../UI/ArticleSection/ArticleSection';
import { useTranslation } from 'react-i18next';

import { IProject } from '../../../store/projects/projectsType';

import { AccordionList } from '../../UI';

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

      <article className={s.content}>
        <div className={s.header}>
          <h2 className={`${s.title} heading2`}>{t('Key Objectives')}</h2>
          <h3 className={s.subtitle}>{t('Our main goals')}</h3>
        </div>
        <div className={s.body}>
          <AccordionList selectedTranslation={goals || []} />
        </div>
      </article>

      <article className={s.content}>
        <div className={s.header}>
          <h2 className={`${s.title} heading2`}>
            {t('Selection Criteria for Participation')}
          </h2>
          <h3 className={s.subtitle}>{t('Selection criteria')}</h3>
        </div>
        <div className={s.body}>
          <AccordionList selectedTranslation={criteria || []} />
        </div>
      </article>
    </div>
  );
};

export default SlideAbout;
