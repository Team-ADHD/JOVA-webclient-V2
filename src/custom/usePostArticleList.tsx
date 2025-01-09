import { useState } from "react";
import { useProfilContext } from "../context/context";

type Article = {
  User: string;
  Title: string;
  Time: string;
  Contents: string;
  Num: number;
};

type Input = {
  title?: string;
  content?: string;
  category?: number;
  author?: string;
  endsAt?: string;
};

const usePostArticleList = () => {
  const [data, setData] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const name = useProfilContext();

  const url =
    "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/articles";

  const postArticle = async ({ title, content, category, endsAt }: Input) => {
    setLoading(true);
    setError(null);

    console.log(name.name);
    console.log(endsAt);

    try {
      // 인증 토큰 요청
      const tokenResponse = await fetch(
        "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/auth/key?keyInput=aGJojaL6CSEzapYxaK24DLAmBp1mUaQ8VvHxyOufDU=",
        {
          method: "POST",
        }
      );

      if (!tokenResponse.ok) {
        throw new Error(`HTTP error! Status: ${tokenResponse.status}`); //안녕하세요 gistory 화이팅!
      }

      const token = await tokenResponse.text(); // 텍스트 형식으로 받기
      console.log("Fetched Token:", token); // 디버깅 로그

      // 게시글 작성 요청
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // result.token을 직접 사용
        },
        body: JSON.stringify({
          title,
          content,
          category,
          author: name.name,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const articles: Article[] = await response.json();
      setData(articles);
    } catch (error) {
      setError("요청 실패!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { postArticle, data, loading, error };
};

export default usePostArticleList;
