import { Link } from 'react-router-dom';
import { IProjectsData } from '../../../data/projectsData';
import s from './Project.module.scss';
import {subText} from '../../../services/text.services'

import sprite from '../../../assets/sprite.svg';

interface ProjectProps {
	project: IProjectsData;
}
const API_URL = import.meta.env.VITE_API_URL;
const Project = ({ project }: ProjectProps) => {
	return (
		<article className={s.project}>
			<div className={s.project__content}>
				<div>
					<h2 className={`${s.project__title} heading2`}>{project.title}</h2>
					<p className={s.project__description}>{subText(project.description, 800)}</p>
				</div>
				<div>
					<Link className={s.project__btn} to={project.link}>
						<svg className={s.project__icon}>
							<use href={sprite + '#arrow-up-right'} />
						</svg>
					</Link>
				</div>
			</div>

			<div className={s.project__img}>
				<img src={API_URL + project.img} alt="project image" />
			</div>
		</article>
	);
};

export default Project;
