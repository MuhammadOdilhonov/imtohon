import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Data from './OYLAR.json'
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Oylar() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
       {
        Data.map((arr , i)=>{
            return(
        <SwiperSlide><div className="OylarBorder"><div>{arr.name} <br /> <b>{arr.Number}</b></div></div></SwiperSlide>

            )
        })
       }
      </Swiper>
    </>
  );
}
