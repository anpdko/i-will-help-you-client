import RoutesApp from './routes/RoutesApp';
import RoutesAdmin from './routes/RoutesAdmin';
import { Routes, Route } from 'react-router-dom';

function App() {
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
