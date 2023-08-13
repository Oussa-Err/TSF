"use client";
import Image from "next/image";
import partners from "../../../public/data/partners.json";
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
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="">
            <Image
              className="m-auto p-8 self-center my-auto"
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