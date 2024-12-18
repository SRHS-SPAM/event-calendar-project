"use client";

import { usePathname } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function Read({ params }: Props) {
  const pathname = usePathname();
  const Params = use(params); 

  return (
    <>
    <h1>January.{Params.id}</h1>
    </>
  );
}
