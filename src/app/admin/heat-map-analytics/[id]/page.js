"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ChevronRight, TrendingUp } from "lucide-react";

export default function RegionDetailSheet() {
  const players = [
    { name: "Robert Cary", pos: "Midfielder | Forward", img: "https://i.pravatar.cc/150?u=1", color: "orange" },
    { name: "Caroline", pos: "Midfielder | Forward", img: "https://i.pravatar.cc/150?u=2", color: "yellow" },
    { name: "Steven Comvalius", pos: "Midfielder | Forward", img: "https://i.pravatar.cc/150?u=3", color: "blue" },
    { name: "Caroline", pos: "Midfielder | Forward", img: "https://i.pravatar.cc/150?u=4", color: "orange" },
  ];

  return (
    <div className="p-6 bg-[#19205A] min-h-screen text-white font-sans rounded-xl">
      {/* Breadcrumb Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-sm text-white/40">
          <span>Heat Map Analytics</span> <span>&gt;</span> <span className="text-white">Region Detail Sheet</span>
        </div>
        <Link href="/admin/heat-map-analytics" className="flex items-center gap-2 px-5 py-2.5 bg-[#19205A] border border-white/10 rounded-xl text-sm font-medium hover:bg-white/5 transition-all">
          <ArrowLeft size={18} /> Back
        </Link>
      </div>

      <div className="rounded-[40px] p-10 border border-white/5 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-2">Buenos Aires Training Ground -North Section</h2>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <MapPin size={16} /> Zone ID: zool • 145 activities recorded
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#0B0E29] p-1 rounded-xl border border-white/10">
            {['Today', 'This Week', 'This Month', 'Custom'].map((t) => (
              <button key={t} className={`px-5 py-2 text-xs rounded-lg ${t === 'Today' ? 'bg-[#1E255E] text-white' : 'text-white/40'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Zone Statistics Card */}
        <div className="bg-[#1E255E]/20 rounded-3xl p-8 border border-white/10 mb-10">
          <h3 className="text-lg font-bold mb-6">Zone Statistics</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-3">Heat Intensity</p>
              <div className="flex items-center gap-6">
                <div className="relative flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[35%] bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                </div>
                <span className="text-2xl font-black text-yellow-500">35 %</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-baseline gap-2">
                <span className="text-white/40 text-sm">Average Score</span>
                <span className="text-2xl font-bold">87.5</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-sm">Top Performer</span>
                <div className="flex items-center gap-2 text-white font-bold">
                   <TrendingUp size={16} className="text-blue-400" /> Rahim Ahmed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Player List Grid */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Players in This Zone (4)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {players.map((player, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-[#1E255E]/10 rounded-2xl border border-white/5 group hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-full p-0.5 border-2 ${
                    player.color === 'orange' ? 'border-orange-500' : player.color === 'yellow' ? 'border-yellow-500' : 'border-blue-500'
                  }`}>
                    <img src={player.img} alt={player.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{player.name}</h4> 
                    <p className="text-white/40 text-xs mt-1">{player.pos}</p>
                  </div>
                </div>
                <ChevronRight className="text-white/20 group-hover:text-white transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}