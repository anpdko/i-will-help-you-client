import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ProjectsPage,
  AboutPage,
  NeedHelpPage,
  ReadyHelpPage,
} from '../pages';
import { Navbar, Footer } from '../components';

const RoutesApp = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/needhelp' element={<NeedHelpPage />} />
          <Route path='/readyneed' element={<ReadyHelpPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
export default RoutesApp;
