import styled from "styled-components";
import logo from "../../images/image/가우스로고.png";

const LoginBtn = styled.button`
  width: 411px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  color: #547ec7;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

function LoginButton() {
  return (
    <LoginBtn
      onClick={() => {
        window.location.href =
          "https://gauth.co.kr/login?client_id=ef87a56a1978408dafd0dfe9e851630b16677b9a3d804b93a75e3de53f4eca10&redirect_uri=https://gauth-test-qcns.vercel.app";
      }}
    >
      <Logo src={logo} />
      로그인하기
    </LoginBtn>
  );
}

export default LoginButton;
