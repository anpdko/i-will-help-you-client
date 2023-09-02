import { NavbarControlAdmin } from '../../../components/admin';
import s from './ProjectsAdminPage.module.scss';

const ProjectsAdminPage = () => {
  return (
    <div className={s.projects_admin_page}>
      <NavbarControlAdmin createLink = "/admin/panel/project/create"/>
      <h1>ProjectsAdminPage</h1>
    </div>
  );
};
export default ProjectsAdminPage;
