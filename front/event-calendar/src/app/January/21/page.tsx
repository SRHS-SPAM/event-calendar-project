import { Playwrite_ID } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google"
import Image from 'next/image';
import { cn } from "@/lib/utils";

const PlaywriteAUNSW = Playwrite_ID({ weight: "400" });
const NanumBrushScript = Nanum_Brush_Script({ weight: "400" });


// 회원가입 API 호출 함수
export default function J22() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-full w-full absolute inset-0 -z-10 bg-black">
        <Image
            src="/1_21/nature.png"
            alt="Background"
            className="w-full h-full object-cover opacity-90"
            width={10000}
            height={500}
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[12%] text-white",
            PlaywriteAUNSW.className
          )}>Squirrel</h1>
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%] text-white",
            PlaywriteAUNSW.className
          )}> Appreciation Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-300 mb-[10%] text-white",
            PlaywriteAUNSW.className
          )}>Jan. 21st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[10%] text-white",
            NanumBrushScript.className
          )}>다람쥐 감사의날</p>
        </div>
        <div className="h-[46%] w-[35%] absolute inset-0 -z-1 ml-[65vw] mt-[54vh]">
            <Image
              src="/1_21/ramge.png" //이미지
              alt="착지하는 다람쥐"
              className="w-full h-full"
              width={100}
              height={100}
            />
        </div>
        <div className="h-[60%] w-[30%] absolute inset-0 -z-10 mt-[40vh]">
            <Image
              src="/1_21/ramgee.png" //이미지
              alt="기본 다람쥐"
              className="w-full h-full"
              width={100}
              height={500}
            />
        </div>
        <div className="h-[25%] w-[15%] absolute inset-0 -z-10 ml-[20vw] mt-[75vh]">
            <Image
              src="/1_21/ramgege.png" //이미지
              alt="잠자는 다람쥐"
              className="w-full h-full"
              width={100}
              height={500}
            />
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[60vw] mt-[6vh]">
            <p>🐿️</p>
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[8rem] mt-[45vh] -rotate-[20deg]">
            <p>🥰</p>
        </div>
      </div>
      
    </div>
  );
}
