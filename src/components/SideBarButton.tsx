import React from "react";
import Link from "next/link";
import { SideBarBtnProps } from "./Mockdata";
import { PlusIcon, } from "lucide-react";

const SideBarButton: React.FC<SideBarBtnProps> = ({
  label,
  setStyle,
  icon,
  link,
}) => {
  return (
    <>
      {setStyle === true ? (
        label === "Dashboard" ? (
          <Link href={`/${link}`}>
            <button className="p-4 m-4 shadow-md shadow-gray-400 rounded-[32px] flex justify-between items-center w-[184px] mt-[60px]">
              {label}
            </button>
          </Link>
        ) : (
          <Link href={`/${link}`}>
            <button className="p-1 m-4 shadow-md shadow-gray-400 rounded-[32px] flex justify-between items-center w-[184px]">
              <div className="bg-[#7216F4] text-white rounded-full m-1">
                <PlusIcon size={40}></PlusIcon>
              </div>
              <div className="text-left ml-2 text-black leading-normal">{label}</div>
            </button>
          </Link>
        )
      ) : (
        <Link href={`/${link}`}>
          <button className="p-4 m-4 text-[14px] w-[184px] hover:border hover:border-black rounded-[32px] flex justify-between items-center text-shadow-lg text-black shadow-sm hover:shadow-xl">
            {/* <div>{icon}</div> */}
            {label}
          </button>
        </Link>
      )}
    </>
  );
};

export default SideBarButton;
