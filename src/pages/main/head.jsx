import style from './head.module.css';
import VideoBG from './media/videoplayback.mp4';
import VideoPoster from './media/poster.webp';
import { IoLanguage } from "react-icons/io5";

export default function Head() {
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
                    <button className={style.button1}><IoLanguage className={style.icon} /></button>
                </div>
                <div className={style.center}>
                    <div className={style.left} />
                    <div className={style.slogan}>
                        <h1 className={style.title}>{"[ SPACE OF IT DECISIONS ]"}</h1>
                        <p className={style.description}>{"< Information Technologies Development, Artistic  & Technical Design />"}</p>
                    </div>
                    <div className={style.right}>
                        <div className={style.buttons}>
                            <button className={style.button}>Coding</button>
                            <button className={style.button}>Design</button>
                            <button className={style.button}>Promotion</button>
                            <button className={style.button}>Portfolio</button>
                            <button className={style.button}>Articles</button>
                            <button className={style.button}>Contacts</button>
                        </div>
                    </div>
                </div>
                <div className={style.bottom} />
            </header>
        </div>
    );
}