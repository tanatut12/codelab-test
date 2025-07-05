"use client";

import Image from "next/image";
import JibIcon from "@public/assets/svgs/jib-icon.svg";
import JibMenuIcon from "@public/assets/svgs/jib-svg-icon.svg";
import { Input } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <div className="bg-primary-gradient-1 h-14 flex items-center justify-between pl-4 pr-4 overflow-hidden">
        <div className="flex-shrink-0">
          <Image src={JibMenuIcon} alt="jib-icon" width={30} height={20} />
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-1 max-w-full mx-auto min-w-0">
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
          <div className="flex gap-2 md:gap-3 flex-shrink-0">
            <FaUserCircle size={24} className="text-white" />
            <FaUserCircle size={24} className="text-white" />
            <FaUserCircle size={24} className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
