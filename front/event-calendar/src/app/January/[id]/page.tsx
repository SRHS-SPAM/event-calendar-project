// "use client";

// import { usePathname } from "next/navigation";
// import { use } from "react";

// type Props = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export default function Read({ params }: Props) {
//   const pathname = usePathname();
//   const Params = use(params); 


//   return (
//     <>
//       <h1>January.{Params.id}</h1>
//     </>
//   );
// }

import { useRouter } from "next/router";

const messages: Record<string, string> = {
  "1": "안녕하세요 반가워요",
  "2": "오랜만이에요",
};

export default function DynamicPage() {
  const router = useRouter();
  const { day } = router.query;

  const message = typeof day === "string" ? messages[day] || "페이지를 찾을 수 없습니다." : "";

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">{message}</h1>
      </div>
    </div>
  );
}
