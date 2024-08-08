import type { Metadata } from 'next';
import { Footer } from "@/components/Footer";
import './globals.css';


export const metadata: Metadata = {
  title: 'Consolidation SAAS',
  description: 'This website is dashboard management system for the shop manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
