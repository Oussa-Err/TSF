"use client";
import Image from "next/image";
import gouvernancePartners from "../../../public/data/gouvernancePartners.json";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const GouvernanceSlide = () => {
  return (
    <div className=" bg-cover bg-no-repeat w-full h-full bg-center">
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        // centeredSlides={true}

        autoplay={{
          delay:5,
          waitForTransition: true,
          disableOnInteraction: true,
        }}
        
        speed={1500} 
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {gouvernancePartners.map((partner, index) => (
          <SwiperSlide key={index} className="">
            <Image
              className="m-auto p-4 self-center my-auto filter grayscale"
              src={partner.imageUrl}
              width={300}
              height={100}
              alt="f"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}