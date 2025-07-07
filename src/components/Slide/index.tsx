import { productSlide } from "@src/constants/product.slide.contants";
import Image from "next/image";
import React from "react";

const Slide = () => {
  return (
    <div className="py-8 flex gap-6 animate-marquee">
      {productSlide.map((slide) => (
        <Image
          key={slide.id}
          src={slide.image}
          alt={`slide-${slide.id}`}
          width={240}
          height={240}
        />
      ))}
    </div>
  );
};

export default Slide;
