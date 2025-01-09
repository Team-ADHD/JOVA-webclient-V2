import { createContext, useState, ReactNode, useContext } from "react";

// Context 타입 정의
interface ProfilContextType {
  name: string;
  github: string;
  email: string;
  unMajor: number[];
  funMajor: number[];
  setName: (value: string) => void;
  setGithub: (value: string) => void;
  setEmail: (value: string) => void;
  setUnMajor: (value: number[]) => void;
  setFunMajor: (value: number[]) => void;
}

// 초기 값 생성
const ProfilContext = createContext<ProfilContextType | undefined>(undefined);

// Provider 컴포넌트
export const ProfilProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("이상혁");
  const [github, setGithub] = useState("https://github.com/LeeSangHyeok0731");
  const [email, setEmail] = useState("s24066@gsm.hs.kr");
  const [unMajor, setUnMajor] = useState<number[]>([]);
  const [funMajor, setFunMajor] = useState<number[]>([]);

  return (
    <ProfilContext.Provider
      value={{
        name,
        github,
        email,
        unMajor,
        funMajor,
        setName,
        setGithub,
        setEmail,
        setUnMajor,
        setFunMajor,
      }}
    >
      {children}
    </ProfilContext.Provider>
  );
};

// Context를 사용하는 커스텀 Hook
export const useProfilContext = () => {
  const context = useContext(ProfilContext);
  if (!context) {
    throw new Error("useProfilContext must be used within a ProfilProvider");
  }
  return context;
};
