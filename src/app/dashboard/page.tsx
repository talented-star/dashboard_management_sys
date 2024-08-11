import React from "react";
import { CustomCard as Card } from "./components/Card";
import { DashboardCards } from "./components/MockData";

export default function Page() {
  return (
    <div className="grid grid-cols-5 items-center gap-4 p-8">
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
  );
}
