"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, Plus, Minus, Navigation, Info } from "lucide-react";

const PerformanceHeatMap = () => {
  const router = useRouter();

  // Navigation handler to the detail page
  const handleZoneClick = (zoneId = "buenos-aires-north") => {
    router.push(`/admin/heat-map-analytics/${zoneId}`);
  };

  const stats = [
    { label: "Total Active Players", value: "2,822", trend: "+ 5%" },
    { label: "Total Matches Recorded", value: "2,123", trend: "+ 3%" },
    { 
      label: "Buenos Aires Training Ground - North Section", 
      value: "Highest Performance Zone", 
      status: "active",
      clickable: true 
    },
    { label: "Top Trending Players", players: ["1. Farhan Ali", "2. Rahim Ahmed", "3. Nasir Ahmed"] }
  ];

  return (
    <div className="p-6 bg-[#19205A] min-h-screen text-white font-sans">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            onClick={() => stat.clickable && handleZoneClick()}
            className={`bg-[#161C45] border border-white/5 p-6 rounded-2xl transition-all ${
              stat.clickable ? "cursor-pointer hover:border-blue-500/50 hover:bg-[#1E255E]/40" : ""
            }`}
          >
            <p className="text-white/60 text-[10px] uppercase tracking-wider mb-2">{stat.label}</p>
            {stat.value && (
              <h3 className={`font-bold ${stat.status ? "text-lg leading-tight" : "text-2xl"}`}>
                {stat.value}
              </h3>
            )}
            {stat.trend && <p className="text-green-500 text-[10px] mt-2 font-bold">{stat.trend}</p>}
            {stat.players && (
              <div className="space-y-1 mt-1">
                {stat.players.map(p => <p key={p} className="text-xs font-medium text-white/80">{p}</p>)}
              </div>
            )}
            {stat.status && (
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-blue-400 uppercase font-bold tracking-tighter">View Details</span>
                </div>
                <Info size={14} className="text-white/20" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Heat Map Container */}
      <div className="bg-[#161C45] rounded-[32px] p-8 border border-white/5 relative shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-xl font-bold">Performance Heat Map</h2>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search zones..." 
                className="bg-[#0B0E29] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none w-48"
              />
            </div>
            <div className="flex items-center gap-1 bg-[#0B0E29] p-1 rounded-xl border border-white/5">
              {['Players', 'Teams', 'Matches'].map((tab) => (
                <button key={tab} className={`px-4 py-2 text-[10px] font-bold uppercase rounded-lg transition-all ${tab === 'Players' ? 'bg-[#2444FF] text-white shadow-lg' : 'text-white/40 hover:text-white'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Visualization with Interactive Zones */}
        <div className="relative w-full aspect-[21/9] bg-[#0B0E29] rounded-[24px] overflow-hidden border border-white/5 group">
          <img 
            src="https://img.freepik.com/free-vector/abstract-technology-particle-background_23-2148426649.jpg" 
            className="w-full h-full object-cover opacity-30 grayscale transition-transform duration-700 group-hover:scale-105" 
            alt="Heat Map Background"
          />
          
          {/* Interactive Heat Zone */}
          <div 
            onClick={() => handleZoneClick()}
            className="absolute top-[40%] left-[30%] cursor-pointer group/zone"
          >
            {/* The Pulse Glow */}
            <div className="absolute -inset-12 bg-red-600/40 blur-[40px] rounded-full animate-pulse group-hover:bg-red-500/60 transition-all" />
            {/* The Center Point */}
            <div className="relative w-4 h-4 bg-white rounded-full border-4 border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)] flex items-center justify-center">
               <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-white text-black text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap">
                 Buenos Aires - North
               </div>
            </div>
          </div>

          <div className="absolute top-[20%] right-[40%] cursor-pointer group/zone">
            <div className="absolute -inset-8 bg-yellow-500/20 blur-[30px] rounded-full group-hover:bg-yellow-400/40" />
            <div className="relative w-3 h-3 bg-white rounded-full border-2 border-yellow-500" />
          </div>
          
          {/* Zoom Controls */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-[#2444FF] rounded-xl hover:bg-blue-500 transition-colors shadow-xl"><Plus size={18}/></button>
            <button className="w-10 h-10 flex items-center justify-center bg-[#2444FF] rounded-xl hover:bg-blue-500 transition-colors shadow-xl"><Minus size={18}/></button>
            <button className="w-10 h-10 flex items-center justify-center bg-[#1E255E] rounded-xl hover:bg-blue-500 transition-colors shadow-xl mt-2"><Navigation size={18} className="rotate-45" /></button>
          </div>

          {/* Activity Legend */}
          <div className="absolute bottom-6 left-6 bg-[#0B0E29]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-4">Activity Level</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" /> 
                <span className="text-[11px] font-bold text-white/70">Low</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]" /> 
                <span className="text-[11px] font-bold text-white/70">Medium</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]" /> 
                <span className="text-[11px] font-bold text-white/70">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceHeatMap;