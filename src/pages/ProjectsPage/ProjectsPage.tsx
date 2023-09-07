import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ProjectHeader } from '../../components';

import useFilteredProjects from '../../hooks/useFilteredProjects';

import { getProjects } from '../../store/projects/projectsSlice';
import { RootState, useAppDispatch } from '../../store/store';

const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { loading, message } = useSelector(
    (state: RootState) => state.projects,
  );
  const filteredProjects = useFilteredProjects();

  const currentProject = filteredProjects.find((project) => project._id === id);
  const currentId = currentProject ? id : filteredProjects[0]?._id;

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    if (!id) {
      const firstSlideId = filteredProjects[0]?._id;
      if (firstSlideId) {
        navigate(`/projects/${firstSlideId}`);
      }
    }
  }, [id, filteredProjects, navigate]);

  return (
    <ProjectHeader
      projects={filteredProjects}
      loading={loading}
      message={message}
      selectedId={currentId}
    />
  );
};
export default ProjectsPage;
