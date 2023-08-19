import {useState} from 'react'
import s from './Translation.module.scss'
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../translation/i18n'

type ILang = "en" | "ua"

interface ITranslation {
    className?: string
}

const languages:ILang[] = ["en", "ua"]

const Translation = ({ className }: ITranslation) => {
    const [language, setLanguage] = useLocalStorage('language', 'en');
    const [isButtonFocused, setIsButtonFocused] = useState(false);

    const handleLanguageChange = (lang:ILang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };

    const handleButtonFocus = () => {
        setIsButtonFocused(true);
      };
    const handleButtonBlur = () => {
        setTimeout(() => setIsButtonFocused(false), 100)
    };

    return (
        <div className={s.translation}>
            <button 
                onFocus={handleButtonFocus}
                onBlur={handleButtonBlur}
                className={[s.btn, className].join(" ")}
            >
                {language === 'ua' ? 'EN' : 'UA'}
            </button>
            <ul className={[s.list, isButtonFocused?s.visible:""].join(" ")}>
                {languages.map((lang) => 
                    <li key={lang} onClick={() => handleLanguageChange(lang)}>{lang}</li>
                )}
            </ul>
        </div>
    );
};
export default Translation