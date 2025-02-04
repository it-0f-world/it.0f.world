import style from './head.module.css';
import VideoBG from './media/videoplayback.mp4';
import VideoPoster from './media/poster.webp';
import { PiCode, PiQrCode, PiMapPinSimpleArea, PiBookBookmarkLight, PiAperture, PiChartDonut, PiTranslate } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import languageSelector from '../../components/languageSelector/languageSelector';

export default function Head() {
    const { t } = useTranslation();
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
                    <button className={style.button1}><PiTranslate className={style.icon} /></button>
                    
                </div>
                <div className={style.center}>
                    <div className={style.left} />
                    <div className={style.slogan}>
                        <h1 className={style.title}>{t("title")}</h1>
                        <p className={style.description}>{"< Information Technologies Development, Artistic  & Technical Design />"}</p>
                    </div>
                    <div className={style.right}>
                        <div className={style.buttons}>
                            <button className={`${style.button}`}><PiCode className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>Coding</button>
                            <button className={style.button}><PiAperture className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>Design</button>
                            <button className={style.button}><PiChartDonut className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>Promotion</button>
                            <button className={style.button}><PiQrCode className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>Portfolio</button>
                            <button className={style.button}><PiBookBookmarkLight className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>Articles</button>
                            <button className={style.button}><PiMapPinSimpleArea className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>Contacts</button>
                        </div>
                    </div>
                </div>
                <div className={style.bottom} />
            </header>
        </div>
    );
}