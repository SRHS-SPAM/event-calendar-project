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
const API_BASE_URL = "/api/users/"; ;

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json", // JSON 형식으로 데이터 전송
  },
});

// 회원가입 API 호출 함수
export default function SignUp() {
  const [date, setDate] = React.useState<Date | null>(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleSignUp = async () => {
      if (!name || !date || !email || !password) {
          alert("모든 필드를 입력해주세요.");
          return;
      }

      try {
          const formattedDate = format(date, "yyyy-MM-dd"); // 날짜 형식 변환
          const response = await apiClient.post("/", { // POST 요청 URL 수정, 데이터 추가
              action: "register",
              username: name,
              password: password,
              email: email,
              birthday: formattedDate, // 생일 데이터 추가
          });

          if (response.data.success) {
             alert("회원가입 성공!");
             // 로그인 페이지로 이동 등의 추가 작업
          } else {
            alert(response.data.message); // 오류 메시지 표시
          }
      } catch (error: any) {
          console.error("Registration failed:", error);
          alert("회원가입 실패: " + (error?.response?.data?.message || "알 수 없는 오류")); // 에러 메시지 표시
      }
  };

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
          
          <Input 
          placeholder="Name" 
          className="w-full h-12 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          />

          <Input
            placeholder="email"
            className="w-full h-12 mb-4"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input 
          placeholder="Password" 
          className="w-full h-12 mb-4"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          />

          <div>
            <select name="년" id="1">
              <option value=""></option>
              <option value="2008">2008</option>
            </select>
            <select name="월" id="2">
              <option value="6">6</option>
            </select>
            <select name="일" id="3">
              <option value="9">9</option>
            </select>
          </div>

          
          

          {/* Calendar Input */}
          {/* <div className="w-full h-12 mb-4">
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
          </div> */}

          <Button 
          className="w-full h-12 font-bold text-base bg-red-500 hover:bg-red-600"
          onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
