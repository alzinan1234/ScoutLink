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
  // Sidebar states
  const [isOpen, setIsOpen] = useState(false);           // Mobile visibility
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop width
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Main Wrapper: Sidebar + Content */}
        <div className="flex bg-[bg-[#010642] ] text-black min-h-screen">
          
          {/* Sidebar: Using the 19205A and 2444FF logic */}
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />

          {/* Main Content Area */}
          <main
            className={`
              flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out
              ${isCollapsed ? "lg:ml-20" : "lg:ml-72"}
            `}
          >
            {/* Topbar: You can pass setIsOpen(true) to a burger icon here for mobile */}
            <Topbar 
              onBellClick={() => setShowNotifications(true)} 
              toggleMobileMenu={() => setIsOpen(true)}
            />

            {/* Dynamic Content Container */}
            <div className="p-4 lg:p-8">
              {showNotifications ? (
                <div className=" rounded-2xl p-6 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="mb-4 text-[#2444FF] font-medium flex items-center gap-2 hover:underline"
                  >
                    ← Back to Dashboard
                  </button>
                  <h2 className="text-xl font-bold text-[#19205A]">Notifications</h2>
                  <div className="mt-4 text-gray-500">No new notifications.</div>
                </div>
              ) : (
                <div className="animate-in fade-in duration-500">
                  {children}
                </div>
              )}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}