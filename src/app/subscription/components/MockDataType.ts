import { StaticImageData } from "next/image";
import { ColumnDef } from "@tanstack/react-table";

export interface ButtonProps {
    title: string;
    className?: string;
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
    status: "Active" | "Danger" | "Pending";
    subscription: string;
    users: number;
    managerAvatar: string | StaticImageData;
    manager: string;
    monthlyCost: number;
}

export interface SubscriptionListTableColumn {
    field: string;
}

export interface SubscriptionListTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}