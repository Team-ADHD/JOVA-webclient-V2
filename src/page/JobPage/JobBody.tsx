import { useState } from "react";
import styled from "styled-components";
import MiniJob from "./MiniJob";
import { useNavigate } from "react-router-dom";
import useGetAricleList from "../../custom/useGetArticlelist";

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 44px;
`;

const Wrapper = styled.div`
  top: 100px;
  position: absolute;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DividSpace = styled.div`
  width: 20px;
  height: 2px;
  background-color: gray;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const MiniJobWrapper = styled.div`
  width: 1103px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ active: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${({ active }) => (active ? "#007BFF" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const NotificationButtonBox = styled.div`
  width: 150px;
  height: 54px;
  border: 1px solid #b0b0b0;
  border-radius: 15px;
  display: flex;
  margin-left: 950px;
  align-items: center;
  justify-content: center;
`;

const NotificationButton = styled.div`
  text-decoration-line: none;
  color: black;
`;

const Table = styled.div`
  width: 1103px;
  border-collapse: collapse;
  margin: 0;
`;

const TableRow = styled.div`
  display: flex;
  border-bottom: 3px solid #e0e0e0;
  padding: 5px 0; /* 상하 여백 최소화 */
  line-height: 1; /* 줄 간격 최소화 */
`;

const TableCell = styled.div<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
  padding: 5px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextP = styled.p`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
`;

const JobBody = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, loading, error } = useGetAricleList();

  const total = data?.length ?? 0;

  const go = useNavigate();

  const handleClick = () => {
    go("/jobnotion");
  };

  // 역순으로 정렬된 데이터를 기준으로 현재 페이지에 맞는 항목 가져오기
  const sortedData = data?.slice().reverse(); // 원본 데이터 유지
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentPageData = sortedData?.slice(startIdx, startIdx + itemsPerPage);

  return (
    <Wrapper>
      <Text>구인구직</Text>
      <DividSpace />
      <TextP>전체 {total}건</TextP>
      <Table>
        <TableRow>
          <TableCell flex={0.5}>No</TableCell>
          <TableCell flex={1}>작성자</TableCell>
          <TableCell flex={2}>제목</TableCell>
          <TableCell flex={1}>등록일</TableCell>
        </TableRow>
      </Table>
      <MiniJobWrapper>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : currentPageData?.length ? (
          currentPageData.map((item, index) => (
            <MiniJob
              key={total - startIdx - index}
              Num={total - startIdx - index}
              {...item}
            />
          ))
        ) : (
          <p>No items available</p>
        )}
      </MiniJobWrapper>
      <PaginationWrapper>
        {data &&
          Array.from(
            { length: Math.ceil(data.length / itemsPerPage) },
            (_, index) => (
              <PageButton
                key={index}
                active={currentPage === index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PageButton>
            )
          )}
      </PaginationWrapper>
      <NotificationButtonBox onClick={handleClick}>
        <NotificationButton>구인구직 작성하기</NotificationButton>
      </NotificationButtonBox>
    </Wrapper>
  );
};

export default JobBody;
