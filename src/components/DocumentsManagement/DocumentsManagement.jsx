"use client";
import React from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const docData = [
  { id: 1, name: "John Doe", pos: "Forward", type: "ID", date: "12/4/17", status: "Approved" },
  { id: 2, name: "Alex Carter", pos: "Midfielder", type: "Certificate", date: "1/28/17", status: "Pending" },
  { id: 3, name: "Mia Johnson", pos: "Defender", type: "Passport", date: "6/19/14", status: "Approved" },
  // ... more mock data
];

const DocumentsManagement = () => {
  return (
    <div className="p-6  min-h-screen text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">Documents Management</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-[#19205A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64"
            />
          </div>
          {["Region", "Country", "City", "Age"].map((filter) => (
            <button key={filter} className="flex items-center gap-2 px-4 py-2.5 bg-[#19205A] border border-white/10 rounded-xl text-sm text-white/70 hover:bg-white/5 transition-colors">
              {filter} <ChevronDown size={14} className="opacity-40" />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#19205A] border border-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-white/40 text-[10px] uppercase tracking-[0.2em] border-b border-white/5">
              <th className="px-8 py-5">No</th>
              <th className="px-6 py-5">Name</th>
              <th className="px-6 py-5">Position</th>
              <th className="px-6 py-5">Document Type</th>
              <th className="px-6 py-5">Joining Date</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {docData.map((item, idx) => (
              <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-8 py-5 text-sm text-white/60">{idx + 1}</td>
                <td className="px-6 py-5 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-white/10" />
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-white/60">{item.pos}</td>
                <td className="px-6 py-5 text-sm text-white/60">{item.type}</td>
                <td className="px-6 py-5 text-sm text-white/60">{item.date}</td>
                <td className="px-6 py-5">
                  <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase ${
                    item.status === 'Approved' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-2">
                    <Link href={`/admin/video-moderation/documents/${item.id}`} className="px-6 py-1.5 bg-[#3B3A5A] text-[#B892FF] text-xs rounded-lg hover:bg-opacity-80 transition-all">View</Link>
                    <button className="px-4 py-1.5 bg-[#3A2A3A] text-red-500 text-xs rounded-lg hover:bg-opacity-80">Reject</button>
                    <button className="px-4 py-1.5 bg-[#1F3A5A] text-blue-400 text-xs rounded-lg hover:bg-opacity-80">Approve</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Custom Pagination as seen in */}
        <div className="px-8 py-6 flex items-center justify-end gap-2 border-t border-white/5">
          <button className="p-2.5 bg-[#19205A] rounded-xl text-white/40"><ChevronLeft size={18}/></button>
          <button className="w-10 h-10 rounded-xl bg-[#2444FF] font-bold">1</button>
          <button className="w-10 h-10 rounded-xl bg-[#19205A] text-white/40">2</button>
          <button className="w-10 h-10 rounded-xl bg-[#19205A] text-white/40">3</button>
          <span className="text-white/20 mx-2">...</span>
          <button className="w-10 h-10 rounded-xl bg-[#19205A] text-white/40">440</button>
          <button className="p-2.5 bg-[#19205A] rounded-xl text-white/40"><ChevronRight size={18}/></button>
        </div>
      </div>
    </div>
  );
};

export default DocumentsManagement;