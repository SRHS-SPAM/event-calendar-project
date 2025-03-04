"use client";

import React from "react";
import axios, { AxiosResponse } from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Playwrite_AU_NSW } from "next/font/google";

const PlaywriteAUNSW = Playwrite_AU_NSW({ weight: "400" });

// API 기본 URL 설정
const API_BASE_URL = "http://127.0.0.1:8000/api/user/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 응답 데이터 타입 정의
interface SignUpResponse {
  success: boolean;
  message?: string;
}

export default function SignUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [day, setDay] = React.useState("");

  const handleSignUp = async () => {
    if (!name || !email || !password || !year || !month || !day) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (password.length < 6) {
      alert("비밀번호는 최소 6자리 이상이어야 합니다.");
      return;
    }

    const birthday = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

    try {
      // 🔹 API 응답 타입을 명확히 지정
      const response: AxiosResponse<SignUpResponse> = await apiClient.post("/", {
        action: "register",
        username: name,
        password,
        email,
        birthday,
      });

      // 🔹 response.data를 안전하게 접근
      if (response.data?.success) {
        alert("회원가입 성공!");
      } else {
        alert(response.data?.message || "회원가입 실패");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert("회원가입 실패: " + (error.response?.data?.message || "알 수 없는 오류"));
      } else {
        alert("회원가입 중 예상치 못한 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="w-full h-full absolute z-10">
      <div className="absolute inset-0 -z-10">
        <img
          src="/backimg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className={`h-40 w-full flex items-center justify-center text-6xl font-bold text-white ${PlaywriteAUNSW.className}`}>
        Event Calendar
      </h1>

      <div className="flex justify-center">
        <div className="w-[30vw] h-[60vh] rounded-xl shadow-2xl bg-white/50 relative p-6">
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

          <Input placeholder="Name" className="w-full h-12 mb-4" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" className="w-full h-12 mb-4" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" className="w-full h-12 mb-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <div className="w-full h-12 mb-4 flex justify-between gap-2">
            <Input placeholder="YYYY" className="w-1/3 h-full text-center" type="number" inputMode="numeric" value={year} onChange={(e) => setYear(e.target.value)} />
            <Input placeholder="MM" className="w-1/3 h-full text-center" type="number" inputMode="numeric" value={month} onChange={(e) => setMonth(e.target.value)} />
            <Input placeholder="DD" className="w-1/3 h-full text-center" type="number" inputMode="numeric" value={day} onChange={(e) => setDay(e.target.value)} />
          </div>

          <Button className="w-full h-12 font-bold text-base bg-red-500 hover:bg-red-600" onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
