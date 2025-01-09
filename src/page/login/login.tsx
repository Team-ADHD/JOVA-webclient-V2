import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./loginBtn";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Wrapper = styled.div`
  padding-top: 200px;
  width: 99vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const LoginBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: deepskyblue;
  }
`;

const SignUpBtn = styled.p`
  color: skyblue;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const query = useQuery();
  const code = query.get("code");

  const go = useNavigate();

  const handleClick = () => go("/signup");

  useEffect(() => {
    if (code) {
      const postCode = async () => {
        try {
          const response = await fetch(
            "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ code: code }),
            }
          );

          const result = await response.json();
          console.log("Response:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      postCode();
    }
  }, [code]);

  return (
    <Wrapper>
      <h1>로그인하고 다양한 서비스를 누려보세요!</h1>
      <div>
        <LoginForm>
          <Input type="email" placeholder="이메일" required />
          <Input type="password" placeholder="비밀번호" required />
          <LoginBtn type="submit">로그인</LoginBtn>
        </LoginForm>
        <SignUpBtn onClick={handleClick}>
          계정이 없나요? 회원가입을 해보세요
        </SignUpBtn>
      </div>
      <LoginButton />
    </Wrapper>
  );
};

export default Login;
