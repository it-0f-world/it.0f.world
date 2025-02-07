import style from './head.module.css';
import VideoBG from './media/videoplayback.mp4';
import VideoPoster from './media/poster.webp';
import { PiCode, PiQrCode, PiMapPinSimpleArea, PiBookBookmarkLight, PiAperture, PiChartDonut, PiTranslate } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/languageSelector/languageSelector';
import { AnimatePresence, motion } from 'motion/react'
import { useState } from "react"

function ModalLanguages ({ onClose }) {
    return (
        <motion.div
            className={style.overlay}
            onClick={onClose}
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
        >
            <motion.div
                className={style.modalCard}
                onClick={onClose}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition ={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <LanguageSelector />
                <button onClick={onClose}>Close</button>
            </motion.div>
        </motion.div>
    )
}

export default function Head() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)
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
                    <button onClick={() => setIsOpen(true)}><PiTranslate className={style.icon} />{`show here chosen language`}</button>
                    <AnimatePresence>
                        { isOpen && <ModalLanguages onClose={() => setIsOpen(false)} /> }
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
                            <button className={`${style.button}`}><PiCode className='text-[2.1rem] mb-[-0.4rem] mx-[0.3rem]'/>{t("mainHeadCoding")}</button>
                            <button className={style.button}><PiAperture className='text-[2.1rem] mb-[-0.4rem] mx-[0.3rem]'/>{t("mainHeadDesign")}</button>
                            <button className={style.button}><PiChartDonut className='text-[2.1rem] mb-[-0.4rem] mx-[0.3rem]'/>{t("mainHeadPromotion")}</button>
                            <button className={style.button}><PiQrCode className='text-[2.1rem] mb-[-0.4rem] mx-[0.3rem]'/>{t("mainHeadPortfolio")}</button>
                            <button className={style.button}><PiBookBookmarkLight className='text-[2.1rem] mb-[-0.4rem] mx-[0.3rem]'/>{t("mainHeadArticles")}</button>
                            <button className={style.button}><PiMapPinSimpleArea className='text-[2.1rem] mb-[-0.4rem] mx-[0.3rem]'/>{t("mainHeadContacts")}</button>
                        </div>
                    </div>
                </div>
                <div className={style.bottom} />
            </header>
        </div>
    );
}