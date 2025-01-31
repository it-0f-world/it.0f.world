import style from './head.module.css';
import VideoBG from './media/videoplayback.mp4';
import VideoPoster from './media/poster.webp';

export default function Head() {
    return (
        <div className={style.container}>
            <div className={style.videoWrapper}>
                <video
                    autoPlay
                    loop
                    muted
                    className={style.videoBackground}
                    poster={VideoPoster}
                >
                    <source src={VideoBG} type="video/mp4" />
                </video>
            </div>
            <header className={style.header}>
                <h1 className={style.title}>{"[ SPACE OF IT DECISIONS ]"}</h1>
                <p className={style.description}>{"< Information Technologies Development, Artistic  & Technical Design />"}</p>
            </header>
        </div>
    );
}
