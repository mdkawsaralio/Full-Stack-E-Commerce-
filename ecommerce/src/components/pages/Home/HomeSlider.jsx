import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./HomeSlider.css";

import image1 from "./1.jpg";
import image2 from "./2.avif";
import image3 from "./3.avif";
import image4 from "./4.avif";
import image5 from "./5.avif";

function HomeSlider() {
  return (
    <>
      <div className="home-slide">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="slide">
            {" "}
            <img
              src={image1}
              alt="banner"
              style={{ width: "100%", height: "400px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={image2}
              alt="banner"
              style={{ width: "100%", height: "400px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={image3}
              alt="banner"
              style={{ width: "100%", height: "400px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={image4}
              alt="banner"
              style={{ width: "100%", height: "400px", objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={image5}
              alt="banner"
              style={{ width: "100%", height: "400px", objectFit: "contain" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default HomeSlider;
