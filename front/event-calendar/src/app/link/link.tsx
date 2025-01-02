import { GetServerSideProps } from 'next';

// Props 타입 정의
interface HomeProps {
    currentDate: string;
}

// getServerSideProps 함수
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    // Django API 호출
    const res = await fetch('http://localhost:8000/api/current-date/');
    const data = await res.json();

    return {
        props: {
            currentDate: data.current_date,
        },
    };
};

// 컴포넌트
const Home: React.FC<HomeProps> = ({ currentDate }) => {
    return (
        <div>
            <h1>Current Date from Django API: {currentDate}</h1>
            <p>dkdkdkk</p>
        </div>
    );
};

export default Home;
