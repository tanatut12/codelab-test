"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 8,
    minutes: 19,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex gap-3">
      {/* Days */}
      <div className="flex flex-col items-center">
        <p className="text-white text-sm mb-2">วัน</p>
        <div className="bg-black/60 backdrop-blur-sm rounded-xl w-20 h-20 flex items-center justify-center">
          <span className="text-yellow-dot text-5xl font-bold font-mono">
            {formatNumber(timeLeft.days)}
          </span>
        </div>
      </div>

      {/* Separator */}
      <div className="text-white text-3xl font-bold mt-12">:</div>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <p className="text-white text-sm mb-2">ชั่วโมง</p>
        <div className="bg-black/60 backdrop-blur-sm rounded-xl w-20 h-20 flex items-center justify-center">
          <span className="text-yellow-dot text-5xl font-bold font-mono">
            {formatNumber(timeLeft.hours)}
          </span>
        </div>
      </div>

      {/* Separator */}
      <div className="text-white text-3xl font-bold mt-12">:</div>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <p className="text-white text-sm mb-2">นาที</p>
        <div className="bg-black/60 backdrop-blur-sm rounded-xl w-20 h-20 flex items-center justify-center">
          <span className="text-yellow-dot text-5xl font-bold font-mono">
            {formatNumber(timeLeft.minutes)}
          </span>
        </div>
      </div>

      {/* Separator */}
      <div className="text-white text-3xl font-bold mt-12">:</div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <p className="text-white text-sm mb-2">วินาที</p>
        <div className="bg-black/60 backdrop-blur-sm rounded-xl w-20 h-20 flex items-center justify-center">
          <span className="text-yellow-dot text-5xl font-bold font-mono">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
