"use client";

import axios from "axios";
import { Playwrite_ID } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google"
import { cn } from "@/lib/utils";

// API 기본 URL 설정 (백엔드 서버의 주소)
const API_BASE_URL = "/api/users/";

const PlaywriteAUNSW = Playwrite_ID({ weight: "variable" });
const NanumBrushScript = Nanum_Brush_Script({ weight: "400" });


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
    <div className="h-[100vh] w-[100vw]">
      <div className="h-full w-full absolute inset-0 -z-10 ">
          <img
            src="/wear.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-black text-black-500 mb-[15%] text-[#f7c92f]",
            PlaywriteAUNSW.className
          )}>Dress up Your Pet Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl font-[400] text-black-400 mb-[10%] text-[#1a94eb]",
            PlaywriteAUNSW.className
          )}>Jan. 14st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[20%] text-[#f7c92f]",
            NanumBrushScript.className
          )}>반려동물 차려 입히기의 날</p>
        </div>
      </div>
      
    </div>
  );
}
