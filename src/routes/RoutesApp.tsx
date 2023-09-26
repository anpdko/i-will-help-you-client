import React, { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages';

const ProjectsPage = React.lazy(
  () => import('../pages/ProjectsPage/ProjectsPage'),
);
const AboutPage = React.lazy(() => import('../pages/AboutPage/AboutPage'));
const NeedHelpPage = React.lazy(
  () => import('../pages/NeedHelpPage/NeedHelpPage'),
);
const ReadyHelpPage = React.lazy(
  () => import('../pages/ReadyHelpPage/ReadyHelpPage'),
);
const DonatePage = React.lazy(() => import('../pages/DonatePage/DonatePage'));
const NotFoundPage = React.lazy(
  () => import('../pages/NotFoundPage/NotFoundPage'),
);
const Completion = React.lazy(() => import('../pages/Completion/Completion'));
const PublicityPage = React.lazy(
  () => import('../pages/PublicityPage/PublicityPage'),
);
const ConditionsPage = React.lazy(
  () => import('../pages/ConditionsPage/ConditionsPage'),
);
const PrivacyPage = React.lazy(
  () => import('../pages/PrivacyPage/PrivacyPage'),
);
const FAQPage = React.lazy(() => import('../pages/FAQPage/FAQPage'));

import { Navbar, Footer } from '../components';
import { Preloader } from '../components/UI';

const RoutesApp = () => {
  return (
    <>
      <Navbar />
      <main className='app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/projects'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path='/projects/:id'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path='/needhelp'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <NeedHelpPage />
              </Suspense>
            }
          />
          <Route
            path='/volunteer'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <ReadyHelpPage />
              </Suspense>
            }
          />
          <Route
            path='/donate'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <DonatePage />
              </Suspense>
            }
          />
          <Route
            path='/completion'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <Completion />
              </Suspense>
            }
          />
          <Route
            path='/publicity'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <PublicityPage />
              </Suspense>
            }
          />
          <Route
            path='/conditions'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <ConditionsPage />
              </Suspense>
            }
          />
          <Route
            path='/privacy'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <PrivacyPage />
              </Suspense>
            }
          />
          <Route
            path='/faq'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <FAQPage />
              </Suspense>
            }
          />
          <Route
            path='*'
            element={
              <Suspense fallback={<Preloader withContainer />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
export default RoutesApp;
