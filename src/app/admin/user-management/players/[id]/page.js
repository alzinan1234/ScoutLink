"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ArrowLeft, Search, ChevronDown, User, Edit3, PlayCircle } from "lucide-react";

const PlayerProfile = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState(null);

  const player = {
    name: "Ethan Carter",
    role: "Forward | Team Falcons",
    joined: "Joined 2022 | USA",
    avatar: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&q=80",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=500&q=80",
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=500&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80"
    ],
    timeline: [
      { id: 1, event: "Account Created", date: "May 10, 2022", icon: <User size={14} /> },
      { id: 2, event: "Won MVP Award", date: "Jan 15, 2023", icon: <Edit3 size={14} /> },
      { id: 3, event: "Scouted by Elite FC", date: "July 22, 2023", icon: <PlayCircle size={14} /> },
    ]
  };

  return (
    <div className=" min-h-screen p-6 text-white font-sans bg-[#19205A] rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Users</span> <ChevronRight size={14} /> <span className="text-blue-500">Players</span> <ChevronRight size={14} /> <span className="text-white">Profile</span>
        </div>
        <button onClick={() => router.back()} className="flex items-center gap-2 px-4 py-2 bg-[#19205A] border border-white/10 rounded-xl text-xs font-bold hover:bg-white/5 transition-all">
          <ArrowLeft size={16} /> BACK
        </button>
      </div>

      <div className="bg-[#19205A] rounded-xl p-8 border border-white/5 mb-8 shadow-2xl relative overflow-hidden">
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl">
              <img src={player.avatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">{player.name}</h1>
              <p className="text-blue-400 font-medium mt-1">{player.role}</p>
              <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{player.joined}</p>
              
              <div className="flex gap-3 mt-6">
                <button className="px-6 py-2.5 bg-[#2444FF] rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-lg shadow-blue-600/20">
                  Verify Player
                </button>
                <button className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-all">
                  Suspend
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {["Filter 1", "Filter 2"].map((f) => (
              <div key={f} className="relative">
                <button 
                  onClick={() => setActiveFilter(activeFilter === f ? null : f)}
                  className="bg-[#0B0E2A] border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold flex items-center gap-2"
                >
                  {f} <ChevronDown size={12} />
                </button>
                {activeFilter === f && (
                  <div className="absolute top-full mt-2 w-32 bg-[#0B0E2A] border border-white/10 rounded-xl shadow-2xl z-50">
                    <button className="w-full text-left px-4 py-2 text-[10px] hover:bg-blue-600">Option A</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          Media Gallery <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded-full">12</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {player.gallery.map((img, idx) => (
            <div key={idx} className="group aspect-[4/3] rounded-2xl overflow-hidden bg-[#19205A] border border-white/5 relative">
              <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[10px] font-bold">MATCH HIGHLIGHT #{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#19205A]/30 p-8 rounded-xl border border-white/5">
        <h2 className="text-xl font-bold mb-8">Activity Timeline</h2>
        <div className="space-y-0">
          {player.timeline.map((item, idx) => (
            <div key={item.id} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-2xl bg-[#2444FF] flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                {idx !== player.timeline.length - 1 && <div className="w-0.5 h-12 bg-gradient-to-b from-blue-600 to-transparent my-2" />}
              </div>
              <div className="pt-1">
                <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.event}</h4>
                <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;