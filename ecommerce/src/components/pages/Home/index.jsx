import React from "react";
import HomeSlider from "./HomeSlider";
import CatSlider from "./CatSlider";
import Advertices from "./advertices";
import PopularProduct from "./PopularProduct";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Advertices />
      <PopularProduct />
    </>
  );
};

export default Home;
