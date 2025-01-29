"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2, ServiceData } from "@/constants";
import Image from "next/image";

const ServiceSlider = () => {
  return (
    <div className="absolute bottom-0 right-20 md:bottom-40 md:right-30 w-[60%] md:w-[55%]">
            <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>


    </div>
  )

}

export default ServiceSlider
