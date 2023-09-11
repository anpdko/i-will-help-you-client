import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ProjectsPage,
  AboutPage,
  NeedHelpPage,
  ReadyHelpPage,
  DonatePage,
  NotFoundPage,
  Completion,
} from '../pages';
import { Navbar, Footer } from '../components';
import { Payment } from '../components';

const RoutesApp = () => {
  return (
    <>
      <Navbar />
      <main className='app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/needhelp' element={<NeedHelpPage />} />
          <Route path='/readyneed' element={<ReadyHelpPage />} />
          <Route path='/donate' element={<DonatePage />} />
          <Route path='/test' element={<Payment />} />
          <Route path='/completion' element={<Completion />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
export default RoutesApp;
