"use client";

import { Bell, Share, Trash2, Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";

interface ChatItem {
  title: string;
  description: string;
  time: string;
  hasImage?: boolean;
  hasUsers?: boolean;
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

interface CustomSliderProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  leftLabel: string;
  rightLabel: string;
}

const CustomSlider = ({
  value,
  onChange,
  label,
  leftLabel,
  rightLabel,
}: CustomSliderProps) => {
  const getBackgroundStyle = () => {
    const percentage = value / 100;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (percentage <= 0.6) {
      // Cyan to Blue (0% to 60%)
      const adjusted = percentage / 0.6;
      red = 0;
      green = Math.round(255 - adjusted * 255);
      blue = 255;
    } else if (percentage <= 0.85) {
      // Blue to Custom Color (60% to 85%)
      const adjusted = (percentage - 0.6) / 0.25;
      red = Math.round(adjusted * 29);
      green = Math.round(adjusted * 219);
      blue = Math.round(255 - adjusted * 255);
    } else {
      // Custom Color to Dark Green (85% to 100%)
      const adjusted = (percentage - 0.85) / 0.15;
      red = Math.round(29 + adjusted * (29 - 29));
      green = Math.round(219 - adjusted * (255 - 219));
      blue = 0;
    }

    return {
      background: `rgb(${red}, ${green}, ${blue})`,
    };
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-900">
          {label}: {(value / 100).toFixed(2)}
        </h3>
      </div>
      <div className="relative h-1.5 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-1.5 rounded-full transition-all duration-100"
          style={{
            ...getBackgroundStyle(),
            width: `${value}%`,
          }}
        ></div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute top-0 left-0 w-full h-1.5 appearance-none z-10 cursor-pointer"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: transparent;
        }
        input[type="range"]:focus {
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid #000000;
          margin-top: -5px;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
        }
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid #000000;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
        }
        input[type="range"]::-ms-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid #000000;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

const TabButton = ({ active, onClick, children }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors text-center ${
      active ? "bg-white text-gray-900" : "text-gray-500 hover:text-gray-700"
    }`}
  >
    {children}
  </button>
);

const chatHistory: ChatItem[] = [
  {
    title: "Brainwave AI UI Kit",
    description: "Write code (HTML, CSS and JS) for a simple...",
    time: "Just now",
  },
  {
    title: "Welcome page with input",
    description: "Write code (HTML, CSS and JS) for a simple...",
    time: "Just now",
    hasImage: true,
  },
  {
    title: "Photo retouch",
    description: "Write code (HTML, CSS and JS) for a simple...",
    time: "Just now",
  },
  {
    title: "Brainwave AI UI Kit",
    description: "Write code (HTML, CSS and JS) for a simple...",
    time: "Just now",
  },
  {
    title: "Brainwave AI UI Kit",
    description: "Write code (HTML, CSS and JS) for a simple...",
    time: "Just now",
  },
];

export function RightPanel() {
  const [activeTab, setActiveTab] = useState<"history" | "models">("history");
  const [responseStyle, setResponseStyle] = useState(70);
  const [responseLength, setResponseLength] = useState(50);
  const [selectedModel, setSelectedModel] = useState(
    "claude-3-5-sonnet-20241022"
  );

  return (
    <div className="w-[340px] flex flex-col bg-[#E8ECEF] rounded-3xl">
      {/* Top Bar */}
      <div className="flex items-center justify-center gap-10 p-4">
        <Bell
          className="h-6 w-6 text-gray-600 cursor-pointer font-bold"
          size={28}
          strokeWidth={2}
        />
        <div className="h-10 w-10 rounded-full bg-green-100 border overflow-hidden flex items-center justify-center">
          <img
            src="/profile2.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="bg-black text-white px-5 py-3 rounded-xl text-sm font-medium">
          Share
        </button>
      </div>

      <hr className="mt-0 mb-8 ml-3 mr-3 border-gray-300" />

      {/* Toggle Switch */}
      <div className="px-8">
        <div className="flex gap-1 p-1 bg-[#F3F4F6] rounded-lg mb-4 w-full">
          <TabButton
            active={activeTab === "history"}
            onClick={() => setActiveTab("history")}
          >
            Chat history
          </TabButton>
          <TabButton
            active={activeTab === "models"}
            onClick={() => setActiveTab("models")}
          >
            Models
          </TabButton>
        </div>

        {activeTab === "history" && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-800 bg-gray-200 rounded-lg p-2">
                26/100
              </span>
            </div>
            <Trash2
              className="h-5 w-5 text-gray-800 cursor-pointer"
              size={24}
              strokeWidth={2}
            />
          </div>
        )}
      </div>

      {/* Content based on active tab */}
      <ScrollArea className="flex-1 px-6 mt-4">
        {activeTab === "history" ? (
          <div className="space-y-2">
            {chatHistory.map((chat, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  className="mt-1.5 h-5 w-5 rounded-lg border-[3px] border-gray-900"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{chat.title}</h3>
                  <p className="text-xs text-gray-700 mt-1">
                    {chat.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="h-8 w-8 rounded-full bg-green-100 border overflow-hidden flex items-center justify-center">
                      <img
                        src="/profile2.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs text-gray-800">{chat.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Model Selection */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-900">AI Model</h3>
              <div className="relative">
                <select
                  className="w-full p-2 border rounded-lg text-sm bg-white text-black appearance-none pr-8"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  <optgroup label="Anthropic Models">
                    <option value="claude-3-opus-20240229">
                      claude-3-opus-20240229
                    </option>
                    <option value="claude-3-5-sonnet-20241022">
                      claude-3-5-sonnet-20241022 (PDF Support)
                    </option>
                    <option value="claude-3-5-sonnet-20240620">
                      claude-3-5-sonnet-20240620
                    </option>
                    <option value="claude-3-5-haiku-20241022">
                      claude-3-5-haiku-20241022
                    </option>
                  </optgroup>
                  <optgroup label="OpenAI Models">
                    <option value="gpt-4-turbo-preview">
                      gpt-4-turbo-preview
                    </option>
                    <option value="gpt-4">gpt-4</option>
                    <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
                    <option value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</option>
                  </optgroup>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* System Prompt */}
            <div className="space-y-2 text-black">
              <h3 className="text-sm font-medium text-gray-900">
                Personality and Behavior
              </h3>
              <textarea
                placeholder="Define Aura's personality and behavior..."
                className="w-full h-32 p-3 text-sm border rounded-lg bg-white resize-none outline-none"
              />
              <p className="text-xs text-gray-500">
                Leave empty to use Aura's default personality
              </p>
            </div>

            {/* Response Style Slider */}
            <CustomSlider
              value={responseStyle}
              onChange={setResponseStyle}
              label="Response Style"
              leftLabel="Precise"
              rightLabel="Creative"
            />

            {/* Response Length Slider */}
            <CustomSlider
              value={responseLength}
              onChange={setResponseLength}
              label="Response Length"
              leftLabel="Shorter"
              rightLabel="Longer"
            />
          </div>
        )}
      </ScrollArea>

      {/* New Chat Button */}
      <div className="p-4">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2.5 flex items-center justify-center gap-2 font-medium transition-colors">
          <Plus className="h-5 w-5" />
          New chat
        </button>
      </div>
    </div>
  );
}
