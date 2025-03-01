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
      <div className="h-full w-full absolute inset-0 -z-10 scale-[-1]">
        <img
            src="/1_25/living_room.png"
            alt="Background"
            className="w-full h-full object-cover opacity-85"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%] scale-[-1]",
            PlaywriteAUNSW.className
          )}>Opposite Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%] scale-[-1]",
            PlaywriteAUNSW.className
          )}>Jan. 25st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[20%] ",
            NanumBrushScript.className
          )}>날 의로꾸거</p>
        </div>
        <div className="h-[60%] w-[20%] absolute inset-0 -z-1 ml-[70vw] mt-[35vh] scale-x-[-1]">
            <img
              src="/1_25/ban_people.png" //이미지
              alt="거꾸로 솨람"
              className="w-full h-full"
            />
        </div>
        <div className="h-[50%] w-[30%] absolute inset-0  mt-[50vh] ml-[15vw]">
          <img
              src="/1_25/ban_house.png" //이미지
              alt="거꾸로집"
              className="w-full h-full"
            />
        </div>
        <div className="h-[85%] w-[30%] absolute inset-0 -z-10  mt-[15vh]">
            <img
              src="/1_25/yagu.png" //이미지
              alt="거꾸로 먹는 요거틓ㅎ"
              className="w-full h-full"
            />
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[82vw] rotate-[20deg]">
            <p>🙃</p>
        </div>
      </div>
      
    </div>
  );
}
