import React from "react";
import { SideBarBtnProps } from "./Mockdata";
import Link from "next/link";

const SideBarButton: React.FC<SideBarBtnProps> = ({
  label,
  setStyle,
  icon,
  link,
}) => {
  return (
    <>
      {setStyle === true ? (
        <Link href={`/${link}`}>
          <button className="p-4 m-4 shadow-md shadow-gray-400 rounded-[32px] flex justify-between items-center w-[184px] ">
            {/* <div>{icon}</div> */}
            {label}
          </button>
        </Link>
      ) : (
        <Link href={`/${link}`}>
          <button className="p-4 m-4 text-[14px] w-[184px] border border-black rounded-[32px] flex justify-between items-center text-shadow-lg text-black shadow-md hover:shadow-xl">
            {/* <div>{icon}</div> */}
            {label}
          </button>
        </Link>
      )}
    </>
  );
};

export default SideBarButton;
