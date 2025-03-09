import { Playwrite_ID } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google"
import { cn } from "@/lib/utils";
import Image from 'next/image';

const PlaywriteAUNSW = Playwrite_ID({ weight: "400" });
const NanumBrushScript = Nanum_Brush_Script({ weight: "400" });

export default function J1() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-full w-full absolute inset-0 -z-10">
        <Image
            src="/2_9/dentisty.png"
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
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%]",
            PlaywriteAUNSW.className
          )}>National Toothache Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%]",
            PlaywriteAUNSW.className
          )}>Feb. 9st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[15%]",
            NanumBrushScript.className
          )}>치통의 날</p>
        </div>
        <div className="h-[56%] w-[28%] absolute inset-0 -z-1 ml-[60vw] mt-[44vh]">
            <Image
              src="/2_9/toothache.png" //이미지
              alt="치통에 고통받는 사람"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[30%] w-[15%] absolute inset-0 -z-1 ml-[82vw] mt-[35vh] rotate-[20deg]">
            <Image
              src="/2_9/tooth.png" //이미지
              alt="기본치아"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[20%] w-[10%] absolute inset-0 ml-[8vw] mt-[10vh] -z-1 -rotate-[20deg]">
            <Image
              src="/2_9/tooth.png" //이미지
              alt="기본치아"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[50%] w-[25%] absolute inset-0 mt-[42vh] ml-[5vw] -rotate-[10deg]">
            <Image
              src="/2_9/sadtooth.png" //이미지
              alt="충치 생긴 치아"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[28%] w-[15%] absolute inset-0 mt-[60vh] ml-[25vw] rotate-[5deg]">
            <Image
              src="/2_9/suptooth.png" //이미지
              alt="기본치아"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[85vw] scale-x-[-1] font-bold">
            <p>💉</p>
        </div>
      </div>
      
    </div>
  );
}
