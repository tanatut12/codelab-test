"use client";
import React, { FC, useState, useEffect } from "react";
import ProductHead from "./components/ProductHead";

import ProductFilter from "./components/ProductFilter";
import {
  PRODUCT_CATEGORY,
  PRODUCT_TYPE,
} from "@src/constants/enum/product.enum";
import ProductList from "./components/ProductList";

interface IProps {
  activeCategoryState: PRODUCT_CATEGORY;
}

const Product: FC<IProps> = ({ activeCategoryState }) => {
  const [activeFilter, setActiveFilter] = useState<PRODUCT_TYPE>(
    PRODUCT_TYPE.GAMING
  );
  const [activeCategory, setActiveCategory] =
    useState<PRODUCT_CATEGORY>(activeCategoryState);

  useEffect(() => {
    setActiveCategory(activeCategoryState);
  }, [activeCategoryState]);

  const handleFilterChange = (key: PRODUCT_TYPE) => {
    setActiveFilter(key);
  };

  const handleCategoryChange = (key: PRODUCT_CATEGORY) => {
    setActiveCategory(key);
  };
  return (
    <div className="max-w-[95vw] laptop:max-w-[1000px] laptop-lg:max-w-[1200px] app:max-w-[1263px] mx-auto px-2 laptop:px-0">
      <div className="flex flex-col laptop:flex-row justify-between gap-4 laptop:gap-[32px]">
        <div className="flex-shrink-0">
          <ProductHead
            onCategoryChange={handleCategoryChange}
            activeCategory={activeCategory}
          />
        </div>
        <div className="flex-1 pt-4 overflow-hidden min-w-0">
          <ProductFilter
            header={activeCategory}
            activeFilterState={activeFilter}
            onFilterChange={handleFilterChange}
          />
          <ProductList
            activeCategory={activeCategory}
            activeFilter={activeFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
