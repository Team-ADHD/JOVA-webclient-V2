import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type PropsCard = {
  title: string;
  userName: string;
  createdAt: string;
  date: string;
  content: string;
};

const Table = styled.div`
  width: 100%;
  border-collapse: collapse; /* 테이블 선 겹침 제거 */
  margin: 0; /* 테이블 자체 여백 제거 */
`;

const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 5px 0; /* 상하 여백 최소화 */
  line-height: 1; /* 줄 간격 최소화 */
  &:hover {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.div<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
  padding: 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function MiniCardJob({ title, userName, createdAt, date, content }: PropsCard) {
  const go = useNavigate();

  const Author = userName;
  const Title = title;
  const EndsAt = date;
  const Content = content;

  const handleClick = () => {
    go("/jobpage/detail", { state: { Author, Title, EndsAt, Content } });
  };

  return (
    <Table onClick={handleClick}>
      <TableRow>
        <TableCell flex={1}>{userName}</TableCell>{" "}
        <TableCell flex={1}>{title}</TableCell>
        <TableCell flex={1}>{createdAt}</TableCell>
      </TableRow>
    </Table>
  );
}

export default MiniCardJob;
