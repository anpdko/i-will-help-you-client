import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProjects,
  removeProject,
} from '../../../store/projects/projectsSlice';
import { AppDispatch, RootState } from '../../../store/store';

import { PiPencilSimpleLineFill } from 'react-icons/pi';
import { BsFillTrashFill } from 'react-icons/bs';
import s from './ProjectsAdminPage.module.scss';

const API_URL = import.meta.env.VITE_API_URL;

const TableProjectsAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading, message } = useSelector(
    (state: RootState) => state.projects,
  );

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const handleDeleteProject = (projectId: string) => {
    dispatch(removeProject(projectId));
  };

  //   const handleUpdateProject = (projectId: string, updatedData: any) => {
  //     dispatch(changeProject({ projectId, updatedData }));
  //   };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : message ? (
        <p>{message}</p>
      ) : (
        <table className='admin_table'>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>Slogan</th>
              <th>Published Date</th>
              <th>Updated Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td>
                  <img
                    src={
                      API_URL + '/static/images/projects/' + project.imgCover
                    }
                    alt='photo'
                  />
                </td>
                <td>{project.translations[0]?.title}</td>
                <td>{project.translations[0]?.slogan}</td>
                <td>{new Date(project.published_date).toLocaleDateString()}</td>
                <td>
                  <button
                    className='update_btn'
                    // onClick={() =>
                    //   handleUpdateProject(project._id, updatedData)
                    // }
                  >
                    <PiPencilSimpleLineFill className={s.icon} />
                  </button>
                  <button
                    className='delete_btn'
                    onClick={() => handleDeleteProject(project._id)}
                  >
                    <BsFillTrashFill className={s.icon} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableProjectsAdmin;
