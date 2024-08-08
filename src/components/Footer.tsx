"use client"

import React from "react";
import Logo from "../../public/Logo LIFT.svg";
import Image from "next/image";
import {ArrowFatRight, TwitterLogo, LinkedinLogo, FacebookLogo} from "@phosphor-icons/react";

const Footer: React.FC = () => {
    return (
        <footer className="py-[100px] px-[183px]">
            <div className="flex justify-between mb-[35px]">
                <div className="float-start">
                    <Image src={Logo} alt="logo" className="mb-5"/>
                    {/* <Logo className="mb-[20px]"/> */}
                    <p className="text-[20px] font-normal leading-8 my-[10px]">+1 (7635) 547-12-97</p>
                    <p className="text-[16px] font-normal leading-8">support@lift.agency</p>
                </div>
                <div className="my-4">
                    <p className="text-[18px] font-semibold leading-[28px] mb-[25px]">Quick Links</p>
                    <div className="grid grid-cols-2 place-content-between gap-y-11 gap-x-40 text-[#0A142F]">
                        <p className="text-[16px] font-normal leading-[18.4px]">Product</p>
                        <p className="text-[16px] font-normal leading-[18.4px]">Company</p>
                        <p className="text-[16px] font-normal leading-[18.4px]">Information</p>
                        <p className="text-[16px] font-normal leading-[18.4px]">Lift Media</p>
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-[18px] font-semibold leading-[28px] mb-[25px]"><b>Subscribe</b></p>
                    <div className="flex justify-center align-middle">
                        <input 
                            className="pl-4 py-4 pr-[67px] border border-gray-300 rounded-l-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#7216F4] focus:border-transparent"
                            placeholder="Get product Updates"
                        ></input>
                        <button className="p-4 bg-[#7216F4] text-white rounded-r-md border border-[#7216F4] hover:bg-white hover:text-[#7216F4] hover:border-[#7216F4] focus:outline-none">
                            <ArrowFatRight size={18}></ArrowFatRight>
                        </button>
                    </div>
                </div>
            </div>
            <hr className="my-[35px]"></hr>
            <div className="flex justify-between items-center">
                <div className="flex justify-between gap-2">
                    <div className="p-3 border border-gray-300 rounded-full text-[#0A142F] hover:cursor-pointer hover:text-white hover:bg-[#0A142F]">
                        <LinkedinLogo size={24} weight="fill"></LinkedinLogo>
                    </div>
                    <div className="p-3 border border-gray-300 rounded-full text-[#0A142F] hover:cursor-pointer hover:text-white hover:bg-[#0A142F]">
                        <FacebookLogo size={24} weight="fill"></FacebookLogo>
                    </div>
                    <div className="p-3 border border-gray-300 rounded-full text-[#0A142F] hover:cursor-pointer hover:text-white hover:bg-[#0A142F]">
                        <TwitterLogo size={24} weight="fill"></TwitterLogo>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3 text-[16px]">
                    <p>A product of</p>
                    <Image src={Logo} alt="logo" height={20}></Image>
                </div>
                <p>© 2020 Lift Media. All rights reserved</p>
            </div>
        </footer>
    )
};

export {Footer};