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
      <div className="h-full w-full absolute inset-0 -z-10">
          <img
            src="/gress.png"
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
          )}>Golden Retriever Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%]",
            PlaywriteAUNSW.className
          )}>Feb. 3st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[20%]",
            NanumBrushScript.className
          )}>골든 리트리버의 날</p>
        </div>
        <div className="h-[40%] w-[43%] absolute inset-0 -z-10 scale-y-[-1] mt-[60vh]">
            <img
              src="/paper1.png" //이미지
              alt="paper1"
              className="w-full h-full"
            />
        </div>
        <div className="h-[70%] w-[40%] absolute inset-0 -z-10 ml-[30vh] mt-[30vh]">
            <img
              src="/hef.png" //이미지
              alt="해바라기기"
              className="w-full h-full"
            />
        </div>
        <div className="h-[80%] w-[48%] absolute inset-0 -z-10 mt-[20vh]">
            <img
              src="/retriver1.png" //이미지
              alt="retriver"
              className="w-full h-full"
            />
        </div>
        <div className="h-[70%] w-[48%] absolute inset-0 -z-10 mt-[25vh] ml-[50vw] scale-x-[-1]">
            <img
              src="/retriver2.png" //이미지
              alt="retriver"
              className="w-full h-full"
            />
        </div>
        <div className="h-[30%] w-[35%] absolute inset-0 -z-10 scale-x-[-1] scale-y-[-1] ml-[143vh]">
            <img
              src="/paper2.png" //이미지
              alt="paper1"
              className="w-full h-full"
            />
        </div>
        


       
        
      </div>
      
    </div>
  );
}
