import styled from "styled-components";
import Header from "../../components/Header";
import { useState } from "react";
import usePostSIgnUp from "../../custom/usePostSignUp";
import { useNavigate } from "react-router-dom";

const SignUpContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SignUpButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Div = styled.div`
  height: 170px;
`;

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [classNum, setClassNum] = useState<number>(0);
  const [grade, setGrade] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);
  const [password, setPassword] = useState<string>("");

  const { postSignUp } = usePostSIgnUp();

  const go = useNavigate();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const date = {
      email,
      name,
      classNum,
      grade,
      number,
      password,
    };

    await postSignUp(date);
    console.log("회원가입 성공");
    go("/login");
  };

  return (
    <>
      <Header />
      <Div />
      <SignUpContainer>
        <Title>회원가입</Title>
        <Form>
          <InputContainer>
            <Label htmlFor="email">이메일</Label>
            <Input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="username">성명</Label>
            <Input
              type="text"
              id="username"
              placeholder="성명을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="classNum">반</Label>
            <Input
              type="number"
              id="classNum"
              placeholder="반을 입력하세요"
              value={classNum}
              onChange={(e) => setClassNum(Number(e.target.value))}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="grade">학년</Label>
            <Input
              type="number"
              id="grade"
              placeholder="학년을 입력하세요"
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value))}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="number">번호</Label>
            <Input
              type="number"
              id="number"
              placeholder="번호를 입력하세요"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="number">비밀번호</Label>
            <Input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
        </Form>
        <SignUpButton onClick={handleClick}>회원가입</SignUpButton>
      </SignUpContainer>
    </>
  );
}

export default SignUp;
