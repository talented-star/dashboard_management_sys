import { StaticImageData } from "next/image";

export interface SideBarBtnProps {
  label: string;
  setStyle: boolean;
  icon: string | StaticImageData;
  link: string;
}

