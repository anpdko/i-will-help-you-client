import { NavbarControlAdmin } from '../../../components/admin';
import TableProjectsAdmin from './TableProjectsAdmin';
import s from './ProjectsAdminPage.module.scss';

const ProjectsAdminPage = () => {
  return (
    <div className={s.projects_admin_page}>
      <NavbarControlAdmin createLink='/admin/panel/project/create' />
      <TableProjectsAdmin />
    </div>
  );
};
export default ProjectsAdminPage;
