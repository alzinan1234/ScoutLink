"use client";
import React, { useState, useMemo, useRef } from "react";
import {
  Search,
  MoreVertical,
  Send,
  Smile,
  Paperclip,
  CheckCheck,
} from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const MessageApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState(3); // Defaulting to Philip as per UI
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef(null);

  // Data mapped to match the visual style of image_08293a.png
  const contacts = useMemo(() => [
    { id: 1, name: "Dustin", avatar: "https://i.pravatar.cc/150?u=1", lastMessage: "But I, that am not shaped for sporti...", time: "9:31 am", unreadCount: 0, status: "read" },
    { id: 2, name: "Jorge", avatar: "https://i.pravatar.cc/150?u=2", lastMessage: "But I, that am not shaped for sporti...", time: "9:40 am", unreadCount: 0, status: "read" },
    { id: 3, name: "Philip", avatar: "https://i.pravatar.cc/150?u=3", lastMessage: "But I, that am not shaped for sporti...", time: "9:35 am", unreadCount: 5, status: "unread" },
    { id: 4, name: "Marvin", avatar: "https://i.pravatar.cc/150?u=4", lastMessage: "But I, that am not shaped for sporti...", time: "9:50 am", unreadCount: 0, status: "read" },
    { id: 5, name: "Nathan", avatar: "https://i.pravatar.cc/150?u=5", lastMessage: "But I, that am not shaped for sporti...", time: "9:55 am", unreadCount: 0, status: "read" },
    { id: 6, name: "Randall", avatar: "https://i.pravatar.cc/150?u=6", lastMessage: "But I, that am not shaped for sporti...", time: "8:31 am", unreadCount: 0, status: "read" },
    { id: 7, name: "Mitchell", avatar: "https://i.pravatar.cc/150?u=7", lastMessage: "But I, that am not shaped for sporti...", time: "9:25 am", unreadCount: 0, status: "read" },
  ], []);

  const conversation = [
    { id: 1, senderId: 1, text: "I'm just working on a our AD project. What about you ?", time: "07:59 pm", isOwn: false },
    { id: 2, senderId: 0, text: "In a laoreet purus. Integer turpis quam. laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas.", time: "11:49 pm", isOwn: true },
    { id: 3, senderId: 1, text: "I'm just working on a our AD project. What about you ?", time: "02:30 pm", isOwn: false },
    { id: 4, senderId: 0, text: "Same here! Been working project for the past 5 hours despite of having so much to do", time: "04:15 am", isOwn: true, reactions: ["👍", "😊"] },
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput("");
      setShowEmojiPicker(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#19205AB] p-6 font-sans text-white">
      {/* LEFT SIDEBAR */}
      <div className="w-1/4 bg-[#19205A] rounded-l-2xl flex flex-col border-r border-[#ffffff10]">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Chats</h1>
            <button className="text-2xl font-light">+</button>
          </div>
          <p className="text-xs text-gray-400 mb-4">26 Message, 3 Unread</p>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search message" 
              className="w-full bg-[#111645] border border-[#ffffff20] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`flex items-center p-4 cursor-pointer transition-colors rounded-xl mb-1 ${selectedContact === contact.id ? 'bg-[#252C75]' : 'hover:bg-[#ffffff05]'}`}
            >
              <div className="relative">
                <img src={contact.avatar} className="w-12 h-12 rounded-full border-2 border-orange-400" alt="" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#19205A] rounded-full"></div>
              </div>
              <div className="ml-4 flex-1 overflow-hidden">
                <div className="flex justify-between">
                  <span className="font-semibold text-sm">{contact.name}</span>
                  <div className="flex items-center gap-1">
                    <CheckCheck className="w-3 h-3 text-gray-500" />
                    <span className="text-[10px] text-gray-400">{contact.time}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 truncate">{contact.lastMessage}</p>
              </div>
              {contact.unreadCount > 0 && (
                <div className="ml-2 bg-blue-600 text-[10px] font-bold px-2 py-1 rounded-full">{contact.unreadCount}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 bg-[#19205A] rounded-r-2xl flex flex-col relative">
        {/* Chat Header */}
        <div className="p-4 border-b border-[#ffffff10] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="https://i.pravatar.cc/150?u=8" className="w-10 h-10 rounded-full border border-blue-400" alt="" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-400 rounded-full border-2 border-[#19205A]"></div>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Office chat</h2>
              <p className="text-[10px] text-gray-400">45 members, 24 online</p>
            </div>
          </div>
          <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {conversation.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'} items-end gap-3`}>
              {!msg.isOwn && <img src="https://i.pravatar.cc/150?u=1" className="w-8 h-8 rounded-full" alt="" />}
              <div className="flex flex-col max-w-[60%]">
                <div className={`p-4 rounded-2xl text-sm ${msg.isOwn ? 'bg-[#2E3B8B] rounded-tr-none' : 'bg-[#2E346E] rounded-tl-none'}`}>
                  {msg.text}
                </div>
                <span className={`text-[10px] text-gray-500 mt-1 ${msg.isOwn ? 'text-right' : 'text-left'}`}>{msg.time}</span>
                {msg.reactions && (
                   <div className="flex gap-1 mt-[-10px] bg-[#19205A] p-1 rounded-full w-fit border border-[#ffffff10]">
                      {msg.reactions.map(r => <span key={r} className="text-xs">{r}</span>)}
                   </div>
                )}
              </div>
              {msg.isOwn && <img src="https://i.pravatar.cc/150?u=8" className="w-8 h-8 rounded-full" alt="" />}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-6">
          <div className="bg-[#111645] rounded-xl flex items-center p-2 border border-[#ffffff10]">
            <button className="p-2 text-gray-400 hover:text-white" onClick={() => fileInputRef.current.click()}>
              <Paperclip className="w-5 h-5 rotate-45" />
            </button>
            <input 
              type="text"
              placeholder="Type Messages"
              className="flex-1 bg-transparent border-none focus:outline-none px-4 text-sm"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button className="p-2 text-gray-400 hover:text-white" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <Smile className="w-5 h-5" />
            </button>
            <button onClick={handleSendMessage} className="bg-blue-600 p-2 rounded-lg ml-2 hover:bg-blue-500 transition-colors">
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
          
          {showEmojiPicker && (
            <div className="absolute bottom-24 right-6 z-50">
              <EmojiPicker theme="dark" onEmojiClick={(emoji) => setMessageInput(prev => prev + emoji.emoji)} />
            </div>
          )}
        </div>
        <input type="file" ref={fileInputRef} className="hidden" />
      </div>
    </div>
  );
};

export default MessageApp;