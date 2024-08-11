import Image from "next/image";
import React from "react";
import { DashboardCardData } from "./MockDataType";
import ArrowUp from "../../../../public/Dashboard/arrow-up.svg";
import ArrowDown from "../../../../public/Dashboard/arrow-down.svg";

const CustomCard: React.FC<DashboardCardData> = (data) => {
  return (
    <>
      <div className={`rounded-[14px] p-4 shadow-md border-2 border-spacing-2 ${data.width}`}>
        <Image src={data.icon} alt="card1" className="mb-[10px]"></Image>
        <p className="text-[14px] text-[#797979] my-[10px]">{data.title}</p>
        {data.title === "Tools" ? (
          <div className="text-[28px] my-[10px]">{`${data.ratingUnit}${data.currentNum}`}</div>
        ) : (
            data.ratingUnit !== undefined ?
            <div className="text-[28px] my-[10px]">{`${data.currentNum} / ${data.targetNum} ${data.ratingUnit}`}</div>
            :
            <div className="text-[28px] my-[10px]">{`${data.currentNum} / ${data.targetNum}`}</div>
        )}
        <div className="text-[10px] text-[#060606] flex items-center">
          {data.ratingType === "increase" ? <Image src={ArrowUp} alt="ratingType"></Image> : <Image src={ArrowDown} alt="ratingType"></Image>}
          <span>{`${data.ratingNum}% ${data.ratingType} from last month`}</span>
        </div>
      </div>
    </>
  );
};

export { CustomCard };
