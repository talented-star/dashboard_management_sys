"use client";

import React from "react";
import { CustomCard as Card } from "./components/Card";
import { categoryData, DashboardCards } from "./components/MockData";
import BarChart from "./components/Chart";

export default function Page() {
  return (
    <div className="p-8 grid gap-y-8">
      <div className="grid grid-cols-5 items-center gap-4">
        {DashboardCards.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              currentNum={item.currentNum}
              targetNum={item.targetNum}
              ratingNum={item.ratingNum}
              ratingUnit={item.ratingUnit}
              ratingType={item.ratingType}
              width={item.width}
            ></Card>
          );
        })}
      </div>
      <div className="pt-6 pl-4 pb-7 pr-8 shadow-lg rounded-[14px]">
        <p className="leading-[18.75px]">
          <b>Category Breakdown</b>
        </p>
        <div className="flex justify-between items-center pl-[90px] mt-6">
          <BarChart />
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 w-[80%]">
            {categoryData.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-between text-[17px] leading-5">
                  <div className="gap-3 flex items-center">
                    <div 
                    className={`p-2 rounded-[10px]`}
                    style={{ backgroundColor: item.color}}
                    ></div>
                    <div>{item.description}</div>
                  </div>
                  <div><b>{`${item.progressive}%`}</b></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
