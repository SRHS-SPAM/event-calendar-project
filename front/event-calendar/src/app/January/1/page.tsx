"use client";

import axios from "axios";
import { Playwrite_AU_NSW } from "next/font/google";
import { cn } from "@/lib/utils";

// API 기본 URL 설정 (백엔드 서버의 주소)
const API_BASE_URL = "/api/users/";

const PlaywriteAUNSW = Playwrite_AU_NSW({ weight: "400" });

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json", // JSON 형식으로 데이터 전송
  },
});

// 회원가입 API 호출 함수
export default function J1() {
  return (
    <div>
      <div className="">
        <h2
          className={cn(
            "h-40 w-full flex items-center justify-center text-6xl font-bold",
            PlaywriteAUNSW.className
          )}>1월 1일</h2>
        <h1
          className={cn(
            "h-40 w-full flex items-center justify-center text-6xl font-bold",
            PlaywriteAUNSW.className
          )}>사과 선물하기의 날</h1>
      </div>
      
    </div>
  );
}
