import React from 'react';
import style from './languageSelector.module.css';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };

    return (
        <div className={style.container}>
            {languages.map((lang) => {
                return (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={lang.code === i18n.language ? style.active : ''}
                    >
                        {lang.name}
                    </button>
                );
            })}
        </div>
    );
};

export default LanguageSelector;