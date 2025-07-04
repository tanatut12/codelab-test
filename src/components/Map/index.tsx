import React from "react";
import map from "@public/assets/svgs/map/map.svg";
import Image from "next/image";

const Map = () => {
  return (
    <div className="w-full flex justify-center mt-8">
      <Image src={map} alt="map" width={1078} height={568} />
    </div>
  );
};

export default Map;
