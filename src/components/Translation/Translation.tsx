import s from './Translation.module.scss'
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../translation/i18n'

interface ITranslation {
    className?:string
  }

const Translation = ({ className }:ITranslation) => {
   const [language, setLanguage] = useLocalStorage('language', 'en');

   const handleLenguageChange = () => {
      if (language === 'en') {
          i18n.changeLanguage('ua');
          setLanguage('ua');
      } else if (language === 'ua') {
          i18n.changeLanguage('en');
          setLanguage('en');
      }
  };

   return (
      <button onClick={handleLenguageChange} className={[s.translation, className].join(" ")}>
            {language === 'ua' ? 'EN' : 'UA'}
      </button>
   );
};
export default Translation