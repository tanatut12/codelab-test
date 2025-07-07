import Banner from "@src/components/Banner";
import Brand from "@src/components/Brand";
import Categories from "@src/components/Categories";
import CouponList from "@src/components/CouponList";
import Influencer from "@src/components/Influencer";
import Map from "@src/components/Map";
import MarqeeRibbon from "@src/components/MarqeeRibbon";
import Product from "@src/components/Product";
import Slide from "@src/components/Slide";
import { PRODUCT_CATEGORY } from "@src/constants/enum/product.enum";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

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
      <div className="flex items-center justify-center mt-[76px]">
        <a
          href="#"
          className="text-[22px] flex text-primary-100 font-semibold border-b-2 border-gray-200 py-4"
        >
          ดูสินค้าทั้งหมด
          <span className="text-primary-100 flex items-center justify-center">
            <FaAngleRight className="text-xl text-primary-100" />
          </span>
        </a>
      </div>
      <Influencer />
      <div className="mb-40">
        <Slide />
      </div>
    </div>
  );
};

export default Home;
