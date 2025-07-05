import React from "react";

const index = () => {
  return (
    <div className="relative w-full min-h-[200px]">
      <div className="absolute left-1/2 -translate-x-1/2 w-screen h-8 flex items-center font-bold text-white bg-black top-6 rotate-[3deg] px-8 text-xl md:text-2xl whitespace-nowrap shadow-lg z-20 overflow-hidden">
        <div className="whitespace-nowrap inline-block animate-marquee text-xs">
          {Array(10).fill("JIB TIKTOK BACK TO SCHOOL 🖥️🖱️📦✏️✏️ — ").join("")}
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-screen h-8 flex items-center font-bold text-white bg-secondary-500 top-16 rotate-[-1deg] px-8 text-xl md:text-2xl whitespace-nowrap shadow-lg z-10 overflow-hidden">
        <div className="whitespace-nowrap inline-block animate-marquee text-xs">
          {Array(10).fill("JIB TIKTOK BACK TO SCHOOL 🖥️🖱️📦✏️✏️ — ").join("")}
        </div>
      </div>
    </div>
  );
};

export default index;
