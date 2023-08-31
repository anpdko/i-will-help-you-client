import s from './NavbarAdmin.module.scss';
import { AppDispatch } from '../../../store/store';
import { adminLogout } from '../../../store/admin/adminSlice';
import { useDispatch } from 'react-redux';

//   /panel/reviews
//   /panel/projects

const NavbarAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={s.navbar_admin}>
      <h1>NavbarAdmin</h1>
      <ul>
        <li onClick = {() => dispatch(adminLogout())}>
          Exit
        </li>
      </ul>
    </div>
  );
};
export default NavbarAdmin;
