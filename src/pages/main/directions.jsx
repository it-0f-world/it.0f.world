import React, { useState } from 'react';
import './directions.css';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCube, Controller, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/controller';

import SlideIMG1 from './media/cube/Image_1.jpg';
import SlideIMG2 from './media/cube/Image_2.jpg';
import SlideIMG3 from './media/cube/Image_3.jpg';
import SlideIMG4 from './media/cube/Image_4.jpg';
import SlideIMG5 from './media/cube/Image_5.jpg';
import SlideIMG6 from './media/cube/Image_6.jpg';


export default function Directions() {
    const [textSlider, setTextSlider] = useState(null);
    const [cubeSlider, setCubeSlider] = useState(null);
  return (
    <section className='wrapperCubeSlider'>
      <Swiper
        className='textSlider'
        modules={[EffectFade, Controller, Mousewheel, Autoplay]}
        onSwiper={(swiper) => setTextSlider(swiper)}
        controller={cubeSlider ? { control: cubeSlider } : {}}
        effect='fade'
        loop
        speed={1000}
        mousewheel
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <h2>Cross-platform applications programming. Web, Desktop, mobile. For all operating systems.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis neque quaerat illum explicabo dicta et obcaecati asperiores, in, tempore aspernatur nihil veniam a. Accusantium error id libero, repellendus possimus minus et laborum?</p>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Business processes automation with CRM and CMS</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis neque quaerat illum explicabo dicta et obcaecati asperiores, in, tempore aspernatur nihil veniam a. Accusantium error id libero, repellendus possimus minus et laborum?</p>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Blockchain and payments integration.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis neque quaerat illum explicabo dicta et obcaecati asperiores, in, tempore aspernatur nihil veniam a. Accusantium error id libero, repellendus possimus minus et laborum?</p>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Industrial automatization. Factory robot’s setup.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis neque quaerat illum explicabo dicta et obcaecati asperiores, in, tempore aspernatur nihil veniam a. Accusantium error id libero, repellendus possimus minus et laborum?</p>
        </SwiperSlide>
      </Swiper>

      <Swiper
        className='cubeSlider'
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
  )
}
