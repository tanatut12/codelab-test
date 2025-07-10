import Image from "next/image";
import React from "react";
import banner from "@public/assets/svgs/banner.svg";
import BannerCover from "./components/BannerCover";

const Banner = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <Image
        src={banner}
        alt="banner"
        width={1920}
        height={828}
        className="w-full h-auto max-w-none"
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full bg-banner-gradient-1 z-10"></div>
      <div className="absolute -top-3 right-4 laptop:right-[60px] laptop-lg:right-[390px] app:right-[400px] flex items-center justify-center h-full z-20">
        <BannerCover />
      </div>
    </div>
  );
};

export default Banner;
