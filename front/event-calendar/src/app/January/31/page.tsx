"use client";

import axios from "axios";
import { Playwrite_ID } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google"
import { cn } from "@/lib/utils";

// API 기본 URL 설정 (백엔드 서버의 주소)
const API_BASE_URL = "/api/users/";

const PlaywriteAUNSW = Playwrite_ID({ weight: "400" });
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
      <div className="h-full w-full absolute inset-0 -z-10 opacity-60">
          <img
            src="/zebback.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%] -z-11",
            PlaywriteAUNSW.className
          )}>International Zebra's Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%]",
            PlaywriteAUNSW.className
          )}>Jan. 31st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[20%]",
            NanumBrushScript.className
          )}>국제 얼룩말의 날</p>
        </div> 
        <div className="h-[60%] w-[45%] absolute inset-0 -z-10 ml-[55%] mt-[21%]">
            <img
              src="/zeb1.png" //이지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-[40%] w-[30%] absolute inset-0 -z-10 mt-[32.7%]">
            <img
              src="/zeb2.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-[30%] w-[40%] absolute inset-0 -z-10 ml-[10%]">
            <img
              src="/zeb3.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
      </div>
      
    </div>
  );
}
