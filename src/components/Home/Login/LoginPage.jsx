"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation"; // রিডাইরেক্ট করার জন্য ইমপোর্ট

export default function LoginPage() {
  const router = useRouter(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1500)); 
      
      toast.success("Login Successful!");

      setTimeout(() => {
        router.push("/admin"); 
      }, 1000);

    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
    
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: `linear-gradient(rgba(25, 32, 90, 0.6), rgba(25, 32, 90, 0.6)), url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop')`,
        backgroundColor: '#19205A',
      }}
    >
      <Toaster position="top-center" />

      {/* Login Card */}
      <div className="w-full max-w-[450px] bg-[#19205A]/90 backdrop-blur-md p-10 rounded-[24px] shadow-2xl text-white border border-white/5 z-10">
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold mb-2 text-white">Login</h1>
          <p className="text-gray-300 text-sm">Let's login into your account first</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="yourname@gmail.com"
              className="w-full px-4 py-3 bg-[#232B66] border border-[#30397A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2444FF] text-white placeholder-gray-500 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*******"
                className="w-full px-4 py-3 bg-[#232B66] border border-[#30397A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2444FF] text-white placeholder-gray-500 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-400 text-[#2444FF] focus:ring-[#2444FF] accent-[#2444FF] transition-all" 
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#F5A623] hover:text-[#ffb84d] transition-colors font-medium">Forgot Password</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#2444FF] hover:bg-[#1a35cc] text-white font-bold rounded-xl transition duration-300 shadow-xl active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest">
            <span className="px-3 bg-[#19205A] text-gray-400">or</span>
          </div>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-[#2444FF] hover:underline font-semibold ml-1">Register Here</a>
        </p>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-6 w-full flex flex-col md:flex-row justify-between px-10 text-[10px] text-gray-400 uppercase tracking-widest pointer-events-none">
         <span>© 2025 MIXSTAR ALL RIGHTS RESERVED.</span>
         <div className="flex gap-6 pointer-events-auto">
            <a href="#" className="hover:text-white transition-colors">Term & Condition</a>
            <a href="#" className="hover:text-white transition-colors">Privacy & Policy</a>
         </div>
      </div>
    </div>
  );
}