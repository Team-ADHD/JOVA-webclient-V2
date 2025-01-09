import { createContext, useState, ReactNode, useContext } from "react";

// Context 타입 정의
interface UserStateInfo {
  login: boolean;
  setLogin: (value: boolean) => void;
}

// 초기 값 생성
const UserState = createContext<UserStateInfo | undefined>(undefined);

// Provider 컴포넌트
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <UserState.Provider
      value={{
        login,
        setLogin,
      }}
    >
      {children}
    </UserState.Provider>
  );
};

// Context를 사용하는 커스텀 Hook
export const useUserContext = () => {
  const context = useContext(UserState);
  if (!context) {
    throw new Error("useUserState must be used within a ProfilProvider");
  }
  return context;
};
