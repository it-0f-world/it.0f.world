import React from 'react';
import style from './languageSelector.module.css';

const FamilyList = ({ family, changeLanguage, currentLanguageCode }) => {
    return (
        <ul>
            <p className={style.family}>{family.family}</p>
            <div className={style.listItem}>
                {family.languages.map(lang => (
                    <li key={lang.code}>
                        <button
                            onClick={() => changeLanguage(lang.code)}
                            className={lang.code === currentLanguageCode ? style.active : style.default}
                        >
                            {lang.name}
                        </button>
                    </li>
                ))}
            </div>
        </ul>
    );
};

export default FamilyList;