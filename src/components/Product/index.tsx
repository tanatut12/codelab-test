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
    <div className="max-w-[1263px] mx-auto flex justify-between gap-[32px]">
      <ProductHead
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
      />
      <div className="flex-1 pt-4 overflow-hidden">
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
  );
};

export default Product;
