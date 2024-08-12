"use client"

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { DropdownMenuProps } from "./MockDataType";

const CustomDropdown: React.FC<DropdownMenuProps> = ({data}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Integration List</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.map((item) =>( 
           <DropdownMenuItem key={item.id}>{item.title}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdown;
