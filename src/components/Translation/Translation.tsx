import { useState } from 'react';
import s from './Translation.module.scss';
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../translation/i18n';
import sprite from '../../assets/sprite.svg';

type ILang = string;

interface ITranslation {
  className?: string;
  long?: boolean;
}
interface ILanguageNames {
  [lang: string]: {
    short: string;
    long: string;
  };
}
const languageNames: ILanguageNames = {
  en: {
    short: 'en',
    long: 'English',
  },
  ua: {
    short: 'ua',
    long: 'Ukrainian',
  },
};

const Translation = ({ className, long }: ITranslation) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [isButtonFocused, setIsButtonFocused] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setIsButtonFocused(false);
  };

  const handleListLanguage = () => {
    setIsButtonFocused((isButtonFocused) => !isButtonFocused);
  };

  const handleButtonBlur = () => {
    setTimeout(() => setIsButtonFocused(false), 300);
  };

  const getLanguageLabel = (lang: ILang) => {
    const langName = languageNames[lang];
    return langName ? (long ? langName.long : langName.short) : lang;
  };

  return (
    <div className={s.translation}>
      <button
        onClick={handleListLanguage}
        onBlur={handleButtonBlur}
        className={[s.translation__btn, className].join(' ')}
      >
        {long && (
          <svg className={[s.icon, className].join(' ')}>
            <use href={sprite + '#globe'} />
          </svg>
        )}
        <span>
          {getLanguageLabel(language)}
          <svg className={[s.translation__btn_icon, className].join(' ')}>
            <use href={sprite + '#arrow-ctrl-down'} />
          </svg>
        </span>
      </button>
      <ul className={[s.list, isButtonFocused ? s.visible : ''].join(' ')}>
        {Object.keys(languageNames).map((lang) => (
          <li key={lang}>
            <button
              className={[s.list__btn, language === lang ? s.active : ''].join(
                ' ',
              )}
              onClick={() => handleLanguageChange(lang as ILang)}
            >
              {getLanguageLabel(lang as ILang)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Translation;
