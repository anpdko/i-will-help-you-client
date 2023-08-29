import { useEffect } from 'react';
import { ProjectHeader, WrapperAccordion } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/projects/projectsSlice';
import { RootState, AppDispatch } from '../../store/store';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projects } = useSelector((state: RootState) => state.projects);
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    console.log(projects, i18n.language);
  }, [projects]);

  return (
    <>
      <ProjectHeader />
      <WrapperAccordion variant='paragraph' content={[]} />
    </>
  );
};
export default ProjectsPage;
