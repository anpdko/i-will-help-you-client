import { useTranslation } from 'react-i18next';
import formHeaderData, { ITranslation } from '../data/formHeaderData';

export const useFormHeaderData = (
  id: string,
): {
  title: string;
  description: string;
  imagePath: string;
} | null => {
  const { i18n } = useTranslation();

  const activeLanguage = i18n.language as 'en' | 'ua';

  const headerData = formHeaderData.find((data) => data.id === id);

  if (!headerData) {
    return null;
  }

  const translation = headerData.translations.find(
    (t: ITranslation) => t.language === activeLanguage,
  );

  if (!translation) {
    const fallbackTranslation = headerData.translations.find(
      (t: ITranslation) => t.language === 'en',
    );

    if (!fallbackTranslation) {
      return null;
    }

    return {
      title: fallbackTranslation.title,
      description: fallbackTranslation.description,
      imagePath: headerData.imagePath,
    };
  }

  return {
    title: translation.title,
    description: translation.description,
    imagePath: headerData.imagePath,
  };
};
