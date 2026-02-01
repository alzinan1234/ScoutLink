"use client";

import React, { useState } from "react";

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    if (newPassword !== confirmedPassword) {
      setMessage("New password and confirmed password do not match.");
      setMessageType("error");
      return;
    }

    setTimeout(() => {
      setMessage("Password changed successfully!");
      setMessageType("success");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmedPassword("");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 flex flex-col items-center">
      <div className="mb-4 w-full max-w-[982px]">
        <label
          htmlFor="currentPassword"
          className="block text-white text-sm font-bold mb-2"
        >
          Current Password
        </label>
        <input
          type="password"
          id="currentPassword"
          className="shadow appearance-none rounded w-full h-[50px] py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline border border-white/10 bg-white/5"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-4 w-full max-w-[982px]">
        <label
          htmlFor="newPassword"
          className="block text-white text-sm font-bold mb-2"
        >
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          className="shadow appearance-none rounded w-full h-[50px] py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline border border-white/10 bg-white/5"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-6 w-full max-w-[982px]">
        <label
          htmlFor="confirmedPassword"
          className="block text-white text-sm font-bold mb-2"
        >
          Confirmed Password
        </label>
        <input
          type="password"
          id="confirmedPassword"
          className="shadow appearance-none rounded w-full h-[50px] py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline border border-white/10 bg-white/5"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          required
        />
      </div>
      {message && (
        <p
          className={`text-center mb-4 ${
            messageType === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
      <div className="flex items-center justify-center mt-6 md:w-[982px]">
        <button
          type="submit"
          className="bg-[#2444FF] hover:bg-opacity-80 text-white font-bold w-full py-3 px-4 rounded-[4px] focus:outline-none focus:shadow-outline transition-all"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}