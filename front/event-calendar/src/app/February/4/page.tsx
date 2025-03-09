import { Playwrite_ID } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google"
import { cn } from "@/lib/utils";
import Image from 'next/image';

const PlaywriteAUNSW = Playwrite_ID({ weight: "400" });
const NanumBrushScript = Nanum_Brush_Script({ weight: "400" });

export default function J1() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-full w-full absolute inset-0 -z-10 bg-black">
        <Image
            src="/2_4/homefire.png"
            alt="Background"
            width={1000}
            height={500}
            className="w-full h-full object-cover opacity-80"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%] text-white",
            PlaywriteAUNSW.className
          )}>National Sweater Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%] text-white",
            PlaywriteAUNSW.className
          )}>Feb. 4st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[15%] text-white",
            NanumBrushScript.className
          )}>스웨터의 날</p>
        </div>
        <div className="h-[60%] w-[35%] absolute inset-0 -z-1 ml-[65vw] mt-[35vh] scale-x-[-1]">
            <Image
              src="/2_4/char.png" //이미지
              alt="흔들의자"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[38%] w-[40%] absolute inset-0 -z-1 scale-x-[-1]">
            <Image
              src="/2_4/sil.png" //이미지
              alt="뜨게질"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[50%] w-[33%] absolute inset-0 mt-[38vh] -rotate-[20deg]">
            <Image
              src="/2_4/sweater.png" //이미지
              alt="빨강 스웨터"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[43%] w-[25%] absolute inset-0 mt-[50vh] ml-[15vw] rotate-[5deg]">
            <Image
              src="/2_4/sweater2.png" //이미지
              alt="초록 스웨터"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[82vw] rotate-[30deg] font-bold">
            <p>🧵</p>
        </div>
      </div>
      
    </div>
  );
}
