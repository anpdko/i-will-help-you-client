import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Project from './Project/Project';
import Preloader from '../UI/Preloader/Preloader';

import useFilteredProjects from '../../hooks/useFilteredProjects';

import { getProjects } from '../../store/projects/projectsSlice';
import { RootState, useAppDispatch } from '../../store/store';

import s from './Projects.module.scss';


const Projects = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { loading } = useSelector(
    (state: RootState) => state.projects,
  );

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const filteredProjects = useFilteredProjects();

  return (
    <section className={s.projects}>
      <div className='container'>
        <h1 className='heading1'>{t('Empowering Change through Projects')}</h1>
        {loading ? (
          <Preloader />
        ) : (
          filteredProjects?.map((project) => (
            <Project key={project._id} project={project} />
          ))
        )}
      </div>
    </section>
  );
};
export default Projects;
