"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, CheckCircle, Trash2, Ban } from "lucide-react";

export default function VideoReviewPage({ params }) {
  const [rejectionReason, setRejectionReason] = useState("");
  const [status, setStatus] = useState("Reviewing");

  // Mock handlers for functionality
  const handleApprove = () => {
    alert("Video Approved Successfully!");
    setStatus("Approved");
  };

  const handleRemove = () => {
    if (confirm("Are you sure you want to remove this video?")) {
      alert("Video Removed.");
    }
  };

  const handleBan = () => {
    if (!rejectionReason) {
      alert("Please provide a reason before banning the user.");
      return;
    }
    alert(`User banned for: ${rejectionReason}`);
  };

  return (
    <div className="p-6  min-h-screen text-white font-sans">
      {/* Breadcrumb Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-white/40 hover:text-white/60 cursor-pointer transition-colors">Videos Management</span>
          <span className="text-white/20">&gt;</span>
          <span className="text-[#2444FF] font-medium">Video Review</span>
        </div>
        <Link 
          href="/admin/video-moderation/videos" 
          className="flex items-center gap-2 px-5 py-2.5 bg-[#19205A] border border-white/10 rounded-xl text-sm font-medium hover:bg-[#2444FF] transition-all duration-300 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to List
        </Link>
      </div>

      <div className="bg-[#19205A] rounded-xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 relative z-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Video Review</h2>
            <p className="text-white/40 text-sm mt-1">Currently {status} Ethan Carter's upload</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#2444FF] transition-colors w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search players..." 
                className="bg-[#0F1535]/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#2444FF]/50 focus:ring-4 focus:ring-[#2444FF]/10 transition-all w-full md:w-64" 
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-3 bg-[#0F1535]/50 border border-white/10 rounded-2xl text-sm font-medium text-white/70 hover:bg-[#0F1535] transition-colors">
              Region <ChevronDown size={16} className="text-white/30" />
            </button>
          </div>
        </div>

        {/* Video Player Section with Enhanced UI */}
        <div className="relative w-full rounded-[24px] overflow-hidden bg-black mb-8 shadow-2xl group border border-white/5">
          <video 
            className="w-full aspect-video object-cover max-h-[600px]"
            controls
            playsInline
            poster="https://peach.blender.org/wp-content/uploads/title_an_portrail.jpg"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
          {/* Status Overlay */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${status === 'Approved' ? 'bg-green-500' : 'bg-orange-500'}`} />
            {status}
          </div>
        </div>

        <div className="mb-10 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-4 mb-4">
               <span className="px-3 py-1 bg-[#2444FF]/10 text-[#2444FF] rounded-lg text-[10px] font-bold uppercase tracking-tighter">HD 1080p</span>
               <span className="text-white/30 text-sm">2:30 Duration</span>
               <span className="text-white/30 text-sm">50.4 MB</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Video Details</h3>
            <p className="text-white/90 text-lg font-semibold mb-3">Highlight Reel: Ethan Carter</p>
            <p className="text-white/40 leading-relaxed max-w-2xl">
              A professional compilation showcase of mid-season match performance and specialized training drills. 
              The video demonstrates technical ball control and spatial awareness.
            </p>
          </div>
        </div>

        {/* Admin Console Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0F1535]/40 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          
          {/* Profile Section */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
            <span className="text-[10px] font-black uppercase text-white/30 mb-6 self-start tracking-widest">Player Profile</span>
            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-[#2444FF] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#2444FF] to-[#6078FF] p-1 relative z-10">
                <div className="w-full h-full rounded-full bg-[#19205A] overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=ethan" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-white">Ethan Carter</h4>
            <p className="text-[#2444FF] text-xs font-bold mt-1 uppercase tracking-widest">Midfielder | Forward</p>
            <div className="mt-4 px-4 py-1.5 bg-white/5 rounded-full text-[10px] text-white/50 border border-white/5">
              XP: 12,345 / 15,000
            </div>
          </div>

          {/* Interaction Section */}
          <div className="lg:col-span-5 flex flex-col">
            <label className="text-sm font-semibold mb-4 flex items-center gap-2">
              Rejection Reason <span className="text-red-500 text-xs font-normal">(Required for Ban)</span>
            </label>
            <textarea 
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="flex-1 min-h-[140px] bg-[#19205A]/50 border border-white/10 rounded-[24px] p-5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2444FF]/50 focus:border-transparent transition-all resize-none placeholder:text-white/20"
              placeholder="Describe why this video doesn't meet the community guidelines..."
            />
          </div>

          {/* Action Section */}
          <div className="lg:col-span-4 flex flex-col justify-end gap-4">
            <span className="text-sm font-semibold text-white/60 mb-2">Moderation Tools</span>
            
            <button 
              onClick={handleApprove}
              className="group w-full py-4 bg-[#2444FF] hover:bg-[#3b57ff] rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_10px_30px_rgba(36,68,255,0.3)]"
            >
              <CheckCircle size={20} /> Approve Video
            </button>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleRemove}
                className="py-4 bg-[#19205A] hover:bg-white/5 border border-white/10 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Trash2 size={16} /> Remove
              </button>
              <button 
                onClick={handleBan}
                className="py-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Ban size={16} /> Ban User
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}