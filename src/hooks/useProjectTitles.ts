import { useState, useEffect } from 'react';
import { getProjectTitles } from '@/api/getProjectTitles';

interface ProjectTitleTranslation {
  language: string;
  title: string;
}

interface ProjectTitle {
  _id: string;
  translations: ProjectTitleTranslation[];
}

interface ProjectTitles {
  title: string | undefined;
  id: string;
}

export const useProjectTitles = (language: string) => {
  const [projectTitles, setProjectTitles] = useState<ProjectTitles[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ProjectTitle[] = await getProjectTitles();

        const filteredData = data
          .filter((item) =>
            item.translations.some(
              (translation: ProjectTitleTranslation) =>
                translation.language === language,
            ),
          )
          .map((item) => ({
            title: item.translations.find(
              (translation: ProjectTitleTranslation) =>
                translation.language === language,
            )?.title,
            id: item._id,
          }));

        setProjectTitles(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setProjectTitles([]);
      }
    };

    fetchData();
  }, [language]);

  return projectTitles;
};
