"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; // Next.js router import
import { Eye, Check, X, Search, ChevronDown } from 'lucide-react';

const Leaderboard = () => {
  const router = useRouter();

  const players = [
    { id: 1, name: "John Doe", position: "Forward", docType: "ID", date: "12/4/17", status: "Approved", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Alex Carter", position: "Midfielder", docType: "Certificate", date: "1/28/17", status: "Pending", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Mia Johnson", position: "Defender", docType: "Passport", date: "6/19/14", status: "Approved", img: "https://i.pravatar.cc/150?u=3" },
  ];

  return (
    <div className=" min-h-screen p-6 text-white font-sans">
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold">Documents Management</h1>
        
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search" className="bg-[#19205A] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none text-white" />
          </div>
          {['Region', 'Country', 'City', 'Age'].map(filter => (
            <button key={filter} className="bg-[#19205A] border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-[#252C75]">
              {filter} <ChevronDown className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#19205A] rounded-2xl overflow-hidden shadow-xl border border-gray-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400 text-sm uppercase">
              <th className="p-4 font-semibold">No</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Position</th>
              <th className="p-4 font-semibold">Document Type</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} className="border-b border-gray-800 hover:bg-[#252C75]/30 transition-colors">
                <td className="p-4">{player.id}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={player.img} alt="" className="w-10 h-10 rounded-full border border-gray-600" />
                    <span className="font-medium">{player.name}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-300">{player.position}</td>
                <td className="p-4 text-gray-300">{player.docType}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    player.status === 'Approved' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {player.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    {/* Dynamic Navigation Link */}
                    <button 
                      onClick={() => router.push(`/admin/leaderboard/${player.id}`)} 
                      className="bg-gray-600/30 hover:bg-gray-600 p-2 rounded-lg transition"
                    >
                      <Eye className="w-4 h-4 text-orange-400" />
                    </button>
                    <button className="bg-red-600/20 hover:bg-red-600 p-2 rounded-lg transition"><X className="w-4 h-4 text-red-500" /></button>
                    <button className="bg-blue-600/20 hover:bg-blue-600 p-2 rounded-lg transition"><Check className="w-4 h-4 text-blue-500" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;