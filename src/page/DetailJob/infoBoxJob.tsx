import styled from "styled-components";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 182px;
  flex-direction: column;
`;
const InfoWrapper = styled.div`
  width: 600px;
  height: 80px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Box1 = styled.div`
  width: 500px;
  height: 64px;
  display: flex;
  flex-direction: column;
`;
const Box2 = styled.div`
  width: 72px;
  height: 64px;
`;
const Content = styled.h1`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  width: 100%; /* 필요한 경우 너비 설정 */
`;
const UserInfo = styled.p`
  margin: 0;
  color: #9e9e9e;
`;

const ContentBox = styled.div`
  width: 600px;
  height: auto;
`;

type InfoDetail = {
  Name: string;
  Title: string;
  TimeDate: string;
  Contents: string;
};

function InfoBoxJob({ Name, Title, TimeDate, Contents }: InfoDetail) {
  return (
    <Body>
      <InfoWrapper>
        <Box1>
          <Content>{Title}</Content>
          <UserInfo>
            작성자: {Name} | {TimeDate}{" "}
          </UserInfo>
        </Box1>
        <Box2></Box2>
      </InfoWrapper>
      <ContentBox>
        <Markdown rehypePlugins={[rehypeRaw]}>{Contents}</Markdown>
      </ContentBox>
    </Body>
  );
}

export default InfoBoxJob;
