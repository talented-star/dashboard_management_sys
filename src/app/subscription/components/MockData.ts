import {
  SubData,
  SubscriptionData,
  SubscriptionListTableColumn,
} from "./MockDataType";
import User_1 from "../../../../public/Subscription/1 (1).png";
import User_2 from "../../../../public/Subscription/1 (2).png";
import User_3 from "../../../../public/Subscription/1 (3).png";
import User_4 from "../../../../public/Subscription/1 (4).png";
import User_5 from "../../../../public/Subscription/1 (5).png";
import User_6 from "../../../../public/Subscription/1 (6).png";

export const subscriptionData: SubData[] = [
  {
    tools: "Louis Vuitton",
    status: "Active",
    subscription: "Bravo",
    users: 9177,
    managerAvatar: User_1,
    manager: "Evan Flores",
    monthlyCost: 452.85,
  },
  {
    tools: "Johnson",
    status: "Danger",
    subscription: "Alfa",
    users: 3064,
    managerAvatar: User_2,
    manager: "Daniela Flores",
    monthlyCost: 563.7,
  },
  {
    tools: "Gucci",
    status: "Pending",
    subscription: "Bravo",
    users: 4080,
    managerAvatar: User_3,
    manager: "Victor Flores",
    monthlyCost: 389.55,
  },
  {
    tools: "Chanel",
    status: "Active",
    subscription: "Alfa",
    users: 2971,
    managerAvatar: User_4,
    manager: "Diana Flores",
    monthlyCost: 416.25,
  },
  {
    tools: "Dior",
    status: "Danger",
    subscription: "Gold",
    users: 5693,
    managerAvatar: User_5,
    manager: "Matthew Flores",
    monthlyCost: 517.3,
  },
  {
    tools: "Prada",
    status: "Active",
    subscription: "Platinum",
    users: 6025,
    managerAvatar: User_6,
    manager: "Joseph Flores",
    monthlyCost: 392.15,
  },
];

export const subscriptionListColumns: SubscriptionListTableColumn[] = [
  { field: "Tools" },
  { field: "Status" },
  { field: "Subscription" },
  { field: "Users" },
  { field: "Manager" },
  { field: "Monthly Cost" },
];
