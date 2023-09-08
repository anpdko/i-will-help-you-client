import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { FormHeader, ProjectsFund } from '../../components';

import useFilteredProjects from '../../hooks/useFilteredProjects';

import { Preloader } from '../../components/UI/';

import { getProjects } from '../../store/projects/projectsSlice';
import { RootState, useAppDispatch } from '../../store/store';

import s from './DonatePage.module.scss';

const DonatePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const { loading } = useSelector((state: RootState) => state.projects);

  const filteredProjects = useFilteredProjects();

  return (
    <section className={s.donate_page}>
      <div className='container'>
        <FormHeader />
        {loading ? <Preloader /> : <ProjectsFund projects={filteredProjects} />}
      </div>
    </section>
  );
};
export default DonatePage;
