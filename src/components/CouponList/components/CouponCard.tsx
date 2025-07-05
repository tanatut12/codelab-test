import { ICoupon } from "@src/interfaces/coupon.interface";
import React, { FC } from "react";

interface IProps {
  coupon: ICoupon;
}

const CouponCard: FC<IProps> = ({ coupon }) => {
  return (
    <div
      className="flex justify-between items-center p-4 max-w-[276px] max-h-[86px] relative"
      style={{
        backgroundImage: `url(/assets/svgs/jib-logo-fade.svg), url(/assets/svgs/coupon-bg.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "90% 100%, center center",
      }}
    >
      <div className="flex-1">
        <div className="flex justify-center items-center bg-yellow-tag/20 rounded-full px-1.5 py-0.5 w-24">
          <p className="text-xs text-yellow-tag">{coupon.tag}</p>
        </div>
        <div>
          <p className="text-sm font-bold text-white line-clamp-1">
            {coupon.name}
          </p>
          <p className="text-sm text-zinc-200 line-clamp-1">
            {coupon.description}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-yellow-tag text-white text-xs px-1 py-1 rounded-md font-semibold ml-[9px] mr-1">
          เก็บคูปอง
        </button>
      </div>
      {coupon.recommend && (
        <div className="absolute -top-2.5 right-4 bg-red-recommend rounded p-1">
          <p className="text-xs font-bold text-white">แนะนำ</p>
        </div>
      )}
    </div>
  );
};

export default CouponCard;
