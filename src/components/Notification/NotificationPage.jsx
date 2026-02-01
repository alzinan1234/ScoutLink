"use client";

import React, { useState, useMemo } from "react";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline"; 
import { notifications as initialNotifications } from "../../components/lib/notificationData"; 
import { useRouter } from "next/navigation";

const NotificationPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [allNotifications, setAllNotifications] = useState(initialNotifications);

  const now = useMemo(() => new Date(), []);

  const getRelativeTime = (timestamp) => {
    const notificationDate = new Date(timestamp);
    const diffMinutes = Math.round((now.getTime() - notificationDate.getTime()) / (1000 * 60));
    const diffHours = Math.round(diffMinutes / 60);

    if (diffMinutes < 60) return `${diffMinutes} min ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    return notificationDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const groupedNotifications = useMemo(() => {
    const filtered = allNotifications.filter(
      (notif) =>
        notif.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notif.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const today = [];
    const yesterday = [];
    const older = [];

    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

    filtered.forEach((notif) => {
      const notifDate = new Date(notif.timestamp);
      if (notifDate >= startOfToday) today.push(notif);
      else if (notifDate >= startOfYesterday) yesterday.push(notif);
      else older.push(notif);
    });

    return { today, yesterday, older };
  }, [allNotifications, searchTerm, now]);

  const handleDeleteNotification = (id) => {
    setAllNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const handleToggleReadStatus = (id) => {
    setAllNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, isRead: !notif.isRead } : notif))
    );
  };

  const NotificationItem = ({ notification }) => (
    <div className="p-5">
      <div className="flex items-center justify-between transition-colors duration-200">
        <div className="flex-grow">
          <p className={`text-base font-semibold ${notification.isRead ? "text-white/50" : "text-white"}`}>
            {notification.title}
          </p>
          <p className={`text-sm ${notification.isRead ? "text-white/40" : "text-white/70"}`}>
            {notification.description}
          </p>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <span className="text-xs text-white/40 whitespace-nowrap">
            {getRelativeTime(notification.timestamp)}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => handleToggleReadStatus(notification.id)}
              className={`${notification.isRead ? "text-[#2444FF]" : "text-purple-400"} hover:opacity-75 p-1 transition-opacity`}
              aria-label="Toggle Read"
            >
              {notification.isRead ? <CheckCircleIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => handleDeleteNotification(notification.id)}
              className="text-red-500 hover:text-red-400 p-1"
              aria-label="Delete"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#19205A] rounded-2xl text-white p-6 sm:p-6 lg:p-8 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button
            className="text-white bg-white/10 rounded-full p-2 hover:bg-[#2444FF] transition-colors"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <h1 className="text-[24px] font-medium">Notifications</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#2444FF] text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-[#2444FF] p-2 rounded-lg hover:bg-opacity-80 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="2" y1="14" x2="6" y2="14"></line><line x1="10" y1="8" x2="14" y2="8"></line><line x1="18" y1="16" x2="22" y2="16"></line></svg>
          </button>
        </div>
      </div>

      {/* List */}
      <div className="space-y-6">
        {Object.entries(groupedNotifications).map(([key, list]) => (
          list.length > 0 && (
            <div key={key}>
              <h2 className="text-lg font-semibold capitalize flex items-center gap-3 mb-3">
                {key}
                <span className="text-[#71F50C] bg-[#71F50C1A] rounded-full text-[12px] px-3 py-1 font-normal">
                  {list.length}
                </span>
              </h2>
              <div className="space-y-2">
                {list.map((notif) => (
                  <div key={notif.id} className="border border-white/5 bg-white/5 rounded-xl">
                    <NotificationItem notification={notif} />
                  </div>
                ))}
              </div>
            </div>
          )
        ))}

        {allNotifications.length === 0 && (
          <p className="text-center text-white/40 py-20">No notifications found.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;