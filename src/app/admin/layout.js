"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./admin.css";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex bg-[#010642] text-white min-h-screen">
          
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />

          <main
            className={`
              flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out
              ${isCollapsed ? "lg:ml-20" : "lg:ml-72"}
            `}
          >
            <Topbar 
              toggleMobileMenu={() => setIsOpen(true)}
            />

            <div className="p-4 lg:p-8 animate-in fade-in duration-500">
                {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}