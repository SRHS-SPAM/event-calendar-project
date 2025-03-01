"use client";

import axios from "axios";
import { Playwrite_ID } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google"
import { cn } from "@/lib/utils";

import daisy2 from "../../../../public/1_28/daisy2.png"


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
            src="/1_28/gress2.png"
            alt="Background"
            className="w-full h-full object-cover opacity-80"
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
        <div className="h-[40%] w-[40%] absolute inset-0 -z-10 scale-y-[-1] scale-x-[-1] ml-[60vw] mt-[60vh]">
            <img
              src="/paper1.png" //이미지
              alt="paper1"
              className="w-full h-full"
            />
        </div>
        <div className="h-[60%] w-[30%] absolute inset-0 -z-1 ml-[70vw] mt-[40vh]">
            <img
              src="/1_28/daisy2.png" //이미지
              alt="종이 데이지"
              className="w-full h-full"
            />
        </div>
        <div className="h-[35%] w-[16%] absolute inset-0 mt-[64vh]">
            <img
              src="/1_28/smdaisy.png" //이미지
              alt="스마일 데이지"
              className="w-full h-full"
            />
        </div>
        <div className="h-[40%] w-[28%] absolute inset-0 mt-[46vh] ml-[15vw] scale-x-[-1] scale-y-[-1] -rotate-[90deg] -z-10">
            <img
              src="/1_28/daisy3.png" //이미지
              alt="누운 데이지"
              className="w-full h-full"
            />
        </div>
        <div className="h-[70%] w-[30%] absolute inset-0 -z-10 mt-[30vh]">
            <img
              src="/1_28/daisy.png" //이미지
              alt="꽃병에 담긴"
              className="w-full h-full"
            />
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[82vw] rotate-[30deg]">
            <p>😊</p>
        </div>
      </div>
      
    </div>
  );
}
