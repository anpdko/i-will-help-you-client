import RoutesApp from './routes/RoutesApp';
import RoutesAdmin from './routes/RoutesAdmin';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path='/*' element={<RoutesApp />} />
        <Route path='/admin/*' element={<RoutesAdmin />} />
      </Routes>
    </>
  );
}

export default App;
