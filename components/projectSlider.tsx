"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import { FreeMode, Pagination } from "swiper/modules"
import { ProImages } from "@/constants"


const projectSlider = () => {
  return (
    <div className="w-[90%] md:w-[40%]">
      <Swiper
      breakpoints={{
        700: {
          slidesPerView: 1,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}>
        <SwiperSlide className="mb-14">
          <div className="grid grid-col-2 gap-4 px-10">
            {ProImages.map((image) => (
              <div className="relative group" key={image.src}>
                <Image
                src={image.src}
                alt="project image"
                width={280}
                height={280}
                className="rounded-md"
                />
                <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 froup-hove:opacity-70 transition-opacity duration-200"/>
                <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 froup-hove:opacity-70 transition-opacity duration-200 text-white md:text-lg">
                  View Project
                  <Image
                  src="/assets/icons/arrow-right.svg"
                  alt="arrow-right"
                  width={20}
                  height={20}
                  className="invert brightness-0 ml-2"
                  />
                </div>
              </div>
            ))}
          </div>

        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default projectSlider
