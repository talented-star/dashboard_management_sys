import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Consolidation SAAS | Integration",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header title="Integration Capabilities"></Header>
        {children}
    </>
  );
}
