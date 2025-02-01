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
            src="/solguback.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%]",
            PlaywriteAUNSW.className
          )}>Apricot Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%]",
            PlaywriteAUNSW.className
          )}>Jan. 9st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[20%]",
            NanumBrushScript.className
          )}>살구의 날</p>
        </div>
        <div className="h-[35%] w-[30%] absolute inset-0 -z-10 ml-[8%] mt-[2%]">
            <img
              src="/solgu1.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div> 
        <div className="h-[35%] w-[22%] absolute inset-0 -z-5 mr-[94%] mt-[14%]">
            <img
              src="/solgu3.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-[70%] w-[55%] absolute inset-0 -z-10 ml-[45%] mt-[16%]">
            <img
              src="/solgu4.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-auto w-[42%] absolute inset-0 -z-10 ml-[%] mt-[23%]">
            <img
              src="/solgu2.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-[35%] w-[31%] absolute inset-0 -z-10 ml-[67%] mt-[2%]">
            <img
              src="/solgu5.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
      </div>
      
    </div>
  );
}
