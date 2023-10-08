import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '@/store/store';
import { isRegistered } from '@/store/admin/adminSlice';

import { NavbarAdmin } from '@/components/admin';
import { Preloader } from '@/components/UI';

const AuthAdminPage = React.lazy(
  () => import('@/pages/admin/AuthAdminPage/AuthAdminPage'),
);
const ReviewsAdminPage = React.lazy(
  () => import('@/pages/admin/ReviewsAdminPage/ReviewsAdminPage'),
);
const ReviewsCreateAdminPage = React.lazy(
  () => import('@/pages/admin/ReviewsCreateAdminPage/ReviewsCreateAdminPage'),
);
const ReviewsEditAdminPage = React.lazy(
  () => import('@/pages/admin/ReviewsEditAdminPage/ReviewsEditAdminPage'),
);
const ProjectsAdminPage = React.lazy(
  () => import('@/pages/admin/ProjectsAdminPage/ProjectsAdminPage'),
);
const ProjectsCreateAdminPage = React.lazy(
  () => import('@/pages/admin/ProjectsCreateAdminPage/ProjectsCreateAdminPage'),
);
const ProjectsEditAdminPage = React.lazy(
  () => import('@/pages/admin/ProjectsEditAdminPage/ProjectsEditAdminPage'),
);

const SheetsAdminPage = React.lazy(
  () => import('@/pages/admin/SheetsAdminPage/SheetsAdminPage'),
);

const RoutesAdmin = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.admin);

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
          <Route
            path='/panel/reviews'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <ReviewsAdminPage />
              </Suspense>
            }
          />
          <Route
            path='/panel/review/create'
            element={
              <Suspense fallback={<Preloader />}>
                <ReviewsCreateAdminPage />
              </Suspense>
            }
          />
          <Route
            path='/panel/review/edit/:id'
            element={
              <Suspense fallback={<Preloader />}>
                <ReviewsEditAdminPage />
              </Suspense>
            }
          />

          <Route
            path='/panel/projects'
            element={
              <Suspense fallback={<Preloader />}>
                <ProjectsAdminPage />
              </Suspense>
            }
          />
          <Route
            path='/panel/project/create'
            element={
              <Suspense fallback={<Preloader />}>
                <ProjectsCreateAdminPage />
              </Suspense>
            }
          />
          <Route
            path='/panel/project/edit/:id'
            element={
              <Suspense fallback={<Preloader />}>
                <ProjectsEditAdminPage />
              </Suspense>
            }
          />
          <Route
            path='/panel/sheets'
            element={
              <Suspense fallback={<Preloader />}>
                <SheetsAdminPage />
              </Suspense>
            }
          />
          <Route path='*' element={<Navigate to={'/admin/panel/projects'} />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path='/auth'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <AuthAdminPage />
              </Suspense>
            }
          />
          <Route path='*' element={<Navigate to={'/admin/auth'} />} />
        </Routes>
      )}
    </main>
  );
};
export default RoutesAdmin;
