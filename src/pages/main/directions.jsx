import React, { useState } from 'react';
import style from './directions.module.css';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCube, Controller, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/controller';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

import CrossPlatformApplications from './cube/crossPlatformApplications';
import BusinessAutomation from './cube/businessAutomation';
import Blockchain from './cube/blockchain';
import IndustrialAutomatization from './cube/industrialAutomatization';

import SlideIMG1 from './media/cube/Image_1.jpg';
import SlideIMG2 from './media/cube/Image_2.jpg';
import SlideIMG3 from './media/cube/Image_3.jpg';
import SlideIMG4 from './media/cube/Image_4.jpg';

export default function Directions() {
  const [textSlider, setTextSlider] = useState(null);
  const [cubeSlider, setCubeSlider] = useState(null);
  const handlePrevSlide = () => {
    if (cubeSlider) {
      cubeSlider.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (cubeSlider) {
      cubeSlider.slideNext();
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.head}>
        <code><span style={{ color: '#e06c75' }}>let</span>.<span style={{ color: '#4fafe3' }}>be</span>(application)<span style={{ color: '#a878dd' }}> *= </span>{'{'}<span style={{ color: '#98c379' }}>for </span><span style={{ color: '#56b6c2' }}>Business </span>&& <span style={{ color: '#56b6c2' }}>Industry</span> :: <span style={{ color: '#e5c07b' }}>usersHappiness</span>{'}'}<span style={{ color: '#5c6370' }}> //computer applications for all purposes</span></code>
      </div>
      <h2 className={style.header}>Computer programming directions</h2>
      <section className={style.container}>
        <button className={style.navButton} onClick={handlePrevSlide}>
          <MdOutlineArrowBackIosNew />
        </button>
        <Swiper
          className={`${style.textSlider} textSlider`}
          modules={[EffectFade, Controller, Mousewheel, Autoplay]}
          onSwiper={(swiper) => setTextSlider(swiper)}
          controller={cubeSlider ? { control: cubeSlider } : {}}
          effect='fade'
          loop
          speed={1000}
        /* autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }} */
        >
          <SwiperSlide>
            <CrossPlatformApplications />
          </SwiperSlide>
          <SwiperSlide>
            <BusinessAutomation />
          </SwiperSlide>
          <SwiperSlide>
            <Blockchain />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrialAutomatization />
          </SwiperSlide>
        </Swiper>
        <button className={style.navButton} onClick={handleNextSlide}>
          <MdOutlineArrowForwardIos />
        </button>

        <Swiper
          className={`${style.cubeSlider} cubeSlider`}
          modules={[EffectCube, Controller, Mousewheel]}
          onSwiper={(swiper) => setCubeSlider(swiper)}
          controller={textSlider ? { control: textSlider } : {}}
          effect='cube'
          grabCursor
          loop
          speed={1000}
          mousewheel
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 60,
            shadowScale: 0.94,
          }}
          breakpoints={{
            //when window width is >= 300px
            300: {
              cubeEffect: {
                shadowOffset: 16,
              }
            },
            //when window width is >= 600px
            600: {
              cubeEffect: {
                shadowOffset: 36,
              }
            },
            //when window width is >= 1200px
            1200: {
              cubeEffect: {
                shadowOffset: 44,
              }
            },
          }}
        >
          <SwiperSlide>
            <img src={SlideIMG1} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideIMG2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideIMG3} alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideIMG4} alt="Slide 4" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  )
}
