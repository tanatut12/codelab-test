import Image from "next/image";
import React from "react";
import banner from "@public/assets/svgs/banner.svg";

const Banner = () => {
  return (
    <div>
      <Image src={banner} alt="banner" width={1920} height={828} />
    </div>
  );
};

export default Banner;
