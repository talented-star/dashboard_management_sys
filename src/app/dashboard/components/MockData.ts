import { DashboardCardData } from "./MockDataType";
import CardIcon1 from "../../../../public/Dashboard/Card1.svg";
import CardIcon2 from "../../../../public/Dashboard/Card2.svg";
import CardIcon3 from "../../../../public/Dashboard/Card3.svg";

export const DashboardCards: DashboardCardData[] = [
  {
    title: "Tools",
    icon: CardIcon1,
    currentNum: 5300098,
    ratingUnit: "$",
    ratingNum: 12,
    ratingType: "increase",
    width: "col-span-2"
  },
  {
    title: "Cost",
    icon: CardIcon2,
    targetNum: 100,
    currentNum: 95,
    ratingNum: 10,
    ratingType: "decrease",
  },
  {
    title: "Renewals",
    icon: CardIcon3,
    targetNum: 1022,
    currentNum: 1300,
    ratingUnit: "Hrs",
    ratingNum: 8,
    ratingType: "increase",
    width: "col-span-2"
  },
];
