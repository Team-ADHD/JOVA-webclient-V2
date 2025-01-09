import styled from "styled-components";
import MiniCardJob from "../../../components/MiniCardJob";
import useGetNotionList from "../../../custom/useGetBNotionList";

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-weight: regular;
  font-size: 20px;
`;

const Wrapper = styled.div`
  width: 541px;
  height: 236px;
  background-color: white;
`;

const NotionWrapper = styled.div`
  width: 540px;
  height: 200px;
  background-color: white;
  margin-top: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function RecentNotion() {
  const { data, loading, error } = useGetNotionList();

  return (
    <Wrapper>
      <Text>공지</Text>
      <NotionWrapper>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data?.length ? (
          data.reverse().map((data, index) => {
            if (index < 4)
              return (
                <MiniCardJob
                  title={data.title}
                  userName={data.author}
                  createdAt={data.createdAt}
                  date={data.endsAt}
                  content={data.content}
                />
              );
          })
        ) : (
          <p>No items available</p>
        )}
      </NotionWrapper>
    </Wrapper>
  );
}

export default RecentNotion;
