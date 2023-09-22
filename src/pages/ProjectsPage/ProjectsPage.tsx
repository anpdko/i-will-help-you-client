import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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



  const currentProject = filteredProjects.find((project) => project.url === id);
  const currentUrl = currentProject ? id : filteredProjects[0]?.url;

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    if (!id) {
      const firstSlideUrl = filteredProjects[0]?.url;
      if (firstSlideUrl) {
        navigate(`/projects/${firstSlideUrl}`);
      }
    }
  }, [id, filteredProjects, navigate]);

  return (
    <ProjectHeader
      projects={filteredProjects}
      loading={loading}
      message={message}
      selectedUrl={currentUrl}
    />
  );
};
export default ProjectsPage;
