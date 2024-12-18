"use client";

import { usePathname } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const messages: Record<string, string> = {
  "1": "지구 가족의 날",
  "2": "몰라",
};

export default function Read({ params }: Props) {
  const pathname = usePathname();
  const Params = use(params); 
  
  let massage;

  switch (Params.id) {
    case "1":
      massage = messages[1];
      break;

    case "2":
      massage = messages[2];
      break;
  
    default:
      break;
  }


  return (
    <>
      <h1>1월 {Params.id}일</h1>
      <h1>{massage}</h1>
    </>
  );
}

