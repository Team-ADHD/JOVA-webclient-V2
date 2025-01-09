import styled from "styled-components";
import baseImage from "../../images/image/baseImage.png";
import PenIcon from "../../images/Pen";
import { useNavigate } from "react-router-dom";
import { useProfilContext } from "../../context/context";
import { useState } from "react";
import UserJob from "../UserJobVa/UserJob";

const MajorBox = styled.div`
  display: inline-block;
  background-color: #818181;
  color: white;
  padding: 6px 12px;
  margin: 4px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 36px;
`;

const ProfilWrapper = styled.div`
  width: 687px;
  height: 376px;
  display: flex;
  justify-content: space-between;
  margin-top: 85px;
  margin-right: 200px;
`;

const ProfilImage = styled.img`
  width: 376px;
  height: 376px;
  border-radius: 50%;
`;

const ProfilInformationWrapper = styled.div`
  width: 222px;
  height: 376px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ProfilInformation = styled(Text)`
  font-size: 24px;
`;

const ImformationWrapper = styled.div``;

const UserImformation = styled(Text)`
  font-size: 24px;
  color: rgba(148, 148, 148, 1);
  font-weight: 100;
`;

const CorrectionButton = styled.div`
  width: 135px;
  height: 65px;
  border: 1px solid #929292;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-left: 1000px;
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 396px;
  height: 845px;
  border-right: 1px solid black;

  display: flex;
  justify-content: center;
`;

const MenuBox = styled.div`
  width: 200px;
  height: 396px;
  display: flex;
  flex-direction: column;
`;

const Blank = styled.div`
  height: 40px;
`;

const SmallBlank = styled.div`
  height: 5px;
`;

const TextP = styled.p`
  color: #979797;
  cursor: pointer;
`;

function ProfilPicture() {
  const { name, github, email, unMajor, funMajor } = useProfilContext();

  const [page, setPage] = useState<number>(0);

  const go = useNavigate();

  const goPath = () => {
    go("/profilcorrection");
  };

  return (
    <>
      {page === 0 ? (
        <>
          <Text>회원 정보</Text>
          <ProfilWrapper>
            <ProfilImage src={baseImage} />
            <ProfilInformationWrapper>
              <ImformationWrapper>
                <ProfilInformation>이름:</ProfilInformation>
                <UserImformation>{name}</UserImformation>
              </ImformationWrapper>
              <ImformationWrapper>
                <ProfilInformation>github:</ProfilInformation>
                <UserImformation>{github}</UserImformation>
              </ImformationWrapper>
              <ImformationWrapper>
                <ProfilInformation>E-mail:</ProfilInformation>
                <UserImformation>{email}</UserImformation>
              </ImformationWrapper>
              <ImformationWrapper>
                <ProfilInformation>전공:</ProfilInformation>
                <UserImformation>
                  {unMajor.map((x) => {
                    const majors = [
                      "BackEnd", // 0
                      "FrontEnd", //1
                      "AI", // 2
                      "DevOps", //3
                      "UI/UX design", //4
                      "AOS", //5
                      "IOS", //6
                    ];
                    return <MajorBox key={`uni-${x}`}>{majors[x]}</MajorBox>;
                  })}
                  {funMajor.map((x) => {
                    const majors = [
                      "IT네트워크", //0
                      "사이버보안", // 1
                      "클라우드컴퓨팅", // 2
                      "모바일로보틱스", //3
                      "플러터", //4
                      "게임개발", //5
                    ];
                    return <MajorBox key={`func-${x}`}>{majors[x]}</MajorBox>;
                  })}
                </UserImformation>
              </ImformationWrapper>
            </ProfilInformationWrapper>
          </ProfilWrapper>
          <CorrectionButton onClick={goPath}>
            <PenIcon />
            수정하기
          </CorrectionButton>
        </>
      ) : page === 1 ? (
        <UserJob />
      ) : (
        <></>
      )}
      <Menu>
        <MenuBox>
          <h1>마이페이지</h1>
          <Blank />
          <Blank />
          <h2>나의 정보</h2>
          <SmallBlank />
          <SmallBlank />
          <TextP onClick={() => setPage(0)}>회원 정보</TextP>
          <Blank />
          <h2>채용</h2>
          <SmallBlank />
          <SmallBlank />
          <TextP onClick={() => setPage(1)}>지원한 공고</TextP>
          <SmallBlank />
          <TextP onClick={() => setPage(2)}>게시한 공고</TextP>
        </MenuBox>
      </Menu>
    </>
  );
}

export default ProfilPicture;
