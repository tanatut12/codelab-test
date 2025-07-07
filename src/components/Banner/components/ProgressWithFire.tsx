import React from "react";
import { Progress } from "antd";
import fire from "@public/assets/svgs/fire.svg";
import Image from "next/image";

const ProgressWithFire = () => {
  const percent = 40;
  const progressBarWidth = 418; // width in pixels
  const fireIconPosition = (percent / 100) * progressBarWidth - 16; // subtract half of icon width for centering

  return (
    <div className="w-[418px] mt-[46px] relative">
      <Progress
        percent={percent}
        showInfo={false}
        strokeColor={{
          "0%": "#ED1C24",
          "100%": "#A61FDF",
        }}
        trailColor="rgba(217, 217, 217, 0.5)"
      />
      <div
        className="absolute -top-5"
        style={{ left: `${fireIconPosition}px` }}
      >
        <Image src={fire} alt="fire" width={32} height={43} />
      </div>
    </div>
  );
};

export default ProgressWithFire;
