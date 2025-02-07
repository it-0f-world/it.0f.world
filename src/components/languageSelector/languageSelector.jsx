import { useTranslation } from 'react-i18next';
import style from './languageSelector.module.css';

const languages = [
    { code: 'eng', name: 'English' },
    { code: 'rus', name: 'Русский' },
    { code: 'ara', name: 'العربية' }
];

const LanguageSelector = ({ onLanguageChange }) => {
    const { i18n } = useTranslation();

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        // Notify the parent component about the language change
        const selectedLanguage = languages.find(lang => lang.code === code)?.name || 'English';
        onLanguageChange(selectedLanguage);
    };

    return (
        <div className={style.container}>
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={lang.code === i18n.language ? style.active : ''}
                >
                    {lang.name}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;