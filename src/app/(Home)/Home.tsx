import Banner from "@src/components/Banner";
import Brand from "@src/components/Brand";
import Categories from "@src/components/Categories";
import Map from "@src/components/Map";
import MarqeeRibbon from "@src/components/MarqeeRibbon";
import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <Banner />
      <Brand />
      <Map />
      <Categories />
      <MarqeeRibbon />
      <div>{/* cupon */}</div>
      <div>{/* hightlight product */}</div>
    </div>
  );
};

export default Home;
