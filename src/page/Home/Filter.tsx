import { useState } from "react";
import styled from "styled-components";
import UniversalMajor from "../Profil/majorSelection/universalMajor";
import FunctionGroup from "../Profil/majorSelection/functionGroup";
import SearchIcon from "../../images/SearchIcon";

const FilterWrapper = styled.div`
  width: 540px;
  height: 39.88px;
  border: 2px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Filter = styled.div`
  width: 500px;
  height: 30px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 380px;
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

function FilterBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [universalMajor, setUniversalMajor] = useState<number[]>([]);
  const [functionMajor, setFunctionMajor] = useState<number[]>([]);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    console.log(universalMajor, functionMajor);
  };

  const isEmpty = universalMajor.length === 0 && functionMajor.length === 0;

  return (
    <>
      <FilterWrapper>
        <Filter onClick={handleModal}>
          {isEmpty ? (
            "당신이 검색할 전공을 선택해 주세요"
          ) : (
            <div>
              {universalMajor.map((e) => {
                const majors = [
                  "FrontEnd",
                  "BackEnd",
                  "DevOps",
                  "UI/UX design",
                  "AI",
                  "AOS",
                  "IOS",
                  "DB",
                ];

                return <MajorBox key={`uni-${e}`}>{majors[e]}</MajorBox>;
              })}
              {functionMajor.map((E) => {
                const majors = [
                  "게임개발",
                  "모바일로보틱스",
                  "클라우드컴퓨팅",
                  "플러터",
                  "사이버보안",
                  "IT네트워크",
                ];
                return <MajorBox key={`func-${E}`}>{majors[E]}</MajorBox>;
              })}
            </div>
          )}
        </Filter>
        <div onClick={handleClick}>
          <SearchIcon />
        </div>
      </FilterWrapper>
      {isModalOpen && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <ModalClose onClick={closeModal}>x</ModalClose>
            <h2>전공을 선택해 주세요!</h2>
            <UniversalMajor
              activeIndices={universalMajor}
              setActiveIndices={setUniversalMajor}
            />
            <FunctionGroup
              activeIndices={functionMajor}
              setActiveIndices={setFunctionMajor}
            />
          </Modal>
        </>
      )}
    </>
  );
}

export default FilterBar;
