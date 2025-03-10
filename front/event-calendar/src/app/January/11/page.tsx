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

export default function J1() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-full w-full absolute inset-0 -z-10 opacity-70">
          <img
            src="/waterd.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-5 w-50 flex items-center justify-center text-6xl font-bold text-black-450 mb-[5%]",
            PlaywriteAUNSW.className
          )}>Step in a Puddle and Splash Your Friends Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%]",
            PlaywriteAUNSW.className
          )}>Jan. 11st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 z-5 mt-[10%]",
            NanumBrushScript.className
          )}>웅덩이 밟아서 친구에게 물 튀기기의 날</p>
        </div> 
        <div className="h-[45%] w-[30%] absolute inset-0 -z-55 mr-[8%] mt-[30%]">
            <img
              src="/waterd2.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-[50%] w-[35%] absolute inset-0 -z-1 ml-[64%] mt-[24.3%]">
            <img
              src="/waterd1.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-[35%] w-[30%] absolute inset-0 -z-10 ml-[70%] mt-[9%]">
            <img
              src="/waterd3.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
      </div>
    </div>
  );
}