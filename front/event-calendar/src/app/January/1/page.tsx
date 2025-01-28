"use client";

import axios from "axios";
import { Playwrite_ID } from "next/font/google";
import { cn } from "@/lib/utils";

// API 기본 URL 설정 (백엔드 서버의 주소)
const API_BASE_URL = "/api/users/";

const PlaywriteAUNSW = Playwrite_ID({ weight: "400" });

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
      <div className="h-full w-full absolute inset-0 -z-10">
          <img
            src="/apple1.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
            className={cn(
              "h-7 w-85 flex items-center justify-center text-8xl font-bold text-black-500 mb-[15%]",
              PlaywriteAUNSW.className
            )}>Apple Gifting Day</h1>
            <h2
            className={cn(
              "w-full flex items-center justify-center text-6xl text-black-400 mb-[10%]",
              PlaywriteAUNSW.className
            )}>Jan. 1st</h2>
        </div>
        <div className="h-[100%] w-[28%] absolute inset-0 -z-10 mr-[80%]">
            <img
              src="/appletree.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-[50%] w-[28%] absolute inset-0 -z-10 ml-[70%] mt-[25%]">
            <img
              src="/a99le.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-[50%] w-[28%] absolute inset-0 -z-10 mb-[1%] mr-[30%]">
            <img
              src="/apple2.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
        <div className="h-[30%] w-[25%] absolute inset-0 -z-10 ml-[7%] mt-[38%]">
            <img
              src="/bppple.png" //이미지
              alt="Background"
              className="w-full h-full"
            />
        </div>
      </div>
      
    </div>
  );
}
