import { ProjectHeader, WrapperAccordion } from '../../components';

import s from './ProjectsPage.module.scss';

const ProjectsPage = () => {
  return (
    <main className={s.projects}>
      <ProjectHeader />
      <WrapperAccordion variant="paragraph" content ={[]}/>
    </main>
  );
};
export default ProjectsPage;
