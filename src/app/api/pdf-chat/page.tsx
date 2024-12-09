"use client";

import { useChat } from "ai/react";
import { useState, useEffect } from "react";
import PDFViewer from "./pdf-viewer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const PDF_MODEL = "claude-3-5-sonnet-20241022";
const MAX_TOKENS = 8192;
const SYSTEM_PROMPT = `You are AURA (Analytical Utility for Revenue Acceleration), an advanced AI consultant created by EMB Global. You are specifically designed to analyze documents.
As AURA, your capabilities include:
1. Deep analysis of business documents, reports, and strategic materials
2. Providing insights focused on revenue growth and business optimization
3. Identifying key business metrics and performance indicators
4. Offering strategic recommendations based on document content
5. Maintaining professional business context throughout the conversation
6. Supporting decision-making with data-driven insights
7. Highlighting opportunities for revenue acceleration

When analyzing documents:
- Provide specific references and page numbers
- Quote relevant sections accurately
- Connect insights to business impact
- Focus on revenue and growth implications
- Maintain EMB Global's professional standards
- Offer actionable business recommendations

Always base your analysis on the document content while applying EMB Global's expertise in business growth and revenue acceleration.`;

export default function PdfChatPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedFile = sessionStorage.getItem("uploadedPdfFile");
    if (storedFile) {
      const file = new File([storedFile], "uploaded.pdf", {
        type: "application/pdf",
      });
      setPdfFile(file);
      const url = URL.createObjectURL(file) + "#toolbar=0&view=FitH";
      setPdfUrl(url);

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(",")[1];
        setPdfBase64(base64);
      };
      reader.readAsDataURL(file);
    } else {
      router.push("/");
    }
  }, [router]);

  const { messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat({
      body: {
        model: PDF_MODEL,
        temperature: 0.7,
        maxTokens: MAX_TOKENS,
        systemPrompt: SYSTEM_PROMPT,
        pdfData: pdfBase64,
        pdfName: pdfFile?.name,
      },
    });

  const handleReset = () => {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl.split("#")[0]);
    }
    sessionStorage.removeItem("uploadedPdfFile");
    router.push("/");
  };

  if (!pdfFile) {
    return null; // or a loading state
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Chat Section */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md h-[calc(100vh-4rem)]">
            <div className="h-[calc(100vh-10rem)] overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "assistant"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "assistant"
                        ? "bg-gray-200"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    <div className="text-sm font-semibold mb-1 capitalize">
                      {message.role === "assistant" ? "AURA" : "You"}
                    </div>
                    <div className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder={`Ask AURA about ${pdfFile?.name}...`}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send"}
                </Button>
                <Button variant="destructive" onClick={handleReset}>
                  Change PDF
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="w-[600px]">
          <div className="bg-white rounded-lg shadow-md h-[calc(100vh-4rem)] p-[1px]">
            {pdfUrl && <PDFViewer url={pdfUrl} />}
          </div>
        </div>
      </div>
    </div>
  );
}
