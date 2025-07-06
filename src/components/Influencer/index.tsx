import React from "react";
import InfluencerList from "./components/InfluencerList";

const Influencer = () => {
  return (
    <div className="max-w-[1516px] mx-auto flex flex-col pt-16">
      <div className="pb-[5px] flex justify-center">
        <p className="text-2xl font-bold">พบกับคนดังในงาน</p>
      </div>
      <div>
        <InfluencerList />
      </div>
    </div>
  );
};

export default Influencer;
