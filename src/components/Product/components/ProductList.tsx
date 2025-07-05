import { products } from "@src/constants/product.constants";
import Image from "next/image";
import React, { FC } from "react";
import backToSchool from "@public/assets/svgs/back-to-school.svg";
import threeSixty from "@public/assets/svgs/360.svg";
import { HeartOutlined } from "@ant-design/icons";
import { IoEye } from "react-icons/io5";
import { Progress } from "antd";
import { formatNumber } from "@src/utils/format.util";
import {
  PRODUCT_CATEGORY,
  PRODUCT_TYPE,
} from "@src/constants/enum/product.enum";

interface IProps {
  activeCategory: PRODUCT_CATEGORY;
  activeFilter: PRODUCT_TYPE;
}

const ProductList: FC<IProps> = ({ activeCategory, activeFilter }) => {
  const filteredProducts = products.filter(
    (product) =>
      product.category === activeCategory && product.type === activeFilter
  );
  return (
    <div className="relative">
      <div
        className="flex items-center gap-[22px] mt-7 overflow-x-auto flex-nowrap scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative max-w-[184px] h-[334px] flex-shrink-0 overflow-hidden"
          >
            <div className="relative flex flex-col items-center pt-[33px]">
              <Image
                src={product.image}
                alt={product.name}
                width={141}
                height={138}
              />
              <div className="bg-black w-full h-4 flex items-center rounded-b-lg overflow-hidden">
                <div className="animate-marquee text-[8px] mt-3 text-white">
                  {Array(5).fill(" สินค้าใหม่ > ").join("")}
                </div>
              </div>
              <div className="absolute right-0 bottom-5">
                <div className="flex items-center gap-1 px-1 py-1 bg-gray-300/70 rounded-sm w-9 h-[13px]">
                  <IoEye size={8} className="text-white" />
                  <p className="text-[6px] text-white pt-0.5">
                    {product.viewCount}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 z-10 w-full px-2">
              <div className="flex items-center justify-between">
                <Image
                  src={backToSchool}
                  alt={"back-to-school"}
                  width={64}
                  height={29}
                />
                <div className="w-[26px] h-[26px] bg-gray-400 rounded-full flex items-center justify-center cursor-pointer">
                  <HeartOutlined className="text-sm" />
                </div>
              </div>
              <div className="flex justify-end ">
                <div className="w-[26px] h-[26px] bg-gray-400 rounded-full flex items-center justify-center cursor-pointer">
                  <Image src={threeSixty} alt={"360"} width={20} height={8} />
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col">
              <p className="text-[10px] font-semibold line-clamp-2 h-8 flex items-start">
                {product.name}
              </p>

              <div className="my-[9px]">
                <p className="text-[9px] text-gray-600 mb-[9px]">
                  {product.category}
                </p>
                <div className="flex items-center gap-1">
                  <div className="min-w-[36px] min-h-[20px] bg-red-recommend flex items-center justify-center rounded-md">
                    <p className="text-xs text-white font-semibold ">{`-${product.discount}%`}</p>
                  </div>
                  <p className="text-lg font-semibold text-red-recommend">{`฿ ${formatNumber(
                    product.price
                  )}`}</p>
                  <div className="mt-1">
                    <p className="text-[11px] text-gray-500 relative">
                      <span className="relative">
                        {`฿ ${formatNumber(product.realPrice)}`}
                        <span className="absolute inset-0 -right-2.5 flex items-center justify-center">
                          <span className="w-[36px] h-[1px] bg-gray-500 transform -rotate-12"></span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[9px] text-gray-200">
                  {`ขายไปแล้ว ${product.sold}/${product.stock}`}
                </p>
                <div className="-mt-2.5">
                  <Progress
                    percent={product.soldCountPercentage}
                    showInfo={false}
                    strokeColor={"#1F157C"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default ProductList;
