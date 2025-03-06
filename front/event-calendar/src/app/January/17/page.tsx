import { Playwrite_ID } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google"
import { cn } from "@/lib/utils";

import daisy2 from "/1_28/daisy2.png"



const PlaywriteAUNSW = Playwrite_ID({ weight: "400" });
const NanumBrushScript = Nanum_Brush_Script({ weight: "400" });



// 회원가입 API 호출 함수
export default function J1() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-full w-full absolute inset-0 -z-10 bg-black">
        <img
            src="/1_17/sun.png"
            alt="Background"
            className="w-full h-full object-cover opacity-80"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[10%] text-white",
            PlaywriteAUNSW.className
          )}>New Year's Resolution</h1>
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%] text-white",
            PlaywriteAUNSW.className
          )}>Reeommitment Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-300 mb-[10%] text-white",
            PlaywriteAUNSW.className
          )}>Jan. 17st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[10%] text-white",
            NanumBrushScript.className
          )}>새해 결심 다지기의 날</p>
        </div>
        <div className="h-[40%] w-[35%] absolute inset-0 -z-10 scale-y-[-1] scale-x-[-1] ml-[65vw] mt-[60vh]">
            <img
              src="/paper1.png" //이미지
              alt="paper1"
              className="w-full h-full"
            />
        </div>
        <div className="h-[45%] w-[30%] absolute inset-0 -z-1 ml-[70vw] mt-[55vh]">
            <img
              src="/1_17/power.png" //이미지
              alt="열정에 불타오르는 솨람"
              className="w-full h-full"
            />
        </div>
        <div className="h-[60%] w-[40%] absolute inset-0 -z-10 mt-[40vh]">
            <img
              src="/1_17/todolist.png" //이미지
              alt="플래너"
              className="w-full h-full"
            />
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[9rem] ml-[65vw] mt-[55vh] rotate-[20deg]">
            <p>☑️</p>
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[84vw] rotate-[30deg]">
            <p>🤩</p>
        </div>
      </div>
      
    </div>
  );
}
