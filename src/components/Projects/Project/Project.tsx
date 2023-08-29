import { Link } from 'react-router-dom';
import { subText } from '../../../services/text.services';
import sprite from '../../../assets/sprite.svg';
import s from './Project.module.scss';
import { useTranslation } from 'react-i18next';
import { IProject } from '../../../store/projects/projectsType';

interface ProjectProps {
  project: IProject;
}

const API_URL = import.meta.env.VITE_API_URL;

const Project = ({ project }: ProjectProps) => {
  const { i18n } = useTranslation();

  const transProject = () => {
    return project.translations.find((item) => i18n.language === item.language);
  };

  return (
    <article className={s.project}>
      <div className={s.project__content}>
        <div>
          <h2 className={`${s.project__title} heading2`}>
            {transProject()?.title}
          </h2>
          <p className={`${s.project__description} text`}>
            {subText(String(transProject()?.description), 800)}
          </p>
        </div>
        <div>
          <Link className={s.project__btn} to={'/'}>
            <svg className={s.project__icon}>
              <use href={sprite + '#arrow-up-right'} />
            </svg>
          </Link>
        </div>
      </div>

      <div className={s.project__img}>
        <img
          src={API_URL + '/static/images/projects/' + project.imgCover}
          alt='project image'
        />
      </div>
    </article>
  );
};

export default Project;
