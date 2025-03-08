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
      <div className="h-full w-full absolute inset-0 -z-10 bg-white">
        <Image
            src="/1_25/living_room.png"
            alt="Background"
            className="w-full h-full object-cover opacity-80"
            width={10000}
            height={500}
          />
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-36">
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[12%] ",
            PlaywriteAUNSW.className
          )}>Answer Your</h1>
          <h1
          className={cn(
            "h-7 w-85 flex items-center justify-center text-7xl font-bold text-black-500 mb-[15%] ",
            PlaywriteAUNSW.className
          )}>Cat's Questions Day</h1>
          <h2
          className={cn(
            "w-full flex items-center justify-center text-5xl text-black-300 mb-[10%] ",
            PlaywriteAUNSW.className
          )}>Jan. 22st</h2>
          <p
          className={cn(
            "h-7 w-85 flex items-center justify-center text-6xl font-bold text-black-500 mt-[10%] ",
            NanumBrushScript.className
          )}>고양이에게 대답하기의 날</p>
        </div>
        <div className="h-[35%] w-[25%] absolute inset-0 -z-1 ml-[75vw] mt-[64vh]">
            <Image
              src="/1_22/nap_cat.png" //이미지
              alt="낮잠 자는 고양이"
              className="w-full h-full"
              width={100}
              height={100}
            />
        </div>
        <div className="h-[80%] w-[30%] absolute inset-0 -z-10 mt-[20vh]">
            <Image
              src="/1_22/cat_tower.png" //이미지
              alt="켓타워"
              className="w-full h-full"
              width={100}
              height={500}
            />
        </div>
        <div className="h-[75vh] w-[65vw] absolute inset-0 rounded-[60%] bg-white ml-[17vw] mt-[10vh] border-black border-4 -z-10">
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[8rem] ml-[70vw] mt-[63vh] text-white -rotate-[45deg]">
            <p>▼</p>
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[84vw] rotate-[30deg]">
            <p>❗</p>
        </div>
        <div className="h-[1%] w-[1%] absolute inset-0 text-[10rem] ml-[5vw] mt-[60vh] -rotate-[30deg]">
            <p>❓</p>
        </div>
      </div>
      
    </div>
  );
}
