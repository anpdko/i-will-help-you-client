import s from './Navbar.module.scss'
import { Translation } from '../../components'

// use <div class='container'></div>
const Navbar = () => {
   return (
      <nav className={s.nav}>
         <h1>Navbar</h1>
         <Translation/>
      </nav>
   );
};
export default Navbar