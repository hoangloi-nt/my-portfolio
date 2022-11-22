import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const AboutSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="z-10 mySwiper"
        data-aos="zoom-in-left"
      >
        <SwiperSlide>
          <img srcSet="/hoangloi3.jpg 1x" alt="hoangloi-img2" />
        </SwiperSlide>
        <SwiperSlide>
          <img srcSet="/hoangloi4.jpg 1x" alt="hoangloi-img2" />
        </SwiperSlide>
        <SwiperSlide>
          <img srcSet="/hoangloi5.jpg 1.5x" alt="hoangloi-img2" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AboutSlider;
