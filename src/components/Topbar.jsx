"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

export default function Topbar({ onBellClick, toggleMobileMenu }) {
  const router = useRouter();

  const handleUserImageClick = () => {
    router.push("/investor-admin/settings/profile"); 
  };

  return (
    <header className="flex items-center justify-between lg:justify-end bg-[#19205A] p-4 border-b border-white/10 shadow-md">
      
      {/* Mobile Menu Toggle (Visible only on small screens) */}
      <button 
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        <Menu size={24} />
      </button>

      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <div
          className="relative cursor-pointer flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-[38px] py-[5px] px-[8px] transition-all"
          onClick={onBellClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 30"
            fill="none"
          >
            <path
              d="M1.37339 18.6927C1.08985 20.5514 2.35749 21.8415 3.90957 22.4844C9.85991 24.9494 18.1404 24.9494 24.0908 22.4844C25.6428 21.8415 26.9105 20.5514 26.6269 18.6927C26.4527 17.5504 25.591 16.5992 24.9527 15.6704C24.1165 14.4389 24.0335 13.0956 24.0333 11.6665C24.0333 6.14366 19.5413 1.6665 14.0002 1.6665C8.459 1.6665 3.967 6.14366 3.967 11.6665C3.96687 13.0956 3.88379 14.4389 3.04764 15.6704C2.40928 16.5992 1.54765 17.5504 1.37339 18.6927Z"
              stroke="#FFFFFF"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.6665 24.3335C9.27782 26.6338 11.4339 28.3335 13.9998 28.3335C16.5658 28.3335 18.7219 26.6338 19.3332 24.3335"
              stroke="#FFFFFF"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-white bg-[#2444FF] rounded-full px-2.5 py-0.5 text-xs font-bold">
            8
          </span>
        </div>

        {/* User Profile Image */}
        <div
          className="relative rounded-full cursor-pointer border-2 border-white/20 hover:border-[#2444FF] transition-all overflow-hidden w-10 h-10"
          onClick={handleUserImageClick}
        >
          <Image
            src="/image/userImage.png"
            alt="User Icon"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}