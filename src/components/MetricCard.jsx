"use client";

import React from "react";

export default function MetricCard({
  title,
  value,
  percentageChange,
  percentageDirection = "up",
}) {
  // Logic for color based on direction (matching your image colors)
  const isUp = percentageDirection === "up";
  const indicatorColor = isUp ? "bg-[#2BA849]" : "bg-[#D14F51]";
  const textColor = isUp ? "text-[#2BA849]" : "text-[#D14F51]";

  return (
    <div 
      className="w-full bg-[#19205A] p-6 rounded-xl border border-white/10 flex flex-col justify-between transition-all hover:border-white/20"
      style={{ minHeight: "160px" }}
    >
      {/* Label/Title */}
      <div>
        <h3 className="text-gray-400 text-sm font-medium tracking-wide">
          {title}
        </h3>
      </div>

      {/* Main Value */}
      <div className="my-2">
        <span className="text-white text-4xl font-bold tracking-tight">
          {typeof value === "number" ? value.toLocaleString() : value}
        </span>
      </div>

      {/* Percentage Indicator Area */}
      <div className="flex items-center gap-2 mt-2">
        {/* The Small Square Box from the image */}
        <div className={`w-3 h-3 rounded-sm ${indicatorColor}`} />
        
        {/* The Percentage Text */}
        <span className={`${textColor} text-sm font-bold`}>
          {isUp ? "+" : "-"}{percentageChange}%
        </span>
      </div>
    </div>
  );
}