import React from "react";
import brandSlider1 from "@public/assets/svgs/brand/brandSlide1.svg";
import brandSlider2 from "@public/assets/svgs/brand/brandSlide2.svg";

const brandImages = [brandSlider1, brandSlider2];

const Brand = () => {
  return (
    <div className="relative w-full bg-white py-16 mt-8">
      {/* First row */}
      <div className="relative w-full overflow-hidden mb-14">
        <div className="flex animate-marquee items-center">
          {Array(10)
            .fill(brandImages)
            .flat()
            .map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={`brand-row1-${idx}`}
                className="h-6 laptop:h-8 laptop-lg:h-12 object-contain opacity-60 mx-4 laptop:mx-8"
                draggable={false}
              />
            ))}
        </div>

        <div className="absolute top-0 left-0 w-52 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

        <div className="absolute top-0 right-0 w-52 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-marquee items-center"
          style={{ animationDirection: "reverse" }}
        >
          {Array(10)
            .fill(brandImages)
            .flat()
            .map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={`brand-row2-${idx}`}
                className="h-6 laptop:h-8 laptop-lg:h-12 object-contain opacity-60 mx-4 laptop:mx-8"
                draggable={false}
              />
            ))}
        </div>
        {/* Left gradient overlay */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        {/* Right gradient overlay */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Brand;
