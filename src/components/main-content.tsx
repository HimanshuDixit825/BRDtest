"use client";

import {
  ArrowRight,
  Image,
  Video,
  Trophy,
  Code,
  Plus,
  Mic,
  File,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { UploadModal } from "./upload-modal";

interface Feature {
  icon: React.ElementType;
  title: string;
  color: string;
}

const features: Feature[] = [
  { icon: Image, title: "Chat with PDF", color: "bg-[#9068D0]/20" },
  { icon: Video, title: "Make a BRD", color: "bg-[#D84C10]/20" },
  { icon: Trophy, title: "AI Internet search", color: "bg-[#0084FF]/20" },
  { icon: Code, title: "Talk to Aura", color: "bg-[#52BA69]/20" },
];

export function MainContent() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setIsUploadModalOpen(false);
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
  };

  return (
    <main className="flex-1 flex flex-col">
      <div className="w-[95%] max-w-5xl mx-auto flex-1 overflow-hidden">
        <div className="text-center mb-12 pt-12">
          <h1
            className="text-[3.5rem] leading-[80px] font-bold mb-4 tracking-tight text-black"
            style={{ letterSpacing: "-0.04em" }}
          >
            Unlock the power of AI
          </h1>
          <p className="text-2xl text-gray-500 font-normal">
            Chat with the smartest AI - Experience the power of AI with us
          </p>
        </div>

        <div className="space-y-5 w-[60%] mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group flex items-center p-4 border border-gray-200 rounded-xl transition-shadow duration-300 ease-in-out hover:shadow-lg last:mb-0 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800"
            >
              <div className="flex items-center flex-1">
                <div className={`p-5 rounded-lg mr-5 ${feature.color}`}>
                  <feature.icon className="h-6 w-6 text-gray-700" />
                </div>
                <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 text-gray-800 hover:text-gray-600 hover:bg-transparent"
              >
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1 stroke-2 h-6 w-6"
                  size={24}
                />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="w-[95%] max-w-5xl mx-auto mb-4">
        <Card className="shadow-sm w-[95%] mx-auto bg-gray-50 border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          {uploadedFile && (
            <div className="border-b border-gray-200">
              <div className="flex items-center px-4 py-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <File className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-sm font-medium ml-2">
                  {uploadedFile.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDeleteFile}
                  className="text-gray-400 hover:text-gray-600 ml-2"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          <div className="flex items-center gap-3 p-3">
            {!uploadedFile && (
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700"
                onClick={() => setIsUploadModalOpen(true)}
              >
                <Plus className="h-5 w-5" />
              </Button>
            )}
            <Input
              placeholder="Type '/' for commands"
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 bg-transparent text-gray-900 placeholder:text-gray-500 dark:text-gray-100 dark:placeholder:text-gray-400"
            />
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700"
            >
              <Mic className="h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>

      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onFileUpload={handleFileUpload}
      />
    </main>
  );
}
