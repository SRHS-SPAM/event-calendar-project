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
      <div className="h-full w-full absolute inset-0 -z-10 bg-slate-900">
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%] text-white",
            PlaywriteAUNSW.className
          )}>Punch The Clock Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%] text-white",
            PlaywriteAUNSW.className
          )}>Jan. 27st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[20%] text-white",
            NanumBrushScript.className
          )}>시계에 펀치 날리기의 날</p>
        </div>
        <div className="h-[20%] w-[15%] absolute inset-0 -z-5 ml-6 mt-[15%] text-[10rem] -rotate-12">
            💡
        </div>
        <div className="h-[70%] w-[40%] absolute inset-0 -z-1 ml-[60vw] mt-[30vh]">
            <img
              src="/1_27/br_clock.png" //이미지
              alt="깨진시계"
              className="w-full h-full"
            />
        </div>
        <div className="h-[40%] w-[20%] absolute inset-0 -z-1 ml-[76vw] mt-[60vh]">
            <img
              src="/1_12/dbag.png" //이미지
              alt="서류가방"
              className="w-full h-full"
            />
        </div>
        <div className="h-[50%] w-[33%] absolute inset-0 -z-10 scale-y-[-1] mt-[50vh]">
            <img
              src="/paper1.png" //이미지
              alt="paper1"
              className="w-full h-full"
            />
        </div>
        <div className="h-[70%] w-[40%] absolute inset-0 -z-10 mt-[30vh]">
            <img
              src="/1_27/br_clock.png" //이미지
              alt="깨진시계"
              className="w-full h-full"
            />
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[13rem] ml-[78vw] rotate-[30deg]">
            <p>🕶️</p>
        </div>
      </div>
      
    </div>
  );
}
