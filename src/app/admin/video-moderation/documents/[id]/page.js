"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, Check } from "lucide-react";

export default function DocumentReviewPage({ params }) {
  const tags = ["Speedster", "Finisher", "Playmaker", "Strong", "Defender", "Goalkeeper", "Dribbler", "Creative"];

  return (
    <div className="p-6  min-h-screen text-white font-sans">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-sm text-white/40">
          <span>Documents</span> <span>&gt;</span> <span className="text-white">Documents Review</span>
        </div>
        <Link href="/admin/video-moderation/documents" className="flex items-center gap-2 px-5 py-2.5 bg-[#19205A] border border-white/10 rounded-xl text-sm font-medium hover:bg-white/5 transition-all">
          <ArrowLeft size={18} /> Back
        </Link>
      </div>

      <div className="bg-[#19205A] rounded-xl p-10 border border-white/5 shadow-2xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold">Profile Documents Review</h2>
          <div className="flex items-center gap-3">
             <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                <input type="text" placeholder="Search" className="bg-[#0F1535]/50 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0F1535]/50 border border-white/10 rounded-xl text-sm text-white/70">Region <ChevronDown size={14}/></button>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Player Name</label>
              <input type="text" defaultValue="Ethan Carter" className="bg-transparent w-full text-lg font-medium outline-none" />
            </div>
            <div className="border-b border-white/10 pb-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Nationality</label>
              <input type="text" defaultValue="USA" className="bg-transparent w-full text-lg font-medium outline-none" />
            </div>
            <div className="border-b border-white/10 pb-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-1 text-blue-400">Primary Position</label>
              <select className="bg-transparent w-full text-lg font-medium outline-none appearance-none cursor-pointer">
                <option>Select Primary Position</option>
              </select>
            </div>
            {/* ... other position/foot inputs */}
          </div>

          {/* Right Column: Tier Initialization */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold mb-4">Tier Initialization</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-b border-white/10 pb-2">
                <label className="text-xs text-white/60 block mb-1">Height (cm)</label>
                <input type="text" placeholder="Height (cm)" className="bg-transparent w-full text-sm outline-none" />
              </div>
              <div className="border-b border-white/10 pb-2">
                <label className="text-xs text-white/60 block mb-1">Weight (kg)</label>
                <input type="text" placeholder="Weight (kg)" className="bg-transparent w-full text-sm outline-none" />
              </div>
            </div>
            
            <div>
              <label className="text-xs text-white/60 block mb-4">Select up to 3 tags that best describe your play style</label>
              <div className="flex flex-wrap gap-3">
                {tags.map(tag => (
                  <button key={tag} className="px-5 py-2 rounded-xl bg-[#0F1535] border border-white/10 text-xs hover:border-[#2444FF] transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: AI & Admin Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
       <div className="space-y-6">
  <h3 className="text-xl font-bold mb-6">AI Verification Results</h3>
  
  <div className="bg-[#19205A] rounded-[32px] border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-blue-500/30">
    {/* Header Banner */}
    <div className="bg-[#2444FF] px-8 py-4 flex items-center justify-between">
      <span className="text-sm font-bold tracking-tight">OCR Check: Data matches profile</span>
      <div className="bg-white/20 p-1 rounded-full">
        <Check size={16} className="text-white" />
      </div>
    </div>

    {/* Player Card Display */}
    <div className="p-10 flex flex-col items-center">
      <div className="relative group cursor-zoom-in">
        {/* The Player Card Image */}
        <div className="w-[280px] h-[340px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(251,146,60,0.2)] border border-orange-500/20">
          <img 
            src="/Group.png" 
            alt="AI Verified Player Card" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-orange-500/5 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Card Metadata Details */}
      <div className="mt-8 text-center space-y-2">
        <h4 className="text-xl font-semibold text-white/90">Player Card</h4>
        <p className="text-white/40 text-sm font-medium tracking-wide">
          Age: <span className="text-white/70">22</span> | 
          Height: <span className="text-white/70">180cm</span> | 
          Weight: <span className="text-white/70">75kg</span>
        </p>
      </div>
    </div>
  </div>
</div>

          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">Rejection Reason (Required)</h3>
            <textarea className="w-full h-40 bg-[#0F1535] border border-white/10 rounded-xl p-6 text-sm focus:ring-1 focus:ring-red-500 outline-none resize-none mb-6" placeholder="Enter reason..." />
            
            <div className="bg-[#0F1535]/50 p-8 rounded-xl border border-white/5 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-500/20 mb-4 overflow-hidden border-2 border-blue-500">
                    <img src="https://i.pravatar.cc/150?u=ethan" alt="Profile" />
                </div>
                <h4 className="font-bold text-lg">Ethan Carter</h4>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mt-1 mb-6">Midfielder | Forward</p>
                
                <div className="w-full space-y-3">
                    <button className="w-full py-4 bg-[#2444FF] rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/20 transition-all">Approve</button>
                    <button className="w-full py-4 bg-[#19205A] border border-white/10 rounded-xl font-bold text-white/40 hover:text-white transition-colors">Reject</button>
                    <button className="w-full py-4 bg-[#19205A] border border-white/10 rounded-xl font-bold text-white/40 hover:text-white transition-colors">Request Re-upload</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}