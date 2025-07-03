import Image from "next/image";
import React from "react";
import jibShSvg from "@public/assets/svgs/jib-backsh.svg";
import dbdSvg from "@public/assets/svgs/dbd.svg";
import ocpbSvg from "@public/assets/svgs/ocpb-log.svg";

const FooterSection1 = () => {
  return (
    <div>
      <Image
        className="mb-2"
        src={jibShSvg}
        alt="jib-backsh"
        width={198}
        height={64}
      />
      <p className="text-xl text-white font-bold mb-4">
        J.I.B Computer Group Co. ,Ltd
      </p>
      <p className="text-white text-sm mb-1">
        เลขที่ 21 ถนนพหลโยธิน แขวงสนามบิน เขตดอนเมือง
      </p>
      <p className="text-white text-sm mb-1">กทม. 10210</p>
      <p className="text-white text-sm">Tel. : 02-017-4444</p>
      <div className="mt-8">
        <p className="text-white text-[16px] font-bold mb-4">
          เครื่องหมายรับรอง
        </p>
        <div className="flex gap-4">
          <Image src={ocpbSvg} alt="ocpb" width={48} height={51} />
          <Image src={dbdSvg} alt="dbd" width={127} height={51} />
        </div>
      </div>
    </div>
  );
};

export default FooterSection1;
