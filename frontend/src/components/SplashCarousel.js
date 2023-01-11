import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css';
import "swiper/swiper-bundle.min.css";
import "./SplashStyles.css"

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function App() {
    return (
<>
      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://thumbs.dreamstime.com/b/crowd-raised-hands-concert-festival-banner-166852445.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/A14CNedaZGL._CR3,0,1914,1080_SR684,386_.jpg" /></SwiperSlide>
      </Swiper>
    </>
    );
  }
