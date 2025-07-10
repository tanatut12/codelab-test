"use client";

import Image from "next/image";
import JibIcon from "@public/assets/svgs/jib-icon.svg";
import JibMenuIcon from "@public/assets/svgs/jib-svg-icon.svg";
import { Input } from "antd";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { brandHighlight, searchProduct } from "@src/constants/search.constants";
import disTag from "@public/assets/svgs/search/disTag.svg";
import { formatNumber } from "@src/utils/format.util";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const showSearchModal = isSearchOpen && searchValue.trim().length > 0;

  return (
    <>
      <div className="bg-primary-gradient-1 h-14 flex items-center justify-between px-2 laptop:px-4 overflow-hidden relative z-50">
        <div className="flex-shrink-0">
          <Image src={JibMenuIcon} alt="jib-icon" width={30} height={20} />
        </div>
        <div className="flex items-center gap-2 laptop:gap-4 flex-1 max-w-[95vw] laptop:max-w-[1200px] laptop-lg:max-w-[1240px] app:max-w-[1300px] mx-auto min-w-0">
          <div className="flex-shrink-0">
            <Image src={JibIcon} alt="jib-icon" width={58} height={40} />
          </div>
          <div className="flex-1 min-w-0">
            <Input
              prefix={<SearchOutlined size={60} className="text-primary-100" />}
              placeholder="🎉 JIB จำหน่ายสินค้าไอที คอมประกอบ"
              className="w-full"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => {
                setTimeout(() => setIsSearchOpen(false), 200);
              }}
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

      {showSearchModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setIsSearchOpen(false)}
          />

          <div className="fixed top-[70px] left-2 right-2 laptop:left-4 laptop:right-4 bg-white max-w-[95vw] laptop:max-w-[1200px] laptop-lg:max-w-[1240px] app:max-w-[1300px] mx-auto z-50 shadow-lg max-h-[80vh] overflow-y-auto rounded-xl">
            <div className="mx-auto p-4">
              <div className="min-h-[400px]">
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    ค้นหาล่าสุด
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-primary-100 px-4 font-bold bg-light-300 rounded-full text-2sm cursor-pointer">
                      คอมพิวเตอร์
                    </span>
                    <span className="text-primary-100 px-4 font-bold bg-light-300 rounded-full text-2sm cursor-pointer">
                      โน๊ตบุ๊ค
                    </span>
                    <span className="text-primary-100 px-4 font-bold bg-light-300 rounded-full text-2sm cursor-pointer">
                      xxxxxxxxxxxx
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    การตรวจสอบ
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-primary-100 px-4 font-bold bg-light-300 rounded-full text-2sm cursor-pointer">
                      การ์ดจอคุณภาพสูง 10,000
                    </span>
                    <span className="text-primary-100 px-4 font-bold bg-light-300 rounded-full text-2sm cursor-pointer">
                      Notebook สำหรับเล่นเกม
                    </span>
                    <span className="text-primary-100 px-4 font-bold bg-light-300 rounded-full text-2sm cursor-pointer">
                      xxxxxxxxxxxx
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    แบรนด์ยอดนิยม
                  </h4>
                  <div className="flex flex-wrap items-center gap-4">
                    {brandHighlight.map((brand) => (
                      <div key={brand.id}>
                        <Image
                          src={brand.image}
                          alt={brand.name}
                          width={111}
                          height={32}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    สินค้าแนะนำ
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {searchProduct.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white border max-w-[152px] rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="aspect-square rounded-lg mb-2 flex items-center justify-center">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={128}
                            height={128}
                          />
                        </div>
                        <div className="text-[10px] text-search-100 mb-1 line-clamp-3">
                          {product.name}
                        </div>
                        {product.discount && (
                          <span
                            className="text-[7px] text-white text-xs px-3"
                            style={{
                              backgroundImage: `url(${disTag.src})`,
                              backgroundSize: "100% 100%",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                            }}
                          >
                            -{product.discount}%
                          </span>
                        )}
                        <div className="flex justify-between items-center gap-1">
                          <span className="text-sm font-bold line-through text-gray-500">
                            ฿ {formatNumber(product.realPrice)}
                          </span>
                          <span className="text-2sm font-bold text-search-200">
                            ฿ {formatNumber(product.price)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
