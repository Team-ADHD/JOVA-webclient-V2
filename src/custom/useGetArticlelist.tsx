import { useState, useEffect } from "react";

type Article = {
  title: string;
  content: string;
  category: string;
  createdAt: string;
  endsAt: string;
  author: string;
};

const useGetAricleList = () => {
  const [data, setData] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url: string =
    "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/articles/list";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "aGJojaL6CSEzapYxaK24DLAm+Bp1mUaQ8VvHxyOufDU=",
          },
        });
        if (!response.ok) {
          const errorMessage = `HTTP error! Status: ${response.status} - ${response.statusText}`;
          throw new Error(errorMessage);
        }
        const result = await response.json();
        /*
        /[
          {
            "article_id": 1,
            "title": "에러",
            "content": "400",
            "category": "BACKEND",
            "createdAt": "2024-12-27T00:00:00",
            "endsAt": "2024-12-31T00:00:00",
            "author": "황지훈"
          }
        ]
        */

        setData(result);
      } catch (error) {
        setError("요청 실패!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetAricleList;
