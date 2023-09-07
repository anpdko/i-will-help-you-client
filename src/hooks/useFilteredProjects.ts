import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '../store/store';

const useFilteredProjects = () => {
  const { i18n } = useTranslation();
  const { projects } = useSelector((state: RootState) => state.projects);

  const filteredProjects = useMemo(() => {
    return projects.map((project) => ({
      ...project,
      translations: [
        project.translations.find(
          (translation) => translation.language === i18n.language,
        ) || project.translations[0],
      ],
    }));
  }, [projects, i18n.language]);

  return filteredProjects;
};

export default useFilteredProjects;
