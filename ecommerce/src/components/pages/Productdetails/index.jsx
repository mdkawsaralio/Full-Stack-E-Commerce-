import React from "react";
import ProductDetailsItem from "../../ProductDetailsItem/ProductDetailsItem";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import Productitem from "../../Productitem/Productitem";

import "./index.css";
import ProductDetailsDescription from "../../ProductDetailDescription/ProductDetailsDescription";
function Productdetails() {
  return (
    <>
      <div role="presentation" className="bread-crumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/product-listing">Fashion</Link>
        </Breadcrumbs>
      </div>
      <div className="product-details-full">
        <div className="product-details-main">
          <ProductDetailsItem />
        </div>
        <div className="product-details-descriptions">
          <ProductDetailsDescription />
        </div>
        <div className="related-product">
          <h3 className="featured-heading">Related Product</h3>
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
        </div>
      </div>
    </>
  );
}

export default Productdetails;
