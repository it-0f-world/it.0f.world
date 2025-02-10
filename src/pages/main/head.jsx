import style from './head.module.css';
import VideoBG from './media/videoplayback.mp4';
import VideoPoster from './media/poster.webp';
import { PiCode, PiQrCode, PiMapPinSimpleArea, PiBookBookmarkLight, PiAperture, PiChartDonut, PiTranslate } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/languageSelector/languageSelector';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";

function ModalLanguages({ onClose, onLanguageChange }) {
    return (
        <motion.div
            className={style.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className={style.modalCardWrapper}>
                <button onClick={onClose} className={style.closeModal}><IoCloseSharp /></button>
                <motion.div
                    className={style.modalCard}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
                    <LanguageSelector onLanguageChange={onLanguageChange} />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default function Head() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('English'); // Default language

    return (
        <div className={style.container}>
            <div className={style.videoWrapper}>
                <video
                    autoPlay
                    loop
                    muted
                    poster={VideoPoster}
                    className={style.videoBackground}
                >
                    <source src={VideoBG} type="video/mp4" />
                </video>
            </div>
            <header className={style.header}>
                <div className={style.top}>
                    <button onClick={() => setIsOpen(true)} className={style.changeLanguage}>
                        <PiTranslate className={style.langIcon} />
                        {currentLanguage} {/* Display the current language name */}
                    </button>
                    <AnimatePresence>
                        {isOpen && <ModalLanguages onClose={() => setIsOpen(false)} onLanguageChange={setCurrentLanguage} />}
                    </AnimatePresence>
                </div>
                <div className={style.center}>
                    <div className={style.left} />
                    <div className={style.slogan}>
                        <h1 className={style.title}>{t("mainHeadTitle")}</h1>
                        <p className={style.description}>{t("mainHeadDescription")}</p>
                    </div>
                    <div className={style.right}>
                        <div className={style.buttons}>
                            <button className={`${style.button}`}><PiCode className={style.buttonIcon} />{t("coding")}</button>
                            <button className={style.button}><PiAperture className={style.buttonIcon} />{t("design")}</button>
                            <button className={style.button}><PiChartDonut className={style.buttonIcon} />{t("promotion")}</button>
                            <button className={style.button}><PiQrCode className={style.buttonIcon} />{t("portfolio")}</button>
                            <button className={style.button}><PiBookBookmarkLight className={style.buttonIcon} />{t("articles")}</button>
                            <button className={style.button}><PiMapPinSimpleArea className={style.buttonIcon} />{t("contacts")}</button>
                        </div>
                    </div>
                </div>
                <div className={style.bottom} />
            </header>
        </div>
    );
}