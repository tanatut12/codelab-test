"use client";

import { MdCopyright } from "react-icons/md";

import Image from "next/image";

import bank from "@public/assets/svgs/bank/bank.svg";
import kerry from "@public/assets/svgs/shipping/kerry.svg";
import teleport from "@public/assets/svgs/shipping/teleport.svg";
import dhl from "@public/assets/svgs/shipping/dhl.svg";
import social from "@public/assets/svgs/social/social.svg";

import FooterSection0 from "./components/FooterSection0";
import FooterSection1 from "./components/FooterSection1";
import FooterSection2 from "./components/FooterSection2";

const Footer = () => {
  return (
    <div className="bg-light-300">
      <FooterSection0 />
      <div className="bg-primary-100 flex">
        <div className="max-w-[1440px] mx-auto pt-[72px] flex gap-18">
          <div className="">
            <FooterSection1 />
          </div>
          <div className="flex-1">
            <FooterSection2 />
          </div>
        </div>
      </div>
      <div className="bg-primary-100 flex justify-center pt-4 pb-12">
        <div className=" flex justify-end max-w-[1100px]">
          <div className="flex gap-10">
            <div>
              <div className="flex justify-center">
                <p className="text-2sm text-white">จัดส่งสินค้าโดย</p>
              </div>
              <div>
                <div className="flex justify-center">
                  <Image src={kerry} alt="kerry" width={94} height={46} />
                  <Image src={teleport} alt="teleport" width={80} height={46} />
                </div>
                <Image src={dhl} alt="dhl" width={280} height={58} />
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <p className="text-2sm text-white">ช่องทางการชำระ</p>
              </div>
              <Image src={bank} alt="bank" width={452} height={100} />
            </div>
            <div>
              <div className="flex justify-center">
                <p className="text-2sm text-white">ช่องทางการติดตาม</p>
              </div>
              <Image src={social} alt="social" width={270} height={80} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light-300 pt-1 pb-24 flex justify-center gap-1">
        <MdCopyright />
        <p className="text-xs">2023 JIB COMPUTER GROUP All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
