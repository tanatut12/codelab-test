import Image from "next/image";
import React from "react";
import warrantySvg from "@public/assets/svgs/warranty.svg";
import boxSvg from "@public/assets/svgs/box.svg";
import shippingSvg from "@public/assets/svgs/shipping.svg";
import creditSvg from "@public/assets/svgs/credit.svg";
const FooterSection0 = () => {
  return (
    <div className="flex items-center justify-center w-full gap-24">
      <div className="flex items-center justify-center gap-4 py-6">
        <Image src={warrantySvg} alt="warranty" width={40} height={40} />
        <div>
          <p className="text-primary-100 text-2sm font-bold">การรับประกัน</p>
          <p className="text-primary-100 text-2sm font-bold">สินค้าแท้ 100%</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-4">
        <Image src={boxSvg} alt="box" width={40} height={40} />
        <div>
          <p className="text-primary-100 text-2sm font-bold">ช้อปครบ 500 บาท</p>
          <p className="text-primary-100 text-2sm font-bold">
            จัดส่งฟรีทั่วประเทศ
          </p>
          <p className="text-primary-100 text-xs">
            *จัดส่งด้วยบริษัทขนส่งเอกชน
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-6">
        <Image src={shippingSvg} alt="shipping" width={64} height={32} />
        <div>
          <p className="text-primary-100 text-2sm font-bold">
            ช้อปครบ 3,000 บาท
          </p>
          <p className="text-primary-100 text-2sm font-bold">
            ส่งฟรีภายใน 3 ชั่วโมง
          </p>
          <p className="text-primary-100 text-xs">
            *เฉพาะกรุงเทพและปริมณฑล ในเขตพื้นที่กำหนดฯ
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-4">
        <Image src={creditSvg} alt="credit" width={60} height={40} />
        <div>
          <p className="text-primary-100 text-2sm font-bold">ชำระเงินสินค้า</p>
          <p className="text-primary-100 text-2sm font-bold">
            ได้หลากหลายช่องทาง
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection0;
