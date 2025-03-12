"use client";

import React from "react";
import axios, { AxiosResponse } from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Playwrite_AU_NSW } from "next/font/google";
import { useState } from 'react';
import Link from "next/link";


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
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);  // 여기서 부터 로딩상태를 true로 했네

    try {
      // 🔹 API 응답 타입을 명확히 지정
      const response: AxiosResponse<SignUpResponse> = await apiClient.post("/", {
        action: "register",
        username: name,
        password,
        email,
        birthday,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
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
    } finally {
        setIsLoading(false);
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

      <div className="flex justify-center ">
        <div className="w-[30vw] h-[63vh] rounded-xl shadow-2xl relative">
          <div className="w-[30vw] h-[63vh] bg-white opacity-40 rounded-xl absolute -z-10 shadow-2xl"></div>
          <h2 className="h-[18%] w-full text-3xl font-bold flex items-center justify-center">회원가입</h2>
          <div className="px-6">
            <Input placeholder="User ID" className="w-full h-12 mb-4" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Email" className="w-full h-12 mb-4" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Password" className="w-full h-12 mb-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="w-full h-12 mb-4 flex justify-center place-content-around">
              <Input 
              placeholder="YYYY" 
              inputMode="numeric"
              className="w-full h-full"
              type="number"
              maxLength={4}
              value={year} onChange={(e) => setYear(e.target.value)}
              />
              <p className="w-[40%] h-full flex justify-center items-center text-xl ">-</p>
              <Input 
              placeholder="MM" 
              inputMode="numeric"
              className="w-full h-full"
              type="number"
              maxLength={2}
              value={month} onChange={(e) => setMonth(e.target.value)}
              />
              <p className="w-[40%] h-full flex justify-center items-center text-xl">-</p>
              <Input 
              placeholder="DD" 
              inputMode="numeric"
              className="w-full h-full"
              type="number"
              maxLength={2}
              value={day} onChange={(e) => setDay(e.target.value)}
              />
            </div>

            <Button 
              className="w-full h-12 font-bold text-base bg-red-500 hover:bg-red-600"
              onClick={handleSignUp}
              disabled={isLoading}>
              {isLoading ? '회원가입 중...' : '회원가입'}
            </Button>

            <div className="mt-4 text-center">
               <p>계정이 이미 있으신가요? <Link href="/sign-in" className="text-red-500 hover:underline">로그인</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
