"use client";
import { influencer } from "@src/constants/influencer.contants";
import { formatNumberWithSuffix } from "@src/utils/format.util";
import { cn } from "@src/utils/styles.util";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";

const InfluencerList = () => {
  const [currentActive, setCurrentActive] = useState(0);

  const handleSlideClick = (index: number) => {
    setCurrentActive(index);
  };

  return (
    <div className="max-w-[1516px] max-h-[600px] overflow-hidden scrollbar-hide mx-auto px-4 mb-8">
      <div className="flex items-start pt-[43px] pl-[65px] overflow-x-hidden scrollbar-hide">
        {influencer.map((item, index) => (
          <div
            key={item.id}
            className="px-2 flex-shrink-0 relative cursor-pointer"
            onClick={() => handleSlideClick(index)}
          >
            <div
              className={cn(
                "relative w-[212px] h-[496px] rounded-2xl overflow-hidden transition-all duration-300 ease-in-out",
                {
                  "w-[496px] z-50 overflow-visible": currentActive === index,
                }
              )}
              style={{
                backgroundImage: `url(/assets/svgs/influencer/influ-bg.svg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {currentActive !== index && (
                <div className="absolute inset-0 rounded-2xl z-20 bg-influencer-gradient" />
              )}
              <div
                className={cn(
                  "absolute top-5 -left-[70px] z-10 w-[302px] h-[541px] transition-all duration-300 ease-in-out",
                  {
                    "absolute -top-[45.6px] -left-[73px] z-20 overflow-visible":
                      currentActive === index,
                  }
                )}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={302}
                  height={541}
                />
              </div>
            </div>
            <div
              className={cn(
                "absolute bottom-0 rounded-b-2xl pt-6 px-6 left-2 z-30 p-4 w-[212px]",
                {
                  "bottom-1 left-[233px] z-50 w-[270px] h-[296px]":
                    currentActive === index,
                }
              )}
            >
              <div className="flex flex-col gap-4">
                <Image
                  src={item.profileImage}
                  alt={item.name}
                  width={56}
                  height={56}
                />
                <div className="gap-2">
                  <p className="text-xl font-bold text-white">{item.name}</p>
                  <div className="flex items-center gap-1">
                    <BiSolidUser className="text-white" />
                    <p className="text-white text-xl">
                      {formatNumberWithSuffix(item.follower)}
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "transition-all duration-500 ease-out overflow-hidden",
                    {
                      "max-h-[200px] opacity-100": currentActive === index,
                      "max-h-0 opacity-0": currentActive !== index,
                    }
                  )}
                >
                  <p
                    className={cn(
                      "text-white text-2sm transition-all duration-500 ease-out transform",
                      {
                        "translate-y-0 scale-100": currentActive === index,
                        "translate-y-4 scale-95": currentActive !== index,
                      }
                    )}
                  >
                    {item.descriptions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerList;
