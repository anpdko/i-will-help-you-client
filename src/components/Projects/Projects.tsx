import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Project from './Project/Project';
import s from './Projects.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/projects/projectsSlice';
import { RootState, AppDispatch } from '../../store/store';

const Projects = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projects } = useSelector((state: RootState) => state.projects);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <section className={s.projects}>
      <div className='container'>
        <h1 className='heading1'>{t('Empowering Change through Projects')}</h1>
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
