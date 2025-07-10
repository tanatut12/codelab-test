import React from "react";
import InfluencerList from "./components/InfluencerList";

const Influencer = () => {
  return (
    <div className="max-w-[95vw] laptop:max-w-[1200px] laptop-lg:max-w-[1400px] app-extra:max-w-[1516px] mx-auto flex flex-col pt-8 laptop:pt-16 px-4 laptop:px-0">
      <div className="pb-[5px] flex justify-center">
        <p className="text-xl laptop:text-2xl font-bold">พบกับคนดังในงาน</p>
      </div>
      <div>
        <InfluencerList />
      </div>
    </div>
  );
};

export default Influencer;
