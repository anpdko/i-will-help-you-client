import { useEffect, useMemo } from 'react';
import { ProjectHeader, WrapperAccordion } from '../../components';
import { useSelector } from 'react-redux';
import { getProjects } from '../../store/projects/projectsSlice';
import { RootState, useAppDispatch } from '../../store/store';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const { projects, loading, message } = useSelector(
    (state: RootState) => state.projects,
  );
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.map((project) => ({
      ...project,
      translations: [
        project.translations.find(
          (translation) => translation.language === i18n.language,
        ) || project.translations[0],
      ],
    }));
  }, [projects, i18n.language]);

  return (
    <>
      <ProjectHeader
        projects={filteredProjects}
        loading={loading}
        message={message}
      />
      <WrapperAccordion
        projects={filteredProjects}
        loading={loading}
        message={message}
      />
    </>
  );
};
export default ProjectsPage;
