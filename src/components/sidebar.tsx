// src/components/layout/sidebar.tsx
"use client";
import { useState } from "react";
import {
  MessageSquare,
  Search,
  CreditCard,
  HelpCircle,
  Settings,
  ChevronDown,
  Sun,
  Moon,
  Trello,
  UserRoundPen,
} from "lucide-react";
import { PanelRight } from "lucide-react";
import { FileText, Podcast, BookCheck } from "lucide-react";
import { FC } from "react";

interface ChatItem {
  color: string;
  label: string;
  count: number;
  isActive?: boolean;
}

const chatList: ChatItem[] = [
  { color: "bg-gray-400", label: "Welcome", count: 48 },
  {
    color: "bg-purple-400",
    label: "UI8 Production",
    count: 16,
    isActive: true,
  },
  { color: "bg-blue-400", label: "Favorites", count: 8 },
  { color: "bg-orange-400", label: "Archived", count: 128 },
];

export const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="w-80 bg-black text-white p-4 pt-10">
      {/* Top section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center ">
            <img src="/Orb.png" alt="Brainwave" className="w-8 h-8 ml-9" />
          </div>
          <span className="font-bold text-3xl ml-4">Aura</span>
        </div>

        <PanelRight
          size={24}
          className="text-gray-400 hover:text-white transition-colors"
        />
      </div>

      {/* Main navigation */}
      <div className="space-y-3">
        <button className="w-full flex items-center gap-4 px-6 py-3 bg-gray-800 rounded-xl">
          <MessageSquare size={20} className="text-blue-400" />
          <span className="flex-1 text-left font-semibold text-sm">
            Playground
          </span>
        </button>

        <div className="relative">
          <Search className="absolute left-6 top-3.5 h-4 w-4 text-green-400" />
          <input
            type="text"
            placeholder="Aura Search"
            className="w-full bg-[#1e1f22] rounded-xl pl-14 pr-12 py-2.5 text-sm focus:outline-none border border-gray-800 font-semibold"
          />
          <div className="absolute right-3 top-2.5 bg-[#2b2d31] px-1.5 py-0.5 rounded text-xs text-gray-400">
            ⌘F
          </div>
        </div>

        <button className="w-full flex items-center gap-4 px-6 py-3 hover:bg-gray-800 rounded-xl">
          <FileText size={20} className="text-pink-400" />
          <span className="flex-1 text-left font-semibold text-sm">
            Chat With Pdf
          </span>
        </button>

        <button className="w-full flex items-center gap-4 px-6 py-3 hover:bg-gray-800 rounded-xl">
          <Podcast size={20} className="text-orange-400" />
          <span className="flex-1 text-left font-semibold text-sm">
            Talk To Aura
          </span>
        </button>

        <button className="w-full flex items-center gap-4 px-6 py-3 hover:bg-gray-800 rounded-xl">
          <BookCheck size={20} className="text-purple-400" />
          <span className="flex-1 text-left font-semibold text-sm">
            BRD Studio
          </span>
        </button>

        <button className="w-full flex items-center gap-4 px-6 py-3 hover:bg-gray-800 rounded-xl">
          <Settings size={20} className="text-purple-400" />
          <span className="flex-1 text-left font-semibold text-sm ">
            Settings
          </span>
        </button>
      </div>

      {/* Chat list section */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-3 mb-2">
          <div className="text-sm font-semibold text-gray-400">Chat list</div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>

        <div className="space-y-1">
          {chatList.map((chat) => (
            <button
              key={chat.label}
              className={`w-full flex items-center gap-4 px-6 py-2 ${
                chat.isActive ? "bg-gray-800" : "hover:bg-gray-800"
              } rounded-lg`}
            >
              <span className={`w-2 h-2 ${chat.color} rounded-sm`}></span>
              <span className="flex-1 text-left font-semibold text-sm">
                {chat.label}
              </span>
              <span className="text-sm text-gray-500">{chat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* User section */}
      <div className="mt-auto pt-6">
        <div className="flex items-center gap-3 px-3 py-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <UserRoundPen />
          </div>
          <div className="flex-1">
            <div className="font-medium">Tran Mau Tri Tam</div>
            <div className="text-sm text-gray-400">tam@ui8.net</div>
          </div>
          <div className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded">
            Free
          </div>
        </div>

        <button className="w-full py-3 bg-gray-800 rounded-xl text-center mb-4">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
};
