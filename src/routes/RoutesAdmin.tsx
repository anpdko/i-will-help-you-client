import { Routes, Route, Navigate } from 'react-router-dom'
import {AuthAdminPage, ReviewsAdminPage} from '../pages/admin'
import { NavbarAdmin } from '../components/admin';

const RoutesAdmin = () => {
   const isLoggedIn = false;

   return (
      <div className='admin_container'>
         {isLoggedIn && <NavbarAdmin/>}
         {isLoggedIn
            ? <Routes>
               <Route path='/panel/reviews' element={<ReviewsAdminPage />} />
               <Route path="*" element={<Navigate to={'/admin/panel/reviews'} />} />
            </Routes>
            : <Routes>
               <Route path='/auth' element={<AuthAdminPage />} />
               <Route path="*" element={<Navigate to={'/admin/auth'} />} />
            </Routes>
         }
      </div>
   );
};
export default RoutesAdmin