"use client";

import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Playwrite_AU_NSW } from "next/font/google";

const PlaywriteAUNSW = Playwrite_AU_NSW({ weight: "400" });

import axios from "axios";

// API 기본 URL 설정 (백엔드 서버의 주소)
const API_BASE_URL = "http://localhost:8080/users";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json", // JSON 형식으로 데이터 전송
  },
});

// 회원가입 API 호출 함수
export const registerUser = async (username: string, password: string, email: string) => {
  try {
    // POST 요청으로 데이터를 백엔드로 전송
    const response = await apiClient.post("/register", { username, password, email });
    return response.data; // 서버 응답 데이터 반환
  } catch (error: any) {
    // 에러 발생 시 에러 메시지 반환
    throw error.response?.data?.message || "Registration failed";
  } 
};


export default function SignUp() {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <div className="w-full h-full absolute z-10">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/backimg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <h1
        className={cn(
          "h-40 w-full flex items-center justify-center text-6xl font-bold text-white",
          PlaywriteAUNSW.className
        )}
      >
        Event Calendar
      </h1>

      {/* Sign-Up Form */}
      <div className="flex justify-center">
        <div className="w-[30vw] h-[60vh] rounded-xl shadow-2xl bg-white/50 relative p-6">
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
          
          <Input placeholder="Name" className="w-full h-12 mb-4" />
          <Input
            placeholder="Phone number"
            className="w-full h-12 mb-4"
            type="tel"
            maxLength={13}
          />
          

          {/* Calendar Input */}
          <div className="w-full h-12 mb-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full h-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2" />
                  {date ? format(date, "PPP") : <span>Pick a Birthday</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date || undefined} // Convert null to undefined
                  onSelect={(selectedDate) => setDate(selectedDate || null)} // Ensure null fallback for undefined
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button className="w-full h-12 font-bold text-base bg-red-500 hover:bg-red-600">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
