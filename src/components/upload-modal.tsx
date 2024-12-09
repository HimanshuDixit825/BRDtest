"use client";

import { Dialog } from "@/components/ui/dialog";
import {
  DialogContent as BaseDialogContent,
  DialogPortal,
  DialogOverlay,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { Upload } from "lucide-react";
import { useState, useRef } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFileUpload: (file: File) => void;
}

export function UploadModal({
  isOpen,
  onClose,
  onFileUpload,
}: UploadModalProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0 && files[0].type === "application/pdf") {
      onFileUpload(files[0]);
      onClose();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && files[0].type === "application/pdf") {
      onFileUpload(files[0]);
      onClose();
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <BaseDialogContent
          onPointerDownOutside={onClose}
          className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[425px] p-0 bg-[#0084FF] border-0"
        >
          <VisuallyHidden>
            <DialogTitle>Upload PDF Document</DialogTitle>
          </VisuallyHidden>
          <div
            className={`flex flex-col items-center justify-center p-10 text-white border-2 border-dashed border-white/70 m-4 rounded-lg transition-all cursor-pointer ${
              isDragging ? "bg-blue-600" : ""
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf"
            />
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <Upload className="h-8 w-8 text-[#0084FF]" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Upload to Aura</h2>
            <p className="text-sm text-blue-100 text-center">
              Click here or drag and drop PDF files to upload.
              <br />
              You can add prompts after uploading.
            </p>
          </div>
        </BaseDialogContent>
      </DialogPortal>
    </Dialog>
  );
}
