import { Link } from 'react-router-dom';

import { IProject } from '../../../store/projects/projectsType';
import { LazyImage } from '@/components';

import s from './Project.module.scss';
import sprite from '../../../assets/sprite.svg';

interface ProjectProps {
  project: IProject;
}

const API_URL = import.meta.env.VITE_API_URL;

const Project = ({ project }: ProjectProps) => {
  const IMAGE_PREFIX = '/static/images/projects/';
  const imageUrl = API_URL + IMAGE_PREFIX + project.imgCover;
  const translation = project.translations[0];

  //! З бази данних description приходить більшого розміру ніж по макету!!!!!!
  const truncateText = (text: string, sentencesToSkip: number) => {
    // Розділити текст на речення за допомогою регулярного виразу
    const sentences = text.split(/(?<=[.!?])\s+/);

    // Перевірити, чи є досить речень для обрізки
    if (sentences.length <= sentencesToSkip) {
      return text;
    }

    // Вибрати речення, починаючи з позиції `sentencesToSkip` і до кінця
    const truncatedText = sentences.slice(sentencesToSkip).join(' ');

    return truncatedText;
  };

  const sentencesToSkip = 2; // кількість речень, які потрібно пропустити

  // Перевірити, чи є більше 2 речень перед викликом truncateText
  const truncatedDescription =
    translation.description.split(/(?<=[.!?])\s+/).length <= sentencesToSkip
      ? translation.description
      : truncateText(translation.description, sentencesToSkip);

  return (
    <article className={s.project}>
      <div className={s.content}>
        <h2 className={`${s.content__title} heading2`}>{translation.title}</h2>
        <p className={`${s.content__description} text`}>
          {truncatedDescription}
        </p>

        <Link
          className={s.content__btn}
          to={`/projects/${project.url}`}
          aria-label='link to progect'
        >
          <svg>
            <use href={sprite + '#arrow-up-right'} />
          </svg>
        </Link>
      </div>

      <div className={s.image}>
        <LazyImage src={imageUrl} alt={translation.title} />
      </div>
    </article>
  );
};

export default Project;
