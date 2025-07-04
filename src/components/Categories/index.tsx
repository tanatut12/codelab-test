import {
  firstRowCategories,
  secondRowCategories,
} from "@src/constants/cetegories.constants";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-18 mb-24">
      <p className="text-2xl font-bold mb-7">หมวดหมู่สินค้า</p>
      <div className="flex flex-wrap gap-4">
        {firstRowCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-4 justify-start max-w-24 cursor-pointer"
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={96}
              height={96}
            />
            <p className="text-sm text-primary-100 font-bold text-center line-clamp-2">
              {category.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {secondRowCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-4 justify-start max-w-24 cursor-pointer"
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={96}
              height={96}
            />
            <p className="text-sm text-primary-100 font-bold text-center line-clamp-2">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
