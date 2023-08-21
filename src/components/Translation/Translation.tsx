import { useState } from 'react';
import s from './Translation.module.scss';
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../translation/i18n';
import icons from '../../assets/icons.svg';

type ILang = 'en' | 'ua';

interface ITranslation {
	className?: string;
}

const languages: ILang[] = ['en', 'ua'];

const Translation = ({ className }: ITranslation) => {
	const [language, setLanguage] = useLocalStorage('language', 'en');
	const [isButtonFocused, setIsButtonFocused] = useState(false);

	const handleLanguageChange = (lang: ILang) => {
		i18n.changeLanguage(lang);
		setLanguage(lang);
		setIsButtonFocused(false);
	};

	const handleListLanguage = () => {
		setIsButtonFocused((isButtonFocused) => !isButtonFocused)
	};
	const handleButtonBlur = () => {
		setTimeout(() => setIsButtonFocused(false), 300)
	};

	return (
		<div className={s.translation}>
			<button
				onClick={handleListLanguage}
				onBlur={handleButtonBlur}
				className={[s.translation__btn, className].join(' ')}
			>
				{language === 'ua' ? 'ua' : 'en'}
				<svg className={[s.translation__btn_icon, className].join(' ')}>
					<use href={icons + '#ios-arrow'} />
				</svg>
			</button>
			<ul className={[s.list, isButtonFocused ? s.visible : ''].join(' ')}>
				{languages.map((lang) => (
					<li key={lang}>
						<button
							className={[s.list__btn, language === lang ? s.active : ''].join(' ')}
							onClick={() => handleLanguageChange(lang)}
						>
							{lang}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Translation;
