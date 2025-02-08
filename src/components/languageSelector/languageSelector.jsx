import { useTranslation } from 'react-i18next';
import style from './languageSelector.module.css';

const languages = [
    { code: 'eng', name: 'English' },
    { code: 'cmh', name: '简体中文' },
    { code: 'hin', name: 'हिन्दी' },
    { code: 'spa', name: 'Español' },
    { code: 'ara', name: 'العربية' },
    { code: 'fra', name: 'Français'},
    { code: 'ben', name: 'বাংলা' },
    { code: 'por', name: 'Português'},
    { code: 'rus', name: 'Русский' },
    { code: 'urd', name: 'اردو' },
    { code:  'ind', name: 'Indonesia' },
    { code: 'deu', name: 'Deutsch' },
    { code: 'jpn', name: '日本語' },
    { code: 'mar', name: 'मराठी' },
    { code: 'tel', name: 'తెలుగు' },
    { code: 'ita', name: 'Italiano' },
    { code: 'jav', name: 'Basa Jawa' },
    { code: 'kor', name: '한국어' },
    { code: 'tur', name: 'Türkçe' },
    { code: 'hau', name: 'Hausa' },
    { code: 'tam', name: 'தமிழ்' },
    { code: 'swa', name: 'Kiswahili' },
    { code: 'vie', name: 'Tiếng Việt' },
    { code: 'pes', name: 'فارسی' },
    { code: 'tha', name: 'ไทย' },
    { code: 'amh', name: 'አማርኛ' },
    { code: 'mya', name: 'မြန်မာ' },
    { code: 'pus', name: 'پښتو' },
    { code: 'pol', name: 'Polski' },
    { code: 'nld', name: 'Nederlands' },
    { code: 'ell', name: 'Ελληνικά' },
    { code: 'ces', name: 'Czech' },
];

const LanguageSelector = ({ onLanguageChange }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        // Notify the parent component about the language change
        const selectedLanguage = languages.find(lang => lang.code === code)?.name || 'English';
        onLanguageChange(selectedLanguage);
    };

    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>{t("languageSelector")}</h2>
            <div className={style.container}>
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={lang.code === i18n.language ? style.active : style.default}
                    >
                        {lang.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;