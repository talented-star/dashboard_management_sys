import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Consolidation SAAS",
  description:
    "This website is dashboard management system for the shop manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideBar />
          <div>
            <Header title={"DashBoard"} />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
