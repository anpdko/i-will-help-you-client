import { useEffect } from 'react';
import { ProjectHeader, WrapperAccordion } from '../../components';
import { useSelector } from 'react-redux';
import { getProjects } from '../../store/projects/projectsSlice';
import { RootState, useAppDispatch } from '../../store/store';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
  const dispatch = useAppDispatch(); // такий запис буде лаконичніше, не треба буде робити 2 імпорти. Замість useDispatch() імпортуємо useAppDispatch() типи підтягнуться самі :)
  const { projects, loading, message } = useSelector(
    (state: RootState) => state.projects,
  );
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    console.log(projects, i18n.language);
  }, [projects]);

  return (
    <>
      <ProjectHeader projects={projects} loading={loading} message={message} />
      <WrapperAccordion variant='paragraph' content={[]} />
    </>
  );
};
export default ProjectsPage;
