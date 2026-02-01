"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ChevronRight, 
  ArrowLeft, 
  ChevronDown, 
  User, 
  Edit3, 
  PlayCircle 
} from "lucide-react";

const ScoutAgentProfile = ({ params }) => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState(null);

  const timelineData = [
    { id: 1, event: "Account Created", date: "2022-05-10", icon: <User size={18} /> },
    { id: 2, event: "Profile Updated", date: "2023-01-15", icon: <Edit3 size={18} /> },
    { id: 3, event: "Media Uploaded", date: "2023-07-22", icon: <PlayCircle size={18} /> },
  ];

  const mediaGallery = [
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80",
    "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?w=500&q=80",
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&q=80",
    "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=500&q=80",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80"
  ];

  return (
    <div className="min-h-screen p-6 text-white font-sans bg-[#19205A] rounded-xl">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
          <span>Users</span> <ChevronRight size={12} /> 
          <span>Players</span> <ChevronRight size={12} /> 
          <span className="text-white">Scout / Agent Profile</span>
        </div>
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 px-5 py-2 bg-[#19205A] border border-white/10 rounded-xl text-[10px] font-bold hover:bg-white/5 transition-all"
        >
          <ArrowLeft size={14} /> BACK
        </button>
      </div>

      {/* Profile Header Card */}
      <div className="bg-[#19205A] rounded-xl p-8 mb-8 border border-white/5 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] z-0" />
        
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="flex items-center gap-8">
            <div className="w-28 h-28 rounded-3xl overflow-hidden border-4 border-blue-500/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Ethan Carter</h1>
              <p className="text-blue-400 font-medium text-sm mt-1">Forward | Team Falcons</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Joined 2022 | USA</p>
              <div className="flex gap-3 mt-5">
                <button className="px-6 py-2 bg-[#0B0E2A] border border-white/10 rounded-xl text-[10px] font-bold hover:bg-blue-600 transition-all">
                  Verify User
                </button>
                <button className="px-6 py-2 bg-blue-600 rounded-xl text-[10px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  Suspend Account
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0">
            {["Region", "Country"].map((f) => (
              <div key={f} className="relative">
                <button 
                  onClick={() => setActiveFilter(activeFilter === f ? null : f)}
                  className="bg-[#0B0E2A] border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold flex items-center gap-2"
                >
                  {f} <ChevronDown size={12} />
                </button>
                {activeFilter === f && (
                  <div className="absolute top-full mt-2 w-32 bg-[#19205A] border border-white/10 rounded-xl shadow-2xl z-50">
                    <button className="w-full text-left px-4 py-2 text-[10px] hover:bg-blue-600 transition-colors">Option A</button>
                  </div>
                )}
              </div>
            ))}
            <button className="px-6 py-2 bg-red-600/20 text-red-500 border border-red-500/30 rounded-xl text-[10px] font-bold ml-2">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Media Gallery */}
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          Media Gallery <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded-full">05</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {mediaGallery.map((img, idx) => (
            <div key={idx} className="group aspect-[4/3] rounded-xl overflow-hidden border border-white/5 relative cursor-pointer bg-[#19205A]">
              <img 
                src={img} 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                alt="Gallery" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[9px] font-bold tracking-widest uppercase">View Media</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1  gap-8 mb-10">
        {/* Documents Table */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold mb-4">Documents</h2>
          <div className="bg-[#19205A] rounded-xl border border-white/5 overflow-hidden shadow-xl">
            <table className="w-full text-left text-[11px]">
              <thead className="text-gray-400 uppercase tracking-wider border-b border-white/10 bg-white/5">
                <tr>
                  <th className="p-4">Document Type</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Uploaded Date</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {type: "Resume", status: "Verified", date: "2023-08-15", color: "text-green-500 bg-green-900/20"}, 
                  {type: "ID", status: "Pending", date: "2023-09-20", color: "text-orange-500 bg-orange-900/20"}
                ].map((doc, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-bold">{doc.type}</td>
                    <td className="p-4">
                       <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${doc.color}`}>{doc.status}</span>
                    </td>
                    <td className="p-4 text-gray-400 font-medium">{doc.date}</td>
                    <td className="p-4">
                      <button className="text-blue-500 font-bold hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-[#19205A] p-8  rounded-xl border border-white/5 shadow-xl">
          <h2 className="text-xl font-bold mb-8">Activity Timeline</h2>
          <div className="space-y-0">
            {timelineData.map((item, idx) => (
              <div key={item.id} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-2xl bg-[#2444FF] flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {idx !== timelineData.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-blue-600 to-transparent my-2" />
                  )}
                </div>
                <div className="pt-1">
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.event}</h4>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-medium">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shortlisted Players Section */}
      <h2 className="text-lg font-bold mb-4">Shortlisted Players</h2>
      <div className="bg-[#19205A] rounded-xl border border-white/5 overflow-hidden shadow-2xl">
        <table className="w-full text-left text-[11px]">
          <thead className="text-gray-400 uppercase tracking-wider border-b border-white/10 bg-white/5">
            <tr>
              <th className="p-4 text-center">NO</th>
              <th className="p-4">Name</th>
              <th className="p-4">Position</th>
              <th className="p-4">Country</th>
              <th className="p-4">Team</th>
              <th className="p-4">Joining Date</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[1, 2].map((id) => (
              <tr key={id} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-center text-gray-400 font-medium">{id}</td>
                <td className="p-4 flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/150?u=${id}`} className="w-8 h-8 rounded-full border border-white/10" alt="" />
                  <span className="font-bold">John Doe</span>
                </td>
                <td className="p-4 text-gray-300">Forward</td>
                <td className="p-4 text-gray-300">UK</td>
                <td className="p-4 text-gray-300">FC United</td>
                <td className="p-4 text-gray-400">12/4/17</td>
                <td className="p-4"><span className="text-green-500 bg-green-900/20 px-2 py-0.5 rounded font-bold text-[9px]">Active</span></td>
                <td className="p-4 text-right">
                  <button className="bg-blue-600/20 text-blue-500 border border-blue-500/30 px-3 py-1 rounded text-[10px] font-bold hover:bg-blue-600 hover:text-white transition-all">
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoutAgentProfile;