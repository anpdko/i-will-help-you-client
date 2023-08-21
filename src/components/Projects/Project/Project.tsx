import { Link } from 'react-router-dom';
import { IProjectsData } from '../../../data/projectsData';
import s from './Project.module.scss';

interface ProjectProps {
	project: IProjectsData;
}

const Project = ({ project }: ProjectProps) => {
	return (
		<div className={s.project}>
			<div className={s.project__content}>
				<h2 className={`${s.project__title} heading2`}>{project.title}</h2>
				<p className={s.project__description}>{project.description}</p>
				<Link className={s.project__link} to={project.link}></Link>
			</div>

			<div className={s.project__img}>
				<img src={project.img} alt="project image" />
			</div>
		</div>
	);
};

export default Project;
