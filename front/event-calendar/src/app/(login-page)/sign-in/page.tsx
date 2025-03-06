"use client"

import { Input } from "@/components/ui/input"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosResponse } from "axios";
import Link from 'next/link';

// Playfair_Display 폰트 사용
import { Playwrite_AU_NSW } from "next/font/google";

const playfair = Playwrite_AU_NSW({ 
  weight: ['400']
}) 

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: string;
    email: string;
  };
}

// API 기본 URL 설정
const API_BASE_URL = "http://127.0.0.1:8000/api/user/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
      if (!email || !password) {
        alert("이메일과 비밀번호를 모두 입력해주세요.");
        return;
      }

      setIsLoading(true);
      
      try {
        const response: AxiosResponse<LoginResponse> = await apiClient.post("/", {
          action: "login",
          email,
          password,
        }, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        });

        if (response.data?.success) {
          // 로그인 성공 시 토큰 저장
          if (response.data.token) {
            localStorage.setItem('authToken', response.data.token);
            
            // 사용자 정보가 있다면 저장
            if (response.data.user) {
              localStorage.setItem('user', JSON.stringify(response.data.user));
            }
          }
          
          alert("로그인 성공!");
          router.push('/'); // 대시보드 페이지로 이동
        } else {
          alert(response.data?.message || "로그인 실패");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          alert("로그인 실패: " + (error.response?.data?.message || "이메일 또는 비밀번호가 올바르지 않습니다."));
        } else {
          alert("로그인 중 예상치 못한 오류가 발생했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    return(
        <div className="w-full h-full absolute z-10">
            <div className="w-[100vw] h-[100vh] absolute -z-10">
                <img src="/backimg.png" alt="back" className="w-full h-full object-cover"/>
            </div>

            <h1 className="h-40 w-full flex items-center justify-center text-6xl font-bold text-white">
                <p className={playfair.className}>Event Calendar</p>
            </h1>
            <div className="flex justify-center">
                <div className="w-[30vw] h-[54vh] rounded-xl shadow-2xl">
                    <div className="w-[30vw] h-[54vh] bg-white opacity-40 rounded-xl absolute -z-10 shadow-2xl"></div>
                    <h2 className="h-[23%] w-full text-3xl font-bold flex items-center justify-center">Sign In</h2>
                    <div className="px-6">
                        <Input 
                            placeholder="이메일" 
                            className="w-full h-12 mb-4" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <Input 
                            placeholder="비밀번호" 
                            className="w-full h-12 mb-4" 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />

                        <Button 
                            className="w-full h-12 mt-6 font-bold text-base bg-red-500 hover:bg-red-600"
                            onClick={handleLogin}
                            disabled={isLoading}
                        >
                            {isLoading ? '로그인 중...' : '로그인'}
                        </Button>
                        
                        <div className="mt-4 text-center">
                            <p>계정이 없으신가요? <Link href="/sign-up" className="text-red-500 hover:underline">회원가입</Link></p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}