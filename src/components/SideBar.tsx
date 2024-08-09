import React from 'react';
import { SideBarBtnProps } from './Mockdata';
import SideBarButton from './SideBarButton';
import { link } from 'fs';


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
        icon:"chart-line",
        link:"dashboard"
    },
    {
        label: "Tools",
        setStyle: false,
        icon: "tooltip",
        link: "tool"
    },
    {
        label: "Subscriptions",
        setStyle: false,
        icon: "info-circle",
        link: "subscription"
    },
    {
        label: "Integrations",
        setStyle: false,
        icon: "plug",
        link: "integration"
    },
    {
        label: "Reports",
        setStyle: false,
        icon: "chart-bar",
        link: "reports"
    },
    {
        label: "User Management",
        setStyle: false,
        icon: "user-cog",
        link: "userManage"
    },
    {
        label: "Security",
        setStyle: false,
        icon: "security",
        link: "security"
    }
]
const SideBar: React.FC = () => {
    return (
        <div style={{width : "260px !important"}} className='border-r'>
            {
                sideBarItemList.map((item, index) => (
                    <SideBarButton label={item.label} setStyle={item.setStyle} icon={item.icon} link={item.link} key={index}></SideBarButton>
                ))
            }
        </div>
    )
};

export default SideBar; 