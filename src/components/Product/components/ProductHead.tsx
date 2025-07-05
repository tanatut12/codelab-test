"use client";
import React, { FC, useRef, useState, useEffect } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { productCategories } from "@src/constants/product.constants";
import CustomCarouselDot from "@src/components/CustomCarouselDot";
import { PRODUCT_CATEGORY } from "@src/constants/enum/product.enum";

interface IProps {
  onCategoryChange: (category: PRODUCT_CATEGORY) => void;
  activeCategory: PRODUCT_CATEGORY;
}

const ProductHead: FC<IProps> = ({ onCategoryChange, activeCategory }) => {
  const carouselRef = useRef<React.ElementRef<typeof Carousel>>(null);
  const initialSlide = productCategories.findIndex(
    (category) => category.category === activeCategory
  );
  const [currentSlide, setCurrentSlide] = useState(
    initialSlide >= 0 ? initialSlide : 0
  );
  const totalSlides = productCategories.length;

  useEffect(() => {
    onCategoryChange(activeCategory);
  }, [activeCategory, onCategoryChange]);

  const handleDotClick = (index: number) => {
    carouselRef.current?.goTo(index);
    setCurrentSlide(index);
  };

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current);
    onCategoryChange(productCategories[current].category);
  };

  return (
    <div className="max-w-[317px] max-h-[411.24px] relative">
      <Carousel
        ref={carouselRef}
        autoplay={false}
        dots={false}
        draggable
        infinite={true}
        className="product-carousel"
        afterChange={handleAfterChange}
        initialSlide={initialSlide}
      >
        {productCategories.slice(0, 3).map((category) => (
          <div key={category.id} className="relative">
            <div className="relative w-[317px] h-[411.24] overflow-hidden rounded-lg">
              <Image
                src={category.bgImage}
                alt={category.label1}
                className="object-contain"
                priority={category.id === 1}
              />
              <div className="absolute bottom-[26px] left-[26px] z-10 text-white">
                <div className="flex">
                  <p className="text-white text-[34px] font-bold">
                    {category.label1}
                  </p>
                  <Image
                    src={category.icon}
                    alt={category.label1}
                    className="-mt-6 ml-2"
                  />
                </div>
                <p className="text-white text-[34px] font-bold -mt-3">
                  {category.label2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <CustomCarouselDot
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

export default ProductHead;
