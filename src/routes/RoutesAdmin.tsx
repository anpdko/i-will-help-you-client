import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  AuthAdminPage,
  ReviewsAdminPage,
  ReviewsCreateAdminPage,
  ReviewsEditAdminPage,
  ProjectsAdminPage,
  ProjectsCreateAdminPage,
  ProjectsEditAdminPage,
} from '../pages/admin';
import { NavbarAdmin } from '../components/admin';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { isRegistered } from '../store/admin/adminSlice';

const RoutesAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.admin.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(isRegistered());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <main className='admin_container'>
      {isLoggedIn && <NavbarAdmin />}
      {isLoggedIn ? (
        <Routes>
          <Route path='/panel/reviews' element={<ReviewsAdminPage />} />
          <Route
            path='/panel/review/create'
            element={<ReviewsCreateAdminPage />}
          />
          <Route
            path='/panel/review/edit/:id'
            element={<ReviewsEditAdminPage />}
          />

          <Route path='/panel/projects' element={<ProjectsAdminPage />} />
          <Route
            path='/panel/project/create'
            element={<ProjectsCreateAdminPage />}
          />
          <Route
            path='/panel/project/edit/:id'
            element={<ProjectsEditAdminPage />}
          />
          <Route path='*' element={<Navigate to={'/admin/panel/projects'} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/auth' element={<AuthAdminPage />} />
          <Route path='*' element={<Navigate to={'/admin/auth'} />} />
        </Routes>
      )}
    </main>
  );
};
export default RoutesAdmin;
