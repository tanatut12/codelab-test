import {
  firstRowCategories,
  secondRowCategories,
} from "@src/constants/cetegories.constants";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 laptop:mt-18 mb-12 laptop:mb-24 px-4">
      <p className="text-xl laptop:text-2xl font-bold mb-7">หมวดหมู่สินค้า</p>
      <div className="flex flex-wrap gap-2 laptop:gap-4 justify-center">
        {firstRowCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-2 laptop:gap-4 justify-start w-16 laptop:w-24 cursor-pointer"
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={64}
              height={64}
              className="laptop:w-24 laptop:h-24"
            />
            <p className="text-xs laptop:text-sm text-primary-100 font-bold text-center line-clamp-2">
              {category.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 laptop:gap-4 justify-center">
        {secondRowCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-2 laptop:gap-4 justify-start w-16 laptop:w-24 cursor-pointer"
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={64}
              height={64}
              className="laptop:w-24 laptop:h-24"
            />
            <p className="text-xs laptop:text-sm text-primary-100 font-bold text-center line-clamp-2">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
