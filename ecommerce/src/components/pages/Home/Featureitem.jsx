import React from "react";
import "./Featureitem.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import Productitem from "../../Productitem/Productitem";
function FeatureItem() {
  return (
    <>
      <section className="feature-item">
        <h3 className="featured-heading">Featured Item</h3>
        <Swiper
          navigation={true}
          slidesPerView={4}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
        >
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="slide">
            <div className="feature-item-slide">
              <Productitem />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default FeatureItem;
