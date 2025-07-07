"use client";

import Image from "next/image";
import JibIcon from "@public/assets/svgs/jib-icon.svg";
import JibMenuIcon from "@public/assets/svgs/jib-svg-icon.svg";
import { Input } from "antd";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="bg-primary-gradient-1 h-14 flex items-center justify-between pl-4 pr-4 overflow-hidden">
        <div className="flex-shrink-0">
          <Image src={JibMenuIcon} alt="jib-icon" width={30} height={20} />
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-1 max-w-[1300px] mx-auto min-w-0">
          <div className="flex-shrink-0">
            <Image src={JibIcon} alt="jib-icon" width={58} height={40} />
          </div>
          <div className="flex-1 min-w-0">
            <Input
              prefix={<SearchOutlined size={60} className="text-primary-100" />}
              placeholder="🎉 JIB จำหน่ายสินค้าไอที คอมประกอบ"
              className="w-full"
            />
          </div>
          <div className="flex gap-6 flex-shrink-0">
            <div className="relative">
              <FaRegHeart size={24} className="text-white" />
              <div className="absolute top-2.5 -right-3.5 bg-yellow-dot px-1 text-white text-xs font-bold rounded-full flex items-center justify-center">
                99+
              </div>
            </div>
            <div className="relative">
              <MdOutlineShoppingCart size={24} className="text-white" />
              <div className="absolute top-2.5 -right-3.5 bg-yellow-dot px-1 text-white text-xs font-bold rounded-full flex items-center justify-center">
                99+
              </div>
            </div>
            <div className="relative">
              <FaUserCircle size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
