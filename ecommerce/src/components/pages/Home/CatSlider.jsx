import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./CatSlider.css";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
function CatSlider() {
  return (
    <>
      <div className="catslide">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="swiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="slide">
                <img src="https://plus.unsplash.com/premium_photo-1778901736163-601a3c11c81c?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
                <p>shart</p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default CatSlider;
