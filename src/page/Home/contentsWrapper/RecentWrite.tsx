import styled from "styled-components";
import MiniCard from "../../../components/MiniCard";
import useGetAricleList from "../../../custom/useGetArticlelist";

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

const WriteWrapper = styled.div`
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

function RecentWrite() {
  const { data, loading, error } = useGetAricleList();

  return (
    <Wrapper>
      <Text>구인구직 판</Text>
      <WriteWrapper>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data?.length ? (
          data.reverse().map((data, index) => {
            if (index < 4)
              return (
                <MiniCard
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
      </WriteWrapper>
    </Wrapper>
  );
}

export default RecentWrite;
