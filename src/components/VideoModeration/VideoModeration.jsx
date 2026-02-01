"use client";
import React from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const videoData = [
  { id: 1, name: "John Doe", position: "Forward", duration: "00:05:30", category: "Match", status: "Approved", image: "/avatar1.png" },
  { id: 2, name: "Alex Carter", position: "Midfielder", duration: "00:03:45", category: "Training", status: "Pending", image: "/avatar2.png" },
  // ... add more mock data as needed to match
];

const FilterButton = ({ label }) => (
  <button className="flex items-center gap-2 px-4 py-2 bg-[#1E255E] border border-white/10 rounded-lg text-sm text-white/70 hover:bg-white/5">
    {label} <ChevronDown size={16} />
  </button>
);

const VideoModeration = () => {
  return (
    <div className="p-6  min-h-screen text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-semibold">Videos Management</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-[#1E255E] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <FilterButton label="Region" />
          <FilterButton label="Country" />
          <FilterButton label="City" />
          <FilterButton label="Age" />
        </div>
      </div>

      <div className="bg-[#19205A] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-white/40 text-xs uppercase tracking-wider border-b border-white/5">
              <th className="px-6 py-4 font-medium">No</th>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Position</th>
              <th className="px-6 py-4 font-medium">Duration</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {videoData.map((item, idx) => (
              <tr key={item.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-sm text-white/70">{idx + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 overflow-hidden border border-white/10" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-white/70">{item.position}</td>
                <td className="px-6 py-4 text-sm text-white/70">{item.duration}</td>
                <td className="px-6 py-4 text-sm text-white/70">{item.category}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase ${
                    item.status === 'Approved' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <Link 
                      href={`/admin/video-moderation/videos/${item.id}`}
                      className="px-4 py-1.5 bg-[#1E255E] text-orange-400 text-xs rounded hover:bg-[#252D6F] transition-colors"
                    >
                      View
                    </Link>
                    <button className="px-4 py-1.5 bg-[#2D1B36] text-red-500 text-xs rounded hover:bg-red-900/20 transition-colors">Reject</button>
                    <button className="px-4 py-1.5 bg-[#1B2D4F] text-blue-400 text-xs rounded hover:bg-blue-900/20 transition-colors">Approve</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination logic as seen in image_153e50.png */}
        <div className="px-6 py-4 flex items-center justify-end gap-2 border-t border-white/5">
          <button className="p-2 hover:bg-white/5 rounded-lg text-white/40"><ChevronLeft size={18}/></button>
          <button className="w-8 h-8 rounded-lg bg-[#2444FF] text-sm">1</button>
          <button className="w-8 h-8 rounded-lg hover:bg-white/5 text-sm text-white/40">2</button>
          <button className="w-8 h-8 rounded-lg hover:bg-white/5 text-sm text-white/40">3</button>
          <span className="text-white/40 mx-1">...</span>
          <button className="w-8 h-8 rounded-lg hover:bg-white/5 text-sm text-white/40">440</button>
          <button className="p-2 hover:bg-white/5 rounded-lg text-white/40"><ChevronRight size={18}/></button>
        </div>
      </div>
    </div>
  );
};

export default VideoModeration;