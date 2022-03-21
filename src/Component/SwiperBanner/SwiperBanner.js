import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperBanner.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperBanner = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <div className="container">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img className="w-100" src="https://www.saintfrancis.com/assets/images/news-images/aa_2gen_tablet_news.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="w-100" src="https://www.saintfrancis.com/assets/images/news-images/boy_dad-shoulders_mom_indiana_inside_news.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="w-100" src="https://i.ibb.co/kSQ9pYM/pexels-karolina-grabowska-4021775.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="w-100" src="https://i.ibb.co/pJCGs37/1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src="https://i.ibb.co/3B4mZKT/2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src="https://i.ibb.co/KN57g2X/3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src="https://i.ibb.co/WkdTQxM/4.png" alt="" /></SwiperSlide>
      </Swiper>

      
    </div>
  );
};

export default SwiperBanner;
