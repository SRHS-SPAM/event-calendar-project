import axios from "axios";

// API 기본 URL 설정 (백엔드 서버의 주소)
const API_BASE_URL = "http://localhost:8080/users";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json", // JSON 형식으로 데이터 전송
  },
});

// 회원가입 API 호출 함수
export const registerUser = async (username: string, password: string, email: string) => {
  try {
    // POST 요청으로 데이터를 백엔드로 전송
    const response = await apiClient.post("/register", { username, password, email });
    return response.data; // 서버 응답 데이터 반환
  } catch (error: any) {
    // 에러 발생 시 에러 메시지 반환
    throw error.response?.data?.message || "Registration failed";
  }
};
