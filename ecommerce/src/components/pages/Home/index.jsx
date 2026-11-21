import React from "react";
import HomeSlider from "./HomeSlider";
import CatSlider from "./CatSlider";
import Advertices from "./advertices";
import PopularProduct from "./PopularProduct";
import FeatureItem from "./Featureitem";
import Blog from "../Blog";
import FooterTop from "../../Footer/FooterTop/FooterTop";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Advertices />
      <PopularProduct />
      <FeatureItem />
      <Blog />
      <FooterTop />
    </>
  );
};

export default Home;
