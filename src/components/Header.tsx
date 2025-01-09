import styled from "styled-components";
import MyIcon from "../images/PeopleIcon";
import MainIcon from "../images/MainIcon";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/loginContext";

const HeaderWrapper = styled.div`
  height: 82px;
  width: 100%;
  background-color: white;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const HeaderItemWrapper = styled.div`
  height: 40px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

const Text = styled(Link)`
  margin: 0;
  font-family: "Pretendard-Regular", sans-serif;
  text-decoration: none;
  color: black;
`;

const LoginBtn = styled.div`
  margin: 0;
  font-family: "Pretendard-Regular", sans-serif;
  text-decoration: none;
  color: black;
`;

const TextWrapper = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconBox = styled(Link)`
  margin-top: 5px;
`;

function Header() {
  const login = useUserContext();

  const go = useNavigate();

  const handleClick = () => {
    if (login.login) {
      go("/profil");
    } else {
      alert("로그인하고 진행해보세요");
      go("/login");
    }
  };

  return (
    <HeaderWrapper>
      <HeaderItemWrapper>
        <IconBox to="/">
          <MainIcon />
        </IconBox>
        <TextWrapper>
          <Text to="/">홈</Text>
          <Text to="/jobpage">구인구직</Text>
          <Text to="/notion">공지</Text>
          <LoginBtn onClick={handleClick}>프로필</LoginBtn>
        </TextWrapper>
        <IconBox to="/login">
          <MyIcon />
        </IconBox>
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
}

export default Header;
