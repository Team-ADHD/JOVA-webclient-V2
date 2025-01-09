import { useEffect, useState } from "react";
import styled from "styled-components";
import baseImage from "../../../images/image/baseImage.png";
import UniversalMajor from "../majorSelection/universalMajor";
import FunctionGroup from "../majorSelection/functionGroup";
import { useNavigate } from "react-router-dom";
import { useProfilContext } from "../../../context/context";

// 스타일 컴포넌트 정의
const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 36px;
`;

const ProfilWrapper = styled.div`
  width: 1028px;
  height: 376px;
  display: flex;
  justify-content: space-between;
  margin-top: 85px;
  margin-left: 100px;
`;

const ProfilImage = styled.img`
  width: 376px;
  height: 376px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfilInformationWrapper = styled.div`
  width: 562px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ProfilInformation = styled(Text)`
  font-size: 20px;
  color: #6c6c6c;
`;

const ImformationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ImageCorrection = styled.div`
  height: 463px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Body = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageUpload = styled.input`
  border: 2px dashed #ccc;
  border-radius: 8px;
  width: 197px;
  height: 57px;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  padding-top: 30px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const ToBaseImage = styled.div`
  border-radius: 8px;
  width: 197px;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  background-color: #929292;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

const MiniBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const InputBox = styled.input`
  width: 400px;
  height: 51px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border: 0;
`;

const MajorSellectBtn = styled.div`
  width: 135px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #929292;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 400px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 400px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;
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

const BtnWrapper = styled.div`
  margin-left: 291px;
  display: flex;
  flex-direction: row;
`;

const SubmitBtn = styled.div`
  width: 135px;
  height: 65px;
  background-color: #929292;
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CancleBtn = styled.div`
  width: 135px;
  height: 65px;
  background-color: white;
  color: #929292;
  border-radius: 8px;
  border: 1px solid #929292;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 컴포넌트 정의
function ProfilPictureCorrection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profil, setProfil] = useState<string>(baseImage);
  const [universalMajor, setUniversalMajor] = useState<number[]>([]);
  const [functionMajor, setFunctionMajor] = useState<number[]>([]);

  const {
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
  } = useProfilContext();
  useProfilContext();

  const go = useNavigate();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    go("/profil");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      // 파일을 Base64로 변환하여 미리보기 가능
      reader.onload = () => {
        if (reader.result) {
          setProfil(reader.result.toString());
        }
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setUnMajor(universalMajor);
    setFunMajor(functionMajor);
    console.log(unMajor);
    console.log(funMajor);
  }, [universalMajor, functionMajor]);

  return (
    <Body>
      <Text>개인정보 수정</Text>
      <ProfilWrapper>
        <ImageCorrection>
          <ProfilImage src={profil} alt="Profile" />
          <MiniBoxWrapper>
            <ImageUpload
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <ToBaseImage onClick={() => setProfil(baseImage)}>
              기본이미지
            </ToBaseImage>
          </MiniBoxWrapper>
        </ImageCorrection>
        <ProfilInformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>이름:</ProfilInformation>
            <InputBox
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>Github:</ProfilInformation>
            <InputBox
              placeholder="Github 링크를 입력하세요"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>E-mail:</ProfilInformation>
            <InputBox
              placeholder="이메일 주소를 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>전공:</ProfilInformation>
            <div>
              {universalMajor.map((x) => {
                const majors = [
                  "BackEnd",
                  "FrontEnd",
                  "AI",
                  "DevOps",
                  "UI/UX design",
                  "AOS",
                  "IOS",
                ];
                return <MajorBox key={`uni-${x}`}>{majors[x]}</MajorBox>;
              })}
              {functionMajor.map((x) => {
                const majors = [
                  "IT네트워크",
                  "사이버보안",
                  "클라우드컴퓨팅",
                  "모바일로보틱스",
                  "플러터",
                  "게임개발",
                ];
                return <MajorBox key={`func-${x}`}>{majors[x]}</MajorBox>;
              })}
            </div>
            <MajorSellectBtn onClick={handleModalOpen}>
              전공 선택
            </MajorSellectBtn>
          </ImformationWrapper>
          <BtnWrapper>
            <SubmitBtn onClick={handleClick}>수정</SubmitBtn>
            <CancleBtn onClick={handleClick}>취소</CancleBtn>
          </BtnWrapper>
        </ProfilInformationWrapper>
      </ProfilWrapper>

      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <CloseButton onClick={handleModalClose}>×</CloseButton>
            <h2>전공 선택</h2>
            <UniversalMajor
              activeIndices={universalMajor}
              setActiveIndices={setUniversalMajor}
            />
            <FunctionGroup
              activeIndices={functionMajor}
              setActiveIndices={setFunctionMajor}
            />
          </ModalContent>
        </ModalBackground>
      )}
    </Body>
  );
}

export default ProfilPictureCorrection;
