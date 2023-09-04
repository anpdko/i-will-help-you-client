import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectHeader } from '../../components';
import { useSelector } from 'react-redux';
import { getProjects } from '../../store/projects/projectsSlice';
import { RootState, useAppDispatch } from '../../store/store';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { i18n } = useTranslation();

  const { projects, loading, message } = useSelector(
    (state: RootState) => state.projects,
  );

  const currentProject = projects.find((project) => project._id === id);
  const currentId = currentProject ? id : projects[0]?._id;

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    if (!id) {
      const firstSlideId = projects[0]?._id;
      if (firstSlideId) {
        navigate(`/projects/${firstSlideId}`);
      }
    }
  }, [id, projects, navigate]);

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
        selectedId={currentId}
      />
    </>
  );
};
export default ProjectsPage;
