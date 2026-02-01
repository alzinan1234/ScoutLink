"use client";
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, RotateCcw } from 'lucide-react';

const PlayerDetails = () => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div className=" min-h-screen p-6 md:p-10 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">Review Player: #{id}</h2>
        <button 
          onClick={() => router.back()} 
          className="bg-[#19205A] px-4 py-2 rounded-lg flex items-center gap-2 border border-gray-700 hover:bg-[#252C75]"
        >
          <ArrowLeft className="w-4 h-4" /> Back to List
        </button>
      </div>

      <div className="bg-[#19205A] p-8 rounded-3xl border border-gray-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Information Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Profile Information</h3>
            <div className="grid grid-cols-1 gap-4">
               {[
                 { label: "Full Name", value: "Ethan Carter" },
                 { label: "Nationality", value: "USA" },
                 { label: "Current Position", value: "Midfielder" },
                 { label: "Birth Date", value: "15 Oct 2002" }
               ].map((item, idx) => (
                 <div key={idx} className="border-b border-gray-700 pb-2">
                   <p className="text-xs text-gray-500 uppercase">{item.label}</p>
                   <p className="text-lg font-medium">{item.value}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Card & Verification Side */}
          <div className="flex flex-col items-center justify-center bg-[#111645] p-8 rounded-2xl border border-blue-900/30">
            <div className="mb-6 text-center">
              <span className="text-blue-400 font-bold tracking-widest text-sm">AI VERIFICATION ACTIVE</span>
            </div>

            {/* Image_0a6c11.png Style Card */}
            <div className="w-64 bg-gradient-to-br from-orange-400 to-red-600 p-1 rounded-2xl shadow-orange-500/20 shadow-2xl">
              <div className="bg-[#0F123B] rounded-xl p-5 text-center">
                <div className="bg-orange-500 px-3 py-0.5 rounded-full text-[10px] font-bold mb-4 inline-block uppercase">Forward</div>
                <img src={`https://i.pravatar.cc/150?u=${id}`} className="w-28 h-28 mx-auto rounded-full border-4 border-orange-500 mb-4 object-cover" alt="" />
                <h4 className="text-lg font-black italic uppercase tracking-tighter">PLAYER NAME</h4>
                <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 border-t border-gray-800 pt-3">
                  <span>AGE: 22</span>
                  <span>HT: 182CM</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 w-full mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-bold transition shadow-lg">Approve</button>
              <button className="bg-red-600/20 border border-red-600/50 text-red-500 hover:bg-red-600 hover:text-white py-3 rounded-xl font-bold transition">Reject</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;