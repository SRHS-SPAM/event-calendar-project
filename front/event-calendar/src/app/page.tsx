import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>home</div>
      <Link href="/link" className="text-blue-500 font-bold hover:underline">이벤트 페이지 보러가기 →</Link>
    </>
    

    
  );
}
