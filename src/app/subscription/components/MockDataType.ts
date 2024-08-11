import { StaticImageData } from "next/image";

export interface ButtonProps {
    title: string;
}

export interface SubscriptionData {
    tools: string;
    cost: number;
    annual: string;
    subscription: number;
    startDate: Date;
    renewalData: Date;
}

export interface SubData {
    tools: string;
    status: string;
    subscription: string;
    users: number;
    managerAvatar: string | StaticImageData;
    manager: string;
    monthlyCost: number;
}