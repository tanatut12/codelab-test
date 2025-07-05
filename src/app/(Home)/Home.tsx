import Banner from "@src/components/Banner";
import Brand from "@src/components/Brand";
import Categories from "@src/components/Categories";
import CouponList from "@src/components/CouponList";
import Map from "@src/components/Map";
import MarqeeRibbon from "@src/components/MarqeeRibbon";
import Product from "@src/components/Product";
import { PRODUCT_CATEGORY } from "@src/constants/enum/product.enum";
import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <Banner />
      <Brand />
      <Map />
      <Categories />
      <MarqeeRibbon />
      <CouponList />
      <div className="flex flex-col gap-[46px]">
        <Product activeCategoryState={PRODUCT_CATEGORY.KEYBOARD} />
        <Product activeCategoryState={PRODUCT_CATEGORY.MOUSE} />
        <Product activeCategoryState={PRODUCT_CATEGORY.MONITOR} />
        <Product activeCategoryState={PRODUCT_CATEGORY.KEYBOARD} />
      </div>
    </div>
  );
};

export default Home;
