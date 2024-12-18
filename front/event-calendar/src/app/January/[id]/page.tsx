"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Read(props: any) {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <>
      <h2>Read</h2>
      <h1>{pathname}</h1>
    </>
  );
}