import styled from "styled-components";

// 스타일 정의
const MajorBox = styled.div<{ isActive: boolean }>`
  display: inline-block;
  background-color: ${(props) => (props.isActive ? "#818181" : "#e0e0e0")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  padding: 6px 12px;
  margin: 4px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* 클릭 가능 커서 */
  transition: background-color 0.1s, color 0.1s; /* 부드러운 색상 전환 */
`;

const NormalMajorText = styled.h3`
  margin-right: 300px;
`;

interface FunctionGroupProps {
  activeIndices: number[];
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>; // 상태 업데이트 함수
}

function UniversalMajor({
  activeIndices,
  setActiveIndices,
}: FunctionGroupProps) {
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

  const handleClick = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div>
      <NormalMajorText>일반전공</NormalMajorText>
      {majors.map((major, index) => (
        <MajorBox
          key={index}
          isActive={activeIndices.includes(index)} // 클릭된 항목인지 확인
          onClick={() => handleClick(index)}
        >
          {major}
        </MajorBox>
      ))}
    </div>
  );
}

export default UniversalMajor;
