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
      <div className="h-full w-full absolute inset-0 -z-10 bg-black">
        <img
            src="/1_27/bglass.png"
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%] text-white",
            PlaywriteAUNSW.className
          )}>National Daisy Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%] text-white",
            PlaywriteAUNSW.className
          )}>Jan. 28st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[20%] text-white",
            NanumBrushScript.className
          )}>데이지의 날</p>
        </div>
        <div className="h-[60%] w-[40%] absolute inset-0 -z-1 ml-[60vw] mt-[40vh]">
            <img
              src="/1_27/glove.png" //이미지
              alt="복싱글러브"
              className="w-full h-full"
            />
        </div>
        <div className="h-[40%] w-[18%] absolute inset-0 mt-[60vh]">
            <img
              src="/1_27/punch.png" //이미지
              alt="주먹"
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
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[82vw] rotate-[30deg]">
            <p>🕒</p>
        </div>
      </div>
      
    </div>
  );
}
