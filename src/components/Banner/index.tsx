import Image from "next/image";
import React from "react";
import banner from "@public/assets/svgs/banner.svg";

const Banner = () => {
  return (
    <div className="w-full overflow-hidden">
      <Image
        src={banner}
        alt="banner"
        width={1920}
        height={828}
        className="w-full h-auto max-w-none"
        priority
      />
    </div>
  );
};

export default Banner;
