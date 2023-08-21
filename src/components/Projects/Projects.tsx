import projectsData from '../../data/projectsData';
import Project from './Project/Project';
import s from './Projects.module.scss';

// const data = [
// temporary array of data for layout
// ]

const Projects = () => {
	return (
		<div className="container">
			<div className={s.projects}>
				{projectsData.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};
export default Projects;
