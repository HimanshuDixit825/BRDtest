"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";
import { User, Mail, Building2, Briefcase } from "lucide-react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [otherDesignation, setOtherDesignation] = useState("");
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  const handleDesignationChange = (value: string) => {
    setDesignation(value);
    if (value !== "Others") {
      setOtherDesignation("");
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center mb-12">
        <Image
          src="/embgb.png"
          alt="Brainwave"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
        <Button
          variant="ghost"
          className={`flex-1 rounded-lg ${
            !isCreateAccount ? "bg-white text-black" : "text-black"
          }`}
          onClick={() => setIsCreateAccount(false)}
        >
          Sign in
        </Button>
        <Button
          variant="ghost"
          className={`flex-1 rounded-lg ${
            isCreateAccount ? "bg-white text-black" : "text-black"
          }`}
          onClick={() => setIsCreateAccount(true)}
        >
          Create account
        </Button>
      </div>

      <div>
        <div className="mb-8">
          <Button
            variant="outline"
            className="w-full h-11 font-medium text-black rounded-lg flex items-center justify-center gap-2"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {isCreateAccount ? (
            <>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-lg pl-11 bg-[#F3F5F7] text-black placeholder:text-gray-500"
                />
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-lg pl-11 bg-[#F3F5F7] text-black placeholder:text-gray-500"
                />
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Building2 className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="h-11 rounded-lg pl-11 bg-[#F3F5F7] text-black placeholder:text-gray-500"
                />
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
                <Select onValueChange={handleDesignationChange}>
                  <SelectTrigger className="h-11 rounded-lg pl-11 bg-[#F3F5F7] text-black placeholder:text-gray-500">
                    <SelectValue placeholder="Select Designation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Founder">Founder</SelectItem>
                    <SelectItem value="Product Manager">
                      Product Manager
                    </SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Project Manager">
                      Project Manager
                    </SelectItem>
                    <SelectItem value="Business Analayst">
                      Business Analyst
                    </SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {designation === "Others" && (
                <Input
                  type="text"
                  placeholder="Enter your designation"
                  value={otherDesignation}
                  onChange={(e) => setOtherDesignation(e.target.value)}
                  className="h-11 rounded-lg pl-4 bg-[#F3F5F7] text-black placeholder:text-gray-500"
                />
              )}
            </>
          ) : (
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="email"
                placeholder="Username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-lg pl-11 bg-[#F3F5F7] text-black placeholder:text-gray-500"
              />
            </div>
          )}
        </div>

        <Button className="w-full h-11 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg mb-8">
          {isCreateAccount ? "Create account" : "Sign in"} with Aura
        </Button>

        <p className="text-tiny text-center text-gray-500">
          By creating an account, you agree to our{" "}
          <Link href="#" className="text-blue-500 no-underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-500 no-underline">
            Privacy & Cookie Statement
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
