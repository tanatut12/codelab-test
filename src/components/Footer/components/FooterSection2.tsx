import React from "react";

const FooterSection2 = () => {
  return (
    <div className="flex flex-1 gap-16 text-white text-sm">
      {/* คอลัมน์ 1 */}
      <div>
        <div className="font-bold text-2sm mb-4">เจไอบีออนไลน์</div>
        <div className="mb-2 text-sm cursor-pointer">สินค้า</div>
        <div className="mb-2 text-sm cursor-pointer">ข่าวสาร</div>
        <div className="mb-2 text-sm cursor-pointer">เกี่ยวกับเรา</div>
        <div className="mb-2 text-sm cursor-pointer">ติดต่อเรา</div>
        <div className="mb-2 text-sm cursor-pointer">เจไอบีช้อปยังไง</div>
      </div>
      {/* คอลัมน์ 2 */}
      <div>
        <div className="font-bold text-2sm mb-4">ฝ่ายสนับสนุน</div>
        <div className="mb-2 text-sm cursor-pointer">แผนที่สาขา</div>
        <div className="mb-2 text-sm cursor-pointer">ตำแหน่งงานว่าง</div>
        <div className="mb-2 text-sm cursor-pointer">เช็คประกันสินค้า</div>
        <div className="mb-2 text-sm cursor-pointer">
          นโยบายออนไลน์ ม.ค. 2567
        </div>
      </div>
      {/* คอลัมน์ 3 */}
      <div>
        <div className="font-bold text-2sm mb-4">แผนกบริการลูกค้า</div>
        <div className="mb-2 text-sm cursor-pointer">วิธีการสั่งซื้อสินค้า</div>
        <div className="mb-2 text-sm cursor-pointer">ตรวจสอบสถานะสินค้า</div>
        <div className="mb-2 text-sm cursor-pointer">วิธีการชำระเงิน</div>
        <div className="mb-2 text-sm cursor-pointer">การเปลี่ยนคืนสินค้า</div>
        <div className="mb-2 text-sm cursor-pointer">การใช้คูปองส่วนลด</div>
      </div>
      {/* คอลัมน์ 4 */}
      <div>
        <div className="font-bold mb-4">ติดต่อสอบถาม</div>
        <div className="mb-2">Tiktok : jibofficial</div>
        <div className="mb-2">Youtube : Jib Channel</div>
        <div className="mb-2">Line ID : @jibonline</div>
        <div className="mb-2">Instagram : jib.online</div>
        <div className="mb-2">Facebook : JIB Computer Group</div>
      </div>
    </div>
  );
};

export default FooterSection2;
