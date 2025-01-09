import RecentNotion from "./RecentNotion";
import styled from "styled-components";
import RecentWrite from "./RecentWrite";

const ContentsWrapper = styled.div`
  margin-top: 40px;
`;

const Margin = styled.div`
  height: 40px;
`;

function Wrapper() {
  return (
    <>
      <ContentsWrapper>
        <RecentNotion />
        <Margin />
        <RecentWrite />
      </ContentsWrapper>
    </>
  );
}

export default Wrapper;
