import React from 'react';
import { SideBarBtnProps } from './Mockdata';
import SideBarButton from './SideBarButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Dashboard from "../../public/Home/dashboard.svg";
import Tool from "../../public/Home/tools.svg";
import Subscription from "../../public/Home/subscription.svg";
import Integration from "../../public/Home/integration.svg";
import Reports from "../../public/Home/reports.svg";
import Security from "../../public/Home/security.svg";
import UserManagement from "../../public/Home/userManagement.svg";



const sideBarItemList: SideBarBtnProps[] = [
    {
        label: "Create New Project",
        setStyle: true,
        icon:"plus",
        link:"addProject"
    },
    {
        label: "Dashboard",
        setStyle: true,
        icon: Dashboard,
        link:"dashboard"
    },
    {
        label: "Tools",
        setStyle: false,
        icon: Tool,
        link: "tool"
    },
    {
        label: "Subscriptions",
        setStyle: false,
        icon: Subscription,
        link: "subscription"
    },
    {
        label: "Integrations",
        setStyle: false,
        icon: Integration,
        link: "integration"
    },
    {
        label: "Reports",
        setStyle: false,
        icon: Reports,
        link: "reports"
    },
    {
        label: "User Management",
        setStyle: false,
        icon: UserManagement,
        link: "userManage"
    },
    {
        label: "Security",
        setStyle: false,
        icon: Security,
        link: "security"
    }
]
const SideBar: React.FC = () => {
    return (
        <div style={{width : "260px !important"}} className='border-r relative pt-[140px] px-7'>
            <button className="top-6 -right-5 absolute border rounded-full p-2 bg-white text-black shadow-md hover:bg-gray-200 hover:text-white hover:shadow-lg">
                <ChevronLeft />
            </button>
            {
                sideBarItemList.map((item, index) => (
                    <SideBarButton label={item.label} setStyle={item.setStyle} icon={item.icon} link={item.link} key={index}></SideBarButton>
                ))
            }
        </div>
    )
};

export default SideBar; 