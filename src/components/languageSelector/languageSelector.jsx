import { useTranslation } from 'react-i18next';
import style from './languageSelector.module.css';
import { useState } from 'react';
import RegionAccordion from './accordion';
import { languages } from './languagesData';

const LanguageSelector = ({ onLanguageChange }) => {
    const { t, i18n } = useTranslation();
    const [activeRegionId, setActiveRegionId] = useState(null); // Track the active region

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        const selectedLanguage = languages.find(lang => lang.code === code)?.name || 'English';
        onLanguageChange(selectedLanguage);
    };

    const regions = [
        {
            id: 1,
            region: t("europe"),
            families: [
                { id: 1, family: t("germanic"), languages: languages.filter(lang => ['eng', 'deu', 'nld', 'swe', 'dan'].includes(lang.code)) },
                { id: 2, family: t("romance"), languages: languages.filter(lang => ['spa', 'por', 'fra', 'ita'].includes(lang.code)) },
                { id: 3, family: t("slavyanian"), languages: languages.filter(lang => ['rus', 'pol', 'ces', 'bul', 'ukr'].includes(lang.code)) },
                { id: 4, family: t("greek"), languages: languages.filter(lang => lang.code === 'ell') },
            ]
        },
        {
            id: 2,
            region: t("middleEastAndCentralAsia"),
            families: [
                { id: 1, family: t("semitic"), languages: languages.filter(lang => ['ara', 'heb'].includes(lang.code)) },
                { id: 2, family: t("iranian"), languages: languages.filter(lang => ['pes', 'pus'].includes(lang.code)) },
                { id: 3, family: t("turkic"), languages: languages.filter(lang => lang.code === 'tur') },
            ]
        },
        {
            id: 3,
            region: t("southAsia"),
            families: [
                { id: 1, family: t("indoAryan"), languages: languages.filter(lang => ['hin', 'ben', 'pan', 'mar', 'urd'].includes(lang.code)) },
                { id: 2, family: t("dravidian"), languages: languages.filter(lang => ['tam', 'tel'].includes(lang.code)) },
            ]
        },
        {
            id: 4,
            region: t("eastAsia"),
            families: [
                { id: 1, family: t("sinoTibetan"), languages: languages.filter(lang => ['cmh', 'mya'].includes(lang.code)) },
                { id: 2, family: t("japonic"), languages: languages.filter(lang => lang.code === 'jpn') },
                { id: 3, family: t("koreanic"), languages: languages.filter(lang => lang.code === 'kor') },
            ]
        },
        {
            id: 5,
            region: t("southEastAsia"),
            families: [
                { id: 1, family: t("austroasiatic"), languages: languages.filter(lang => lang.code === 'vie') },
                { id: 2, family: t("austronesian"), languages: languages.filter(lang => ['jav', 'ind'].includes(lang.code)) },
                { id: 3, family: t("kraDai"), languages: languages.filter(lang => lang.code === 'tha') },
            ]
        },
        {
            id: 6,
            region: t("africa"),
            families: [
                { id: 1, family: t("afroAsiatic"), languages: languages.filter(lang => ['ara', 'amh', 'hau'].includes(lang.code)) },
                { id: 2, family: t("nigerCongo"), languages: languages.filter(lang => ['swa', 'yor', 'zul'].includes(lang.code)) },
            ]
        },
    ];

    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>{t("languageSelector")}</h2>
            <div className='w-[100%] m-auto max-w-[1600px] min-w-[520px]'>
                {regions.map(region => (
                    <RegionAccordion
                        key={region.id}
                        region={region}
                        activeRegionId={activeRegionId} // Pass the active region ID
                        setActiveRegionId={setActiveRegionId} // Pass the setter function
                        changeLanguage={changeLanguage}
                        currentLanguageCode={i18n.language}
                    />
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;