import React from "react";
import "./PopularItem.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import {
  FaRegHeart,
  FaExchangeAlt,
  FaExpand,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Productitem from "../../Productitem/Productitem";

function PopularItem() {
  const products = [
    { id: 1, name: "Product 1", company: "Company 1", price: "$50" },
    { id: 2, name: "Product 2", company: "Company 2", price: "$60" },
    { id: 3, name: "Product 3", company: "Company 3", price: "$70" },
    { id: 4, name: "Product 4", company: "Company 4", price: "$80" },
    { id: 5, name: "Product 5", company: "Company 5", price: "$90" },
    { id: 6, name: "Product 6", company: "Company 6", price: "$100" },
    { id: 7, name: "Product 7", company: "Company 7", price: "$110" },
    { id: 8, name: "Product 8", company: "Company 8", price: "$120" },
    { id: 9, name: "Product 9", company: "Company 9", price: "$130" },
  ];

  return (
    <div className="popular-item">
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
        {products.map((product) => (
          <SwiperSlide className="slide" key={product.id}>
            <div className="popular-product-item">
              <Productitem />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularItem;
