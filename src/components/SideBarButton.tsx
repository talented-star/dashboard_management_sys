"use client";

import React from "react";
import Link from "next/link";
import { SideBarBtnProps } from "./Mockdata";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideBarButton: React.FC<SideBarBtnProps> = ({
  label,
  setStyle,
  icon,
  link,
}) => {

  const pathname = usePathname().slice(1);
  const isActive = pathname === link;

  return (
    <>
      {setStyle === true ? (
        label === "Dashboard" ? (
          <Link href={`/${link}`}>
            <button
              className={`p-4 m-4 shadow-md shadow-gray-400 rounded-[32px] flex items-center text-left ${
                isActive ? "border border-[#7216F4]" : ""
              } text-[#7216F4] w-[186px] mt-[60px]`}
            >
              <Image src={icon} alt="dashboard" className="mr-4" />
              {label}
            </button>
          </Link>
        ) : (
          <Link href={`/${link}`}>
            <button
              className={`p-1 m-4 shadow-md shadow-gray-400 rounded-[32px] flex justify-center items-center w-[186px] ${
                isActive ? "border border-[#7216F4]" : ""
              }`}
            >
              <div className="bg-[#7216F4] text-white rounded-full m-1">
                <PlusIcon size={40} />
              </div>
              <div className="text-left ml-2 text-black leading-normal">
                {label}
              </div>
            </button>
          </Link>
        )
      ) : (
        <Link href={`/${link}`}>
          <button
            className={`p-4 m-4 text-[14px] w-[186px] rounded-[32px] flex text-left items-center text-shadow-lg text-black shadow-sm hover:shadow-xl hover:border border border-transparent hover:border-black box-border ${
              isActive ? "border border-black" : ""
            }`}
          >
            <Image src={icon} alt={label} className="mr-4" />
            {label}
          </button>
        </Link>
      )}
    </>
  );
};

export default SideBarButton;
