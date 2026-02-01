"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Users,
  Video,
  Trophy,
  Activity,
  Settings,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  FileText // Added for visual consistency if needed later
} from "lucide-react";

const navItems = [
  { name: "Dashboards", href: "/admin", icon: LayoutGrid },
  { 
    name: "Users Management", 
    href: "/admin/user-management", 
    icon: Users,
    hasDropdown: true,
    subItems: [
      { name: "Players", href: "/admin/user-management/players" },
      { name: "Scout / Agent", href: "/admin/user-management/scouts" },
    ],
  },
  { 
    name: "Video Moderation", 
    href: "/admin/moderation", 
    icon: Video,
    hasDropdown: true, // Enabled dropdown
    subItems: [
      { name: "Videos", href: "/admin/video-moderation/videos" },
      { name: "Documents", href: "/admin/video-moderation/documents" },
    ],
  },
  { name: "Leader board", href: "/admin/leaderboard", icon: Trophy },
  { name: "Heat Map Analytics", href: "/admin/heat-map-analytics", icon: Activity },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
    hasDropdown: true,
    subItems: [
      { name: "Profile Settings", href: "/admin/settings/message" },
      // { name: "Account Settings", href: "/admin/settings/account" },
    ],
  },
];

const Sidebar = ({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }) => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState({}); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initialOpenStates = {};
    navItems.forEach(item => {
      // Logic to keep menu open if current path is a sub-item
      if (item.subItems?.some(sub => pathname.startsWith(sub.href))) {
        initialOpenStates[item.name] = true;
      }
    });
    setOpenMenus(initialOpenStates);
  }, [pathname]);

  const toggleDropdown = (name) => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setOpenMenus(prev => ({ ...prev, [name]: true }));
    } else {
      setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
    }
  };

  const isActiveRoute = (item) => {
    if (item.href === "/admin") return pathname === item.href;
    return pathname.startsWith(item.href) || item.subItems?.some(sub => pathname.startsWith(sub.href));
  };

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full bg-[#19205A] text-white z-50
          transition-all duration-300 ease-in-out shadow-xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          ${isCollapsed ? "w-20" : "w-72"}
        `}
      >
        <div className="flex flex-col h-full">
          
          <div className={`flex items-center h-24 px-6 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            {!isCollapsed && (
              <div className="flex items-center gap-2">
                <img src="/sidebar-logo.png" alt="Logo" className="h-[79px] w-[216px]" />
              </div>
            )}

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-1.5 hover:bg-white/10 rounded-lg text-white/70 transition-colors"
            >
              {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2 custom-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item);
              const isMenuOpen = openMenus[item.name];

              return (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`
                          w-full flex items-center min-h-[50px] rounded-xl transition-all
                          ${isCollapsed ? "justify-center px-0" : "gap-4 px-4"}
                          ${isActive ? "bg-[#2444FF] text-white" : "text-white/70 hover:bg-white/5 hover:text-white"}
                        `}
                      >
                        <Icon className="w-5 h-5" strokeWidth={2} />
                        {!isCollapsed && (
                          <>
                            <span className="text-sm font-medium flex-1 text-left">{item.name}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
                          </>
                        )}
                      </button>

                      {/* Dropdown List */}
                      {!isCollapsed && isMenuOpen && (
                        <div className="mt-1 space-y-1 bg-white/5 rounded-xl pb-2">
                          {item.subItems?.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={`flex items-center h-10 mx-2 px-4 text-sm rounded-lg transition-all 
                                  ${isSubActive ? "bg-[#2444FF] text-white" : "text-white/50 hover:text-white hover:bg-white/5"}`}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full mr-3 ${isSubActive ? "bg-white" : "bg-white/30"}`} />
                                {sub.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`
                        flex items-center min-h-[50px] rounded-xl transition-all
                        ${isCollapsed ? "justify-center px-0" : "gap-4 px-4"}
                        ${isActive ? "bg-[#2444FF] text-white shadow-lg shadow-blue-900/20" : "text-white/70 hover:bg-white/5 hover:text-white"}
                      `}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2} />
                      {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
          
          <div className="p-4 mt-auto">
             <button className={`
                flex items-center gap-4 w-full p-4 rounded-xl bg-white/5 text-red-400 hover:bg-red-500/10 transition-all
                ${isCollapsed ? "justify-center px-0" : "px-4"}
             `}>
                <LogOut className="w-5 h-5" />
                {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
             </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;