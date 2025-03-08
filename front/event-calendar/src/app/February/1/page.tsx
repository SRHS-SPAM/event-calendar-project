import { Playwrite_ID } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google"
import { cn } from "@/lib/utils";
import Image from 'next/image';

const PlaywriteAUNSW = Playwrite_ID({ weight: "400" });
const NanumBrushScript = Nanum_Brush_Script({ weight: "400" });

export default function J1() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-full w-full absolute inset-0 -z-10 bg-white">
        <Image
            src="/2_1/password1.png"
            alt="Background"
            width={1000}
            height={500}
            className="w-full h-full object-cover opacity-70"
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[20%]",
            PlaywriteAUNSW.className
          )}>Change Your</h1>
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%]",
            PlaywriteAUNSW.className
          )}>Password  Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-400 mb-[10%]",
            PlaywriteAUNSW.className
          )}>Feb. 1st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[15%]",
            NanumBrushScript.className
          )}>비밀번호 바꾸기의 날</p>
        </div>
        <div className="h-[50%] w-[28%] absolute inset-0 -z-1 ml-[70vw] mt-[45vh]">
            <Image
              src="/2_1/cpass.png" //이미지
              alt="패스워드 창"
              className="w-full h-full"
              width={200}
              height={200}
            />
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[4rem] ml-[68vw] mt-[10vh] rotate-[20deg] font-bold">
            <p>✅EjO!@12chP</p>
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 ml-[18vw] mt-[65vh] text-[6rem] font-bold">
            <p>❌1004</p>
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 mt-[40vh] text-[4rem] font-bold">
            <p>❌1234</p>
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[22rem] mt-[22vh] -z-10">
            <p>🔒</p>
        </div>
      </div>
      
    </div>
  );
}
