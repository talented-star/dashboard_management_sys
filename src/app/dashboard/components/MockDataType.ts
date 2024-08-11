import { StaticImageData } from "next/image";

export interface DashboardCardData {
    title : string;
    icon: string | StaticImageData;
    targetNum?: number;
    currentNum: number;
    ratingUnit?: string;
    ratingNum: number;
    ratingType: string;
    width?: string;
};

export interface CategoryData {
    color: string;
    description: string;
    progressive: number;
}

