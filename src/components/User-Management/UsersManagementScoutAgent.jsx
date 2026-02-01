"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

// Mock data
const scoutData = [
  { id: 1, name: "John Doe", position: "Forward", country: "UK", email: "john@example.com", status: "Active", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { id: 2, name: "Alex Carter", position: "Midfielder", country: "USA", email: "alex.c@example.com", status: "Inactive", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { id: 3, name: "Mia Johnson", position: "Defender", country: "USA", email: "mia.j@example.com", status: "Inactive", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { id: 4, name: "Liam Evans", position: "Defender", country: "USA", email: "liam.e@example.com", status: "Suspended", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
];

const UsersManagementScoutAgent = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState(null);

  const filters = ["Region", "Country", "City", "Age"];

  return (
    <div className="min-h-screen p-6 text-white font-sans">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold">Users Management</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#19205A] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
            />
          </div>

          {filters.map((filter) => (
            <div key={filter} className="relative">
              <button 
                onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
                className="bg-[#19205A] border border-white/10 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-white/5 transition-all"
              >
                {filter} <ChevronDown size={14} className={`text-gray-400 transition-transform ${activeFilter === filter ? 'rotate-180' : ''}`} />
              </button>
              
              {activeFilter === filter && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-[#19205A] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="py-1">
                    {["Option 1", "Option 2"].map((opt) => (
                      <button key={opt} className="w-full text-left px-4 py-2 text-xs hover:bg-blue-600 transition-colors">
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Re-designed Table Section to match Player Management */}
      <div className="bg-[#19205A]/40 rounded-[20px] border border-white/5 overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-[10px] uppercase tracking-[2px]">
                <th className="px-6 py-5 font-semibold">No</th>
                <th className="px-6 py-5 font-semibold">Name</th>
                <th className="px-6 py-5 font-semibold">Position</th>
                <th className="px-6 py-5 font-semibold">Country</th>
                <th className="px-6 py-5 font-semibold">Email</th>
                <th className="px-6 py-5 font-semibold">Status</th>
                <th className="px-6 py-5 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {scoutData.map((item, index) => (
                <tr key={item.id} className="hover:bg-white/[0.03] transition-all">
                  <td className="px-6 py-4 text-sm font-medium text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={item.avatar} alt="" className="w-10 h-10 rounded-full object-cover border border-blue-500/20" />
                      <span className="text-sm font-semibold">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{item.position}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{item.country}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{item.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      item.status === "Active" ? "bg-green-500/10 text-green-500" : 
                      item.status === "Inactive" ? "bg-red-500/10 text-red-500" : "bg-orange-500/10 text-orange-500"
                    }`}>
                      ● {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => router.push(`/admin/user-management/scouts/${item.id}`)}
                        className="px-3 py-1.5 bg-blue-600/10 text-blue-400 border border-blue-600/20 rounded-lg text-[11px] font-bold hover:bg-blue-600 hover:text-white transition-all"
                      >
                        View Profile
                      </button>
                      <button className="px-3 py-1.5 bg-orange-600/10 text-orange-400 border border-orange-600/20 rounded-lg text-[11px] font-bold hover:bg-orange-600 hover:text-white transition-all">
                        Suspend
                      </button>
                      <button className="px-3 py-1.5 bg-red-600/10 text-red-400 border border-red-600/20 rounded-lg text-[11px] font-bold hover:bg-red-600 hover:text-white transition-all">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersManagementScoutAgent;