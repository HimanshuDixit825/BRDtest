import { SignInForm } from "@/components/sign-in-form";
import { X } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen bg-zinc-900 p-8 pr-5 pb-0 relative">
      <div className="flex-1 flex flex-col">
        <div className="mb-auto mt-16">
          <h1 className="text-4xl font-bold text-white mb-4 font-sans">
            Unlock the power
            <br />
            of AI
          </h1>
          <p className="text-lg text-gray-400 mb-12 font-sans">
            Chat with the smartest AI - Experience
            <br />
            the power of AI with us
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/orb.png"
              alt="Aura Orb"
              width={150}
              height={150}
              className="mb-5 mr-8 mt-24"
            />
            <h2 className="mt-4 font-light font-sans mr-8 tracking-wider">
              <span>
                <span className="text-lg text-[#1DD75B]">A</span>
                <span className="text-sm text-gray-300">nalytical</span>{" "}
                <span className="text-lg text-[#1DD75B]">U</span>
                <span className="text-sm text-gray-300">tility</span>{" "}
                <span className="text-sm text-gray-300">for</span>{" "}
                <span className="text-[#1DD75B]">R</span>
                <span className="text-sm text-gray-300">evenue</span>{" "}
                <span className="text-[#1DD75B]">A</span>
                <span className="text-sm text-gray-300">cceleration</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[68vw] h-[93vh] bg-white rounded-3xl flex items-center justify-center relative">
        <button className="absolute top-4 right-4 p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <X className="h-4 w-4 text-gray-600" />
        </button>
        <div className="w-full max-w-md p-8">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
