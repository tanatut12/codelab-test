"use client";
import Filter from "@src/components/Filter";
import {
  PRODUCT_CATEGORY,
  PRODUCT_TYPE,
} from "@src/constants/enum/product.enum";

import categoryIcon from "@public/assets/svgs/product/category-icon.svg";

import React, { FC } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

interface IProps {
  header: PRODUCT_CATEGORY;
  activeFilterState: PRODUCT_TYPE;
  onFilterChange: (filter: PRODUCT_TYPE) => void;
}

const ProductFilter: FC<IProps> = ({
  header,
  activeFilterState,
  onFilterChange,
}) => {
  const getCategoryDisplayName = (category: PRODUCT_CATEGORY): string => {
    switch (category) {
      case PRODUCT_CATEGORY.KEYBOARD:
        return "คีย์บอร์ด";
      case PRODUCT_CATEGORY.MOUSE:
        return "เมาส์";
      case PRODUCT_CATEGORY.MONITOR:
        return "มอนิเตอร์";
      case PRODUCT_CATEGORY.SMARTPHONE:
        return "สมาร์ทโฟน";
      default:
        return category;
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4.5">
          <Image src={categoryIcon} alt={header} width={32} height={33} />
          <p className="text-2xl font-bold">{getCategoryDisplayName(header)}</p>
        </div>
        <Filter
          filterOptions={[
            { key: PRODUCT_TYPE.GAMING, label: "สายเกม" },
            { key: PRODUCT_TYPE.GRAPHIC, label: "สายกราฟิก" },
            { key: PRODUCT_TYPE.ANIMATION, label: "สายอนิเมชั่น" },
          ]}
          activeFilterState={activeFilterState}
          onChange={onFilterChange}
        />
      </div>
      <div className="flex items-center text-sm text-primary-100 font-semibold">
        <a href="#" className="text-sm text-primary-100 ">
          ดูทั้งหมด
        </a>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default ProductFilter;
