import projectsData from '../../data/projectsData';
import Project from './Project/Project';
import s from './Projects.module.scss';

const Projects = () => {
	return (
		<div className={s.projects}>
			{projectsData.map((project) => (
				<Project key={project.id} project={project} />
			))}
		</div>
	);
};
export default Projects;
