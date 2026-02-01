"use client";

import { useState } from "react";
import { ChevronDownIcon, CalendarIcon } from "@heroicons/react/24/outline";

// Mock data matching the image items
const initialTasks = [
  { id: 1, task: "Pending Verifications", date: "5/27/25", status: "Active", action: "Verify" },
  { id: 2, task: "Active Reports", date: "7/18/25", status: "Active", action: "Review" },
  { id: 3, task: "Videos Needing Review", date: "2/11/25", status: "Pending", action: "Review" },
  { id: 4, task: "DJ Competition", date: "8/15/25", status: "Ended", action: "View Details" },
];

export default function PendingActionsTable() {
  const [tasks, setTasks] = useState(initialTasks);
  const [category, setCategory] = useState("All Category");

  // Function to handle status-based color logic
  const getStatusStyles = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#2BA849]/20 text-[#2BA849]";
      case "Pending":
        return "bg-[#FFC37E]/20 text-[#FFC37E]";
      case "Ended":
        return "bg-[#D14F51]/20 text-[#D14F51]";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  // Function to handle action button color logic
  const getActionStyles = (action) => {
    if (action === "Verify") return "bg-[#2444FF] hover:bg-blue-700";
    return "bg-white/5 hover:bg-white/10 border border-white/10 text-[#FFC37E]";
  };

  return (
    <div className="bg-[#19205A] text-white p-6 rounded-xl border border-white/5 shadow-xl font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold ">Pending Actions / To-Do</h2>
        
        <div className="flex items-center gap-3">
          {/* Category Dropdown */}
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-all">
              {category}
              <ChevronDownIcon className="h-4 w-4 text-gray-400" />
            </button>
          </div>

          {/* Date Picker Display */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-all">
            <span>August 2024</span>
            <CalendarIcon className="h-4 w-4 text-gray-400" />
          </button>

          {/* See More Button */}
          <button className="px-6 py-2 bg-[#2444FF]/10 border border-[#2444FF]/50 text-white rounded-xl text-sm font-bold hover:bg-[#2444FF]/20 transition-all">
            See More
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">No</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Task</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Date</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Status</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {tasks.map((item, index) => (
              <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-5 text-sm font-bold text-white">{index + 1}</td>
                <td className="px-6 py-5 text-sm font-medium text-gray-200">{item.task}</td>
                <td className="px-6 py-5 text-sm text-gray-400">{item.date}</td>
                <td className="px-6 py-5">
                  <span className={`px-4 py-1.5 rounded-lg text-xs font-bold ${getStatusStyles(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <button className={`px-6 py-1.5 rounded-lg text-xs font-bold transition-all ${getActionStyles(item.action)}`}>
                    {item.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}