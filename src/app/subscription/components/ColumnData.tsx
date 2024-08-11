"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SubData } from "./MockDataType";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import User_1 from "../../../../public/Subscription/1 (1).png";

export const columns: ColumnDef<SubData>[] = [
  {
    accessorKey: "tools",
    header: "Tools",
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const val: string = row.getValue("status");
      const setBorderColorByStatus = (status: string) => {
        if (status === "Active") return "#1A932E30";
        if (status === "Danger") return "#E65F2B30";
        if (status === "Pending") return "#E5AE2130";
      };

      const setTextColorByStatus = (status: string) => {
        if (status === "Active") return "#1A932E";
        if (status === "Danger") return "#E65F2B";
        if (status === "Pending") return "#E5AE21";
      };
      return (
        <div
          className="text-center rounded-lg w-[80%] mx-auto"
          style={{
            backgroundColor: setBorderColorByStatus(val),
            color: setTextColorByStatus(val),
          }}
        >
          {val}
        </div>
      );
    },
  },
  {
    accessorKey: "subscription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Subscription
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const val: string = row.getValue("subscription");
      return <div className="text-center">{val}</div>;
    },
  },
  {
    accessorKey: "users",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Users
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const val = parseFloat(row.getValue("users"));
      return (
        <div className="text-center border rounded-md w-[70%] mx-auto">
          {val}
        </div>
      );
    },
  },
  {
    accessorKey: "manager",
    header: "Manager",
    cell: ({ row }) => {
      const val: string = row.getValue("manager");
      return (
        <div className="text-left flex gap-3">
          <Image src={User_1} alt="user" className="rounded-full"></Image>
          {val}
        </div>
      );
    },
  },
  {
    accessorKey: "monthlyCost",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Monthly Cost
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("monthlyCost"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Delete Subscription</DropdownMenuItem>
            <DropdownMenuItem>Edit Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
