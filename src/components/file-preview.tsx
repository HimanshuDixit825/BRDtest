import { File, Trash2, Plus, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface FilePreviewProps {
  fileName: string;
  onDelete: () => void;
}

export function FilePreview({ fileName, onDelete }: FilePreviewProps) {
  return (
    <Card className="w-full bg-white rounded-lg shadow-sm">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <File className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium">{fileName}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-gray-400 hover:text-gray-600"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Input
            className="w-full pl-4 pr-12 py-3 bg-gray-50 rounded-lg text-sm"
            placeholder="Add your prompt here..."
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-600"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-600"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
