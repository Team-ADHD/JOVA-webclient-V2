import { useState } from "react";
import styled from "styled-components";
import MiniNotion from "./MiniNotion";
import { Link } from "react-router-dom";
import useGetNotionList from "../../custom/useGetBNotionList";

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

type TextPProps = {
  marginLeft: number;
};

const TextP = styled.p<TextPProps>`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
`;

const MiniNotionWrapper = styled.div`
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

const NotificationButton = styled(Link)`
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

function NotionBody() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, loading, error } = useGetNotionList();

  console.log(data);

  /*
  const TempArray: NotionProps[] = [
    {
      User: "1412 이상혁",
      Title:
        "메이플 진힐라 팟 급구@@@@ 260, 전투력 1억 이상asdklighowiebfoaisehflashflkasjflkasdjf;lkasjdf;lkasjd;flkasdjf;lkasjdf;lkasjdf;lkasdjf;",
      Time: "2024.12.16",
      Contents:
        "# 메이플 진힐라 팟 모집 <br> <center>전투력 1억 이상, 신청해주세요!</center>",
    },
    {
      User: "김태은",
      Title: "Rainbow Friends 팀원 급구!!",
      Time: "2024.12.17",
      Contents:
        "*급구* Rainbow Friends 팀원 모집 중입니다. 관심 있는 분들은 DM 주세요!",
    },
    {
      User: "최준영",
      Title: "JOVA팀원 모집합니다",
      Time: "2024.12.16",
      Contents:
        "JOVA 팀원 모집합니다. **프로젝트 이름**: JOVA\n팀원들 구하고 있습니다. 관심 있는 분들 연락주세요!",
    },
    {
      User: "황지훈",
      Title: "밥 한 끼만 사주세요",
      Time: "2024.1.27",
      Contents:
        "밥 한 끼 사주실 분 찾고 있습니다. **위치**: 서울 강남구. 연락주세요.",
    },
    {
      User: "서경주",
      Title: "밥 한 끼 사드릴께요",
      Time: "2077.27.01",
      Contents: "_밥 한 끼 사드릴께요_ 연락 주세요. 😊",
    },
    {
      User: "박현민",
      Title: "여자친구 사귄 날짜: 2026. 2.30ㅋ",
      Time: "2024.12.16",
      Contents:
        "*2026년 2월 30일*에 여자친구 사귄 날짜를 기념하는 글입니다. 😂",
    },
    {
      User: "박승일",
      Title: "AI 재밌어요 진짜로 많이 하세요",
      Time: "2024.12.16",
      Contents: "**AI**를 사용해보세요. 진짜 재밌습니다! 많이 해보세요.",
    },
    {
      User: "이가은",
      Title: "GSM 빈자리 들어가고 싶습니다",
      Time: "2024.12.16",
      Contents: "GSM 빈자리 들어가고 싶습니다. **제안**: 팀원 추가 모집 중!",
    },
    {
      User: "이준희",
      Title: "React와 TypeScript 공부 중!",
      Time: "2024.12.18",
      Contents:
        "React와 TypeScript를 공부 중입니다. **개발 공부**에 대한 의견이나 조언 부탁드립니다.",
    },
    {
      User: "김민수",
      Title: "UI/UX 디자이너 협업",
      Time: "2024.12.12",
      Contents:
        "**UI/UX 디자이너**와 협업을 진행합니다. 관심 있으신 분들은 DM 주세요.",
    },
    {
      User: "최서연",
      Title: "앱 개발자 같이 공부해요",
      Time: "2024.12.13",
      Contents:
        "앱 개발자 **공부** 함께 해요. React Native, Flutter 등 공부 중입니다!",
    },
    {
      User: "박지훈",
      Title: "스터디 모집 공지입니다",
      Time: "2024.12.14",
      Contents: "스터디 모집 공지입니다. 관심 있는 분들은 연락주세요! 📚",
    },
    {
      User: "조현우",
      Title: "해커톤 팀원 급구!",
      Time: "2024.12.15",
      Contents:
        "해커톤 **팀원 모집** 중입니다! 관심 있으신 분들은 연락 주세요!",
    },
    {
      User: "김하늘",
      Title: "기획자와 함께 프로젝트할 분?",
      Time: "2024.12.16",
      Contents: "기획자와 **프로젝트** 진행할 분 구합니다! 연락 주세요!",
    },
    {
      User: "장민호",
      Title: "웹 개발 프로젝트 참여자 모집",
      Time: "2024.12.17",
      Contents:
        "*웹 개발* 프로젝트 참여자를 모집합니다. 관심 있는 분들은 연락주세요!",
    },
    {
      User: "신지수",
      Title: "프로그래밍 튜터링 모집합니다",
      Time: "2024.12.18",
      Contents:
        "프로그래밍 **튜터링**을 하고 있습니다. 관심 있으신 분들은 DM 주세요!",
    },
    {
      User: "오승민",
      Title: "모각코 같이 하실 분",
      Time: "2024.12.19",
      Contents:
        "**모각코** 같이 하실 분 구합니다. 관심 있으신 분들은 DM 주세요!",
    },
    {
      User: "배윤아",
      Title: "Vue.js 스터디 팀 모집 공지",
      Time: "2024.12.20",
      Contents:
        "Vue.js **스터디 팀 모집** 공지입니다. 관심 있으신 분들은 연락주세요!",
    },
    {
      User: "정하윤",
      Title: "졸업작품 협업 구합니다",
      Time: "2024.12.21",
      Contents:
        "졸업작품 협업 **팀원 모집**합니다! 관심 있으신 분들은 연락주세요!",
    },
    {
      User: "이상우",
      Title: "개발 공부방 참여자 모집",
      Time: "2024.12.22",
      Contents:
        "개발 공부방 **참여자 모집**합니다. 관심 있으신 분들은 DM 주세요!",
    },
    {
      User: "최연재",
      Title: "AI 모델링 해보실 분 구함",
      Time: "2024.12.23",
      Contents:
        "AI **모델링** 해보실 분 구합니다. 관심 있으신 분들은 DM 주세요!",
    },
    {
      User: "김도현",
      Title: "React Native 프로젝트 팀원",
      Time: "2024.12.24",
      Contents:
        "React Native 프로젝트 **팀원 모집**합니다. 관심 있으신 분들은 연락주세요!",
    },
    {
      User: "이수빈",
      Title: "게임 개발 프로젝트 팀 구합니다",
      Time: "2024.12.25",
      Contents:
        "게임 개발 프로젝트 **팀원 모집**합니다. 관심 있으신 분들은 DM 주세요!",
    },
    {
      User: "강지훈",
      Title: "프리랜서 개발자 협업 모집",
      Time: "2024.12.26",
      Contents:
        "프리랜서 **개발자 협업** 모집 중입니다. 관심 있는 분들은 연락주세요!",
    },
    {
      User: "박유림",
      Title: "오픈소스 기여 함께해요",
      Time: "2024.12.27",
      Contents: "오픈소스 **기여** 함께 해요. 관심 있으신 분들은 연락주세요!",
    },
    {
      User: "김성준",
      Title: "CSS 고수분들 조언 부탁드립니다",
      Time: "2024.12.28",
      Contents: "**CSS** 고수분들, 조언 부탁드립니다. 알려주세요!",
    },
    {
      User: "최민석",
      Title: "기초부터 배우는 프로젝트 팀",
      Time: "2024.12.29",
      Contents:
        "기초부터 배우는 **프로젝트 팀** 모집합니다. 관심 있으신 분들은 DM 주세요!",
    },
    {
      User: "한지민",
      Title: "파이썬 알고리즘 스터디 팀원 구인",
      Time: "2024.12.30",
      Contents:
        "파이썬 알고리즘 **스터디 팀원 구인**합니다. 관심 있으신 분들은 DM 주세요!",
    },
    {
      User: "김민수",
      Title: "React 스터디 팀원 모집합니다!",
      Time: "2024.12.17",
      Contents:
        "React 스터디 **팀원 모집**합니다. 관심 있으신 분들은 연락주세요!",
    },
    {
      User: "이지은",
      Title: "알고리즘 스터디 발표 자료 공유",
      Time: "2024.12.16",
      Contents: "알고리즘 **스터디 발표 자료** 공유합니다. 확인해 보세요!",
    },
    {
      User: "박철수",
      Title: "Kotlin 프로젝트 협업 인원 구합니다",
      Time: "2024.12.15",
      Contents:
        "Kotlin **프로젝트 협업** 인원 구합니다. 관심 있으신 분들은 연락 주세요!",
    },
    {
      User: "최윤정",
      Title: "개발자 커리어 상담 진행합니다",
      Time: "2024.12.14",
      Contents:
        "개발자 **커리어 상담**을 진행합니다. 관심 있으신 분들은 DM 주세요!",
    },
    {
      User: "장준혁",
      Title: "Hackathon 2024 팀원을 구합니다",
      Time: "2024.12.13",
      Contents:
        "**Hackathon 2024** 팀원 모집합니다. 관심 있으신 분들은 연락주세요!",
    },
    {
      User: "윤하영",
      Title: "TypeScript 스터디 관련 공지사항",
      Time: "2024.12.12",
      Contents: "TypeScript **스터디 관련 공지사항**입니다. 확인해 주세요!",
    },
    {
      User: "배수진",
      Title: "Java로 작성한 간단한 툴 배포합니다",
      Time: "2024.12.11",
      Contents:
        "Java로 작성한 **간단한 툴 배포**합니다. 관심 있으시면 다운로드해 주세요!",
    },
    {
      User: "정우성",
      Title: "프론트엔드와 백엔드 협업 세미나",
      Time: "2024.12.10",
      Contents:
        "**프론트엔드와 백엔드 협업** 세미나 안내입니다. 관심 있으신 분들은 DM 주세요!",
    },
    {
      User: "한예슬",
      Title: "CSS-in-JS 라이브러리 비교와 사례",
      Time: "2024.12.09",
      Contents:
        "CSS-in-JS 라이브러리 비교와 사례를 **공유**합니다. 확인해 보세요!",
    },
    {
      User: "이강호",
      Title: "개발 관련 Q&A 세션 진행 안내",
      Time: "2024.12.08",
      Contents:
        "개발 관련 **Q&A 세션** 진행 안내입니다. 관심 있으시면 참여해 주세요!",
    },
    {
      User: "메타데이터",
      Title: "메타데이터 임의로 정했습니다",
      Time: "adfwaoirhvbn",
      Contents: "### 메타데이터\n**임의로 설정한 메타데이터**입니다.",
    },
  ];*/

  const totalPages = Math.ceil(data != null ? data.length / itemsPerPage : 0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper>
      <Text>공지사항</Text>
      <DividSpace />
      <TextP marginLeft={0}>전체 {data != null ? data.length : 0}건</TextP>
      <Table>
        <TableRow>
          <TableCell flex={0.5}>No</TableCell>
          <TableCell flex={1}>작성자</TableCell>
          <TableCell flex={2}>제목</TableCell>
          <TableCell flex={1}>등록일</TableCell>
        </TableRow>
      </Table>
      <MiniNotionWrapper>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data?.length ? (
          data
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .reverse()
            .map((item, index) => (
              <MiniNotion key={index + 1} Num={index + 1} {...item} />
            ))
        ) : (
          <p>No items available</p>
        )}
      </MiniNotionWrapper>
      <PaginationWrapper>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            Math.abs(pageNumber - currentPage) <= 1
          ) {
            return (
              <PageButton
                key={pageNumber}
                active={currentPage === pageNumber}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </PageButton>
            );
          } else if (pageNumber === 2 || pageNumber === totalPages - 1) {
            return <p key={pageNumber}>...</p>;
          }
          return null;
        })}
      </PaginationWrapper>
      <NotificationButton to="/notification">
        <NotificationButtonBox>공지 작성하기</NotificationButtonBox>
      </NotificationButton>
    </Wrapper>
  );
}

export default NotionBody;
