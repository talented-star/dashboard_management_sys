import { DashboardCardData, CategoryData, ProjectData } from "./MockDataType";
import CardIcon1 from "../../../../public/Dashboard/Card1.svg";
import CardIcon2 from "../../../../public/Dashboard/Card2.svg";
import CardIcon3 from "../../../../public/Dashboard/Card3.svg";

const DashboardCards: DashboardCardData[] = [
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

const categoryData: CategoryData[] = [
  {
    color: "#2563EB",
    description: "Key title goes here",
    progressive: 40
  },
  {
    color: "#C084FC",
    description: "Key title goes here",
    progressive: 60
  },
  {
    color: "#FB923C",
    description: "Key title goes here",
    progressive: 100
  },
  {
    color: "#22C55E",
    description: "Key title goes here",
    progressive: 20
  }
];

const projectData: ProjectData[] = [
  {
    name: "Nelsa web development",
    manager: "Om Prakash sao",
    dueStatus: new Date("2023-05-25"),
    status: "Ongoing",
    progress: 60
  },
  {
    name: "Datascale AI app",
    manager: "Neilsan Mando",
    dueStatus: new Date("2023-07-20"),
    status: "Delayed",
    progress: 35
  },
  {
    name: "Media channel branding",
    manager: "Tiruveylly Priya",
    dueStatus: new Date("2023-7-13"),
    status: "At risk",
    progress: 68
  },
  {
    name: "Corlax iOS app development",
    manager: "Matte Hannery",
    dueStatus: new Date("2023-12-30"),
    status: "Completed",
    progress: 100
  },
  {
    name: "Website build Development",
    manager: "Sukumar Mao",
    dueStatus: new Date("2024-3-15"),
    status: "Ongoing",
    progress: 60
  }
]


export { DashboardCards, categoryData, projectData };