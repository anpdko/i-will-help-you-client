import { Link } from 'react-router-dom';
import { IProjectsData } from '../../../data/projectsData';
import s from './Project.module.scss';

interface ProjectProps {
	project: IProjectsData;
}

const Project = ({ project }: ProjectProps) => {
	return (
		<div className={s.project}>
			<h2>{project.title}</h2>
			<p>{project.description}</p>
			<Link to={project.link}></Link>

			<img src={project.img} alt="project image" />
		</div>
	);
};

export default Project;
