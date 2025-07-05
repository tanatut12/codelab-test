import React, { FC } from "react";
import { cn } from "@src/utils/styles.util";

interface IProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

const CustomCarouselDot: FC<IProps> = ({
  totalSlides,
  currentSlide,
  onDotClick,
}) => {
  return (
    <div className="absolute bottom-3 left-0 right-0 z-20">
      <div className="flex justify-center items-center space-x-1.5">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={cn(
              "w-[21px] h-[5px] rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-yellow-dot w-[48px] h-[9px]"
                : "bg-gray-400/80 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarouselDot;
