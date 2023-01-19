import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
        <SwiperSlide>
          <div className='splash-1'>
            <h1 className='splash-text-1'>What's next in music is first on SongCloud</h1>
            <br />
            <h3 className='splash-text-2'>Upload your first track and begin your journey. SoundCloud gives you space to create, find your fans, and connect with other artists.</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='splash-2'>
            <h1 className='splash-text-3'>Discover more with SongCloud Go+</h1>
            <br />
            <h3 className='splash-text-4'>SongCloud Go+ lets you listen offline, ad-free, with over 150 million tracks — and&nbsp;growing.</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
