import Wrapper from "./contentsWrapper/ContentsWrapper";
import styled from "styled-components";
import FilterBar from "./Filter";

const Body = styled.div`
  width: 100%;
  height: 756px;
  position: absolute;
  top: 124px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function HomeBody() {
  return (
    <Body>
      <FilterBar />
      <Wrapper />
    </Body>
  );
}

export default HomeBody;
