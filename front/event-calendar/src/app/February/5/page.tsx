import { Playwrite_ID } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google"
import { cn } from "@/lib/utils";
import Image from 'next/image';

const PlaywriteAUNSW = Playwrite_ID({ weight: "400" });
const NanumBrushScript = Nanum_Brush_Script({ weight: "400" });


export default function F5() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-full w-full absolute inset-0 -z-10 bg-black">
        <Image
            src="/2_5/restaurant2.png"
            alt="Background"
            width={1000}
            height={500}
            className="w-full h-full object-cover opacity-85"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%] text-white",
            PlaywriteAUNSW.className
          )}>Chocolate Fondue Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%] text-white",
            PlaywriteAUNSW.className
          )}>Jan. 5st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[20%] text-white",
            NanumBrushScript.className
          )}>초콜릿 퐁듀의 날</p>
        </div>
        <div className="h-[58%] w-[40%] absolute inset-0 -z-1 ml-[60vw] mt-[42vh]">
            <Image
              src="/2_5/fondue.png" //이미지
              alt="퐁듀"
              width={200}
              height={200}
              className="w-full h-full"
            />
        </div>
        <div className="h-[20%] w-[20%] absolute inset-0 text-[15rem] ml-[26vw] mt-[42vh] rotate-[20deg]">
          <p>🍫</p>
        </div>
        <div className="h-[90%] w-[33%] absolute inset-0 -z-10 mt-[10vh]">
            <Image
              src="/2_5/chocolatebun.png" //이미지
              alt="초코분수"
              width={200}
              height={200}
              className="w-full h-full"
            />
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[82vw] rotate-[20deg]">
            <p>🥰</p>
        </div>
      </div>
      
    </div>
  );
}
