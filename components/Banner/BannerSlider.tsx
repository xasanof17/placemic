"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const NextArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="absolute inset-y-0 left-0 z-10 flex items-center">
      <button
        onClick={onClick}
        className="swiper-button-next -mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow focus:outline-none lg:-mr-4"
      >
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="chevron-right h-6 w-6"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

const PrevArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="absolute inset-y-0 right-0 z-10 flex items-center">
      <button
        onClick={onClick}
        className="swiper-button-prev -ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow focus:outline-none lg:-ml-4"
      >
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="chevron-left h-6 w-6"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

const BannerSlider = () => {
  const sliderRef = useRef<SwiperRef>();

  const slideNext = () => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="h-full">
      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => {
          if (sliderRef.current) {
            (sliderRef.current as SwiperRef).swiper = swiper;
          }
        }}
        navigation
        modules={[Navigation]}
        className="relative h-full"
        loop
        autoplay
      >
        {[0, 1].map((item) => (
          <SwiperSlide key={item} className="relative h-fit w-full select-none">
            <Image
              src="/assets/slider.svg"
              alt="Скидка"
              fill
              priority
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
