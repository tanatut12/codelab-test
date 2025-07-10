"use client";
import React from "react";
import Timer from "./Timer";
import ProgressWithFire from "./ProgressWithFire";
import backToSchool from "@public/assets/svgs/back-to-school.svg";
import Image from "next/image";
import socialWhite from "@public/assets/svgs/social/social-white.svg";
const BannerCover = () => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-2xl text-white">
            อุปกรณ์คอมพิวเตอร์ชั้นนำของประเทศ
          </p>
          <p className="text-[34px] text-white">ที่คัดสรรมาเพื่อคุณ</p>
        </div>
        <div className="w-[480px] h-[132px]">
          <Timer />
          <ProgressWithFire />
          <div className="flex justify-end items-center mr-[62px] gap-1">
            <p className="text-white text-[7px]">ต้องการติดต่อเรา</p>
            <Image
              src={socialWhite}
              alt="social-white"
              width={112}
              height={14}
            />
          </div>
        </div>
      </div>
      <div className="absolute -top-[50px] left-0">
        <Image
          src={backToSchool}
          alt="back-to-school"
          width={102}
          height={46}
        />
      </div>
      <div className="absolute -top-[110px] right-[184px] w-full">
        <div className="relative w-full h-12">
          <div className="absolute bottom-0 left-0 right-0">
            <div className="flex justify-center items-center space-x-1.5">
              {Array.from({ length: 3 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {}}
                  className={`w-[21px] h-[5px] rounded-full transition-all duration-300 ${
                    index === 0
                      ? "bg-yellow-dot w-[48px] h-[9px]"
                      : "bg-gray-400/80 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCover;
