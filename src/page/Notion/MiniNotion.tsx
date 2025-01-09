import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type NotionProps = {
  title: string;
  content: string;
  category: string;
  createdAt: string;
  endsAt: string;
  author: string;
  Num: number;
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

function MiniNotion({
  title,
  content,
  category,
  createdAt,
  endsAt,
  author,
  Num,
}: NotionProps) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Category, setCategory] = useState("");
  const [CreatedAt, setCreatedAt] = useState("");
  const [EndsAt, setEndsAt] = useState("");
  const [Author, setAuthor] = useState("");
  const [number, setNumber] = useState<number>(0);

  const go = useNavigate();

  useEffect(() => {
    setTitle(title);
    setContent(content);
    setCategory(category);
    setCreatedAt(createdAt);
    setEndsAt(endsAt);
    setAuthor(author);
    setNumber(Num);
  }, [title, content, category, createdAt, endsAt, author, Num]);

  const handleClick = () => {
    go("/notion/detail", { state: { Author, Title, EndsAt, Content } });
    console.log(Category);
  };

  return (
    <Table>
      <TableRow onClick={handleClick}>
        <TableCell flex={0.5}>{number}</TableCell>
        <TableCell flex={1}>{Author}</TableCell>
        <TableCell flex={2}>{Title}</TableCell>
        <TableCell flex={1}>{CreatedAt}</TableCell>
      </TableRow>
    </Table>
  );
}

export default MiniNotion;
