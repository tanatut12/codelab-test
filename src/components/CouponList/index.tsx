"use client";
import React, { useState } from "react";
import CouponIcon from "@public/assets/svgs/coupon-icon.svg";
import Image from "next/image";
import { coupons } from "@src/constants/coupon.contants";
import CouponCard from "./components/CouponCard";
import Filter from "../Filter";
import { COUPON_TYPE } from "@src/constants/enum/coupon.enum";

const CouponList = () => {
  const [activeFilter, setActiveFilter] = useState<COUPON_TYPE>(
    COUPON_TYPE.DISCOUNT
  );

  const handleFilterChange = (key: COUPON_TYPE) => {
    setActiveFilter(key);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center mb-[78px]">
      <div className="flex flex-col items-center gap-1.5 mb-[29px]">
        <Image src={CouponIcon} alt="coupon-icon" width={42} height={42} />
        <p className="text-2xl font-bold">คูปองส่วนลด</p>
      </div>
      <div className="w-full flex justify-center mb-[29px]">
        <Filter
          filterOptions={[
            { key: COUPON_TYPE.DISCOUNT, label: "ส่วนลด" },
            { key: COUPON_TYPE.FREEBIE, label: "ของแถม" },
            { key: COUPON_TYPE.BRAND, label: "แบรนด์ดัง" },
          ]}
          onChange={handleFilterChange}
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-6">
        {coupons
          .filter((item) => item.type === activeFilter)
          .map((item, index) => (
            <CouponCard key={index} coupon={item} />
          ))}
      </div>
    </div>
  );
};

export default CouponList;
