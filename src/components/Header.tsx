"use client"

import React from "react";
import { CaretDown } from "@phosphor-icons/react";
import Avatar from "../../public/user.png"
import Image from "next/image";

interface headerProps {
    title: string;
}

const Header: React.FC<headerProps> = ({ title }) => {
    return (

        title === "Dashboard" ?

        <header className="flex justify-between border-b items-center py-[20px] px-[34px]" style={{width: "calc(100vw - 280px)"}}>
            <h3 className="text-[32px] leading-[37.5px] font-normal font-robot">{title}</h3>
            <div className="flex gap-[10px] items-center">
                <input className="p-4 pl-12 leading-4 rounded-[55px] shadow-md focus:outline-none w-[330px]" placeholder="Search for anything..."></input>
                <div className="p-6 rounded-full shadow-md cursor-pointer hover:shadow-lg"></div>
                <div className="flex justify-between items-center gap-[10px]">
                    <Image src={Avatar} width={38} alt={'user'} className="rounded-full"></Image>
                    <div className="text-[12px] leading-5">
                        <p>Alex meian</p>
                        <p className="text-gray-400">Product Manager</p>
                    </div>
                    <CaretDown size={16} className="ml-[14px]"></CaretDown>
                </div>
            </div>
        </header>
        : 
        <header className="flex justify-between items-center py-[20px] px-[34px]" style={{width: "calc(100vw - 280px)"}}>
            <h3 className="text-[32px] leading-[37.5px] font-normal font-robot">{title}</h3>
            <div className="flex gap-[10px] items-center">
                <input className="p-4 pl-12 leading-4 rounded-[55px] shadow-md focus:outline-none w-[330px]" placeholder="Search for anything..."></input>
                <div className="p-6 rounded-full shadow-md cursor-pointer hover:shadow-lg"></div>
                <div className="flex justify-between items-center gap-[10px]">
                    <Image src={Avatar} width={38} alt={'user'} className="rounded-full"></Image>
                    <div className="text-[12px] leading-5">
                        <p>Alex meian</p>
                        <p className="text-gray-400">Product Manager</p>
                    </div>
                    <CaretDown size={16} className="ml-[14px]"></CaretDown>
                </div>
            </div>
        </header>
    )
};

export default Header;
