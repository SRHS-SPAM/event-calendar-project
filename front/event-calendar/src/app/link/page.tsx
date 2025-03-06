"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as React from "react";
import axios from "axios";

interface DateResponse {
  current_date: string; // Django에서 보내는 형식
}

const API_BASE_URL = "http://127.0.0.1:8000/api/current-date/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 월 이름 매핑
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function Link() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const router = useRouter();

  // 날짜를 가져오고 처리하는 함수
  const fetchCurrentDate = async () => {
    setIsLoading(true);
    setError(null);
    setDebugInfo(null);
    
    try {
      console.log("API 호출 시작...");
      
      const response = await apiClient.get("/");
      console.log("API 응답:", response.data);
      
      // 응답 구조 디버깅
      setDebugInfo(JSON.stringify(response.data, null, 2));
      
      // 응답에서 current_date 필드 확인
      const currentDate = response.data.current_date;
      
      if (!currentDate) {
        throw new Error("응답에서 'current_date' 필드를 찾을 수 없습니다");
      }
      
      console.log("추출된 날짜:", currentDate);
      
      // 날짜 파싱 (YYYY-MM-DD 형식)
      const dateParts = currentDate.split('-');
      
      if (dateParts.length !== 3) {
        throw new Error("날짜 형식이 예상과 다릅니다: " + currentDate);
      }
      
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]);
      const day = parseInt(dateParts[2]);
      
      console.log(`파싱된 날짜: 년=${year}, 월=${month}, 일=${day}`);
      
      // 월 이름으로 변환
      const monthName = monthNames[month - 1];
      const path = `/${monthName}/${day}`;
      
      console.log("리다이렉트 경로:", path);
      
      // 리다이렉트
      router.push(path);
      
    } catch (err) {
      console.error("날짜를 가져오는 중 오류 발생:", err);
      setError("날짜를 가져오는데 실패했습니다: " + 
               (err instanceof Error ? err.message : "알 수 없는 오류"));
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트가 마운트될 때 자동으로 날짜 정보를 가져옴
  useEffect(() => {
    fetchCurrentDate();
  }, []);

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">날짜 기반 페이지 리다이렉션</h1>
      
      {error && (
        <div className="p-4 mb-4 bg-red-100 text-red-700 rounded-md">
          {error}
          <Button 
            onClick={fetchCurrentDate} 
            disabled={isLoading}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white"
          >
            {isLoading ? "처리 중..." : "다시 시도"}
          </Button>
        </div>
      )}
      
      {debugInfo && (
        <div className="p-4 mb-4 bg-gray-100 rounded-md overflow-auto">
          <p className="font-bold mb-2">API 응답 데이터:</p>
          <pre>{debugInfo}</pre>
        </div>
      )}
      
      {isLoading && (
        <p className="mb-4">날짜 정보를 불러오는 중...</p>
      )}
    </div>
  );
}