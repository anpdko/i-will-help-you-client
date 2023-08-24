import { useTranslation } from 'react-i18next';

import projectsData from '../../data/projectsData';

import Project from './Project/Project';

import s from './Projects.module.scss';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className={s.projects}>
      <div className='container'>
        <h1 className='heading1'>{t('Empowering Change through Projects')}</h1>
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
