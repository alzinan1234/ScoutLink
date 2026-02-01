"use client";
import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const EarningSummaryChart = () => {
  const [timeRange, setTimeRange] = useState("Yearly");

  const data = [
    { name: "Jan", new: 480, old: 180 },
    { name: "Feb", new: 220, old: 230 },
    { name: "Mar", new: 180, old: 200 },
    { name: "Apr", new: 280, old: 320 },
    { name: "May", new: 220, old: 380 },
    { name: "Jun", new: 240, old: 480 },
    { name: "Jul", new: 180, old: 350 },
    { name: "Aug", new: 120, old: 310 },
    { name: "Sep", new: 180, old: 360 },
    { name: "Oct", new: 140, old: 230 },
    { name: "Nov", new: 180, old: 410 },
    { name: "Dec", new: 130, old: 440 },
  ];

  return (
    <div className="w-full h-[339px] flex flex-col lg:flex-row gap-4 font-sans antialiased">
      {/* Left Section: Dashboard Chart Area */}
      <div className="flex-[3.5] bg-[#19205A] rounded-xl p-6 border border-white/5 flex flex-col relative overflow-hidden">
        
        {/* Header Row */}
        <div className="flex justify-between items-start z-10">
          <div>
            <h2 className="text-white text-2xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-gray-400 text-[11px] mt-0.5">Overview of Latest Month</p>
          </div>
          
          <div className="flex flex-col items-end gap-3">
            {/* Time Period Selectors */}
            <div className="flex gap-4">
              {["Daily", "Weekly", "Monthly", "Yearly"].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`text-[11px] font-medium transition-colors ${
                    timeRange === range ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            
            {/* Custom Legend */}
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-[#2444FF] rounded-full shadow-[0_0_8px_rgba(36,68,255,0.8)]"></div>
                <span className="text-gray-300 text-[10px] font-medium">New</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-[#FFC37E] rounded-full shadow-[0_0_8px_rgba(255,195,126,0.8)]"></div>
                <span className="text-gray-300 text-[10px] font-medium">Old</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Chart Content */}
        <div className="flex flex-1 mt-2 items-end">
          {/* Left Stats Column */}
          <div className="w-1/4 pb-4">
            <div className="mb-4">
              <p className="text-gray-400 text-[9px] uppercase tracking-[1.5px] font-bold">User Growth</p>
              <p className="text-[#2BA849] text-2xl font-bold mt-0.5">+15%</p>
            </div>
            <div className="mb-6">
              <p className="text-white text-3xl font-bold leading-none">1082</p>
              <p className="text-gray-400 text-[11px] mt-1">New Joiners</p>
            </div>
            <button className="px-4 py-2 border border-white/20 rounded-full text-white text-[10px] font-semibold hover:bg-white/10 transition-all whitespace-nowrap">
              Last Month Summary
            </button>
          </div>

          {/* Chart Drawing Area */}
          <div className="w-3/4 h-[180px] -mr-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2444FF" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#2444FF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorOld" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFC37E" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#FFC37E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="0" stroke="rgba(255,255,255,0.08)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 500 }} 
                  dy={8}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#94a3b8", fontSize: 10 }} 
                  ticks={[0, 100, 200, 300, 400, 500]}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#19205A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", fontSize: "10px" }}
                />
                <Area
                  type="monotone"
                  dataKey="old"
                  stroke="#FFC37E"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorOld)"
                />
                <Area
                  type="monotone"
                  dataKey="new"
                  stroke="#2444FF"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorNew)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Right Section: Sidebar Small Cards */}
      <div className="flex-[1] flex flex-col gap-4">
        {/* Verified Players */}
        <div className="bg-[#19205A] rounded-xl p-6 border border-white/5 flex-1 flex flex-col justify-center">
          <p className="text-gray-400 text-[13px] font-medium">Verified Players</p>
          <p className="text-white text-[32px] font-bold mt-1">2,123</p>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2.5 h-2.5 bg-[#2BA849] rounded-[2px]"></div>
            <span className="text-[#2BA849] text-xs font-extrabold">+3%</span>
          </div>
        </div>

        {/* Pending Verifications */}
        <div className="bg-[#19205A] rounded-xl p-6 border border-white/5 flex-1 flex flex-col justify-center">
          <p className="text-gray-400 text-[13px] font-medium">Pending Verifications</p>
          <p className="text-white text-[32px] font-bold mt-1">12</p>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2.5 h-2.5 bg-[#D14F51] rounded-[2px]"></div>
            <span className="text-[#D14F51] text-xs font-extrabold">-2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningSummaryChart;