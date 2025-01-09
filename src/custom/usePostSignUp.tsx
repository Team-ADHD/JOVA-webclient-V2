import { useState } from "react";

type SignUp = {
  email: string;
  name: string;
  classNum: number;
  grade: number;
  number: number;
  password: string;
};

type Input = {
  email: string;
  name: string;
  classNum: number;
  grade: number;
  number: number;
  password: string;
};

const usePostSIgnUp = () => {
  const [data, setData] = useState<SignUp | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const url =
    "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/auth/signup";

  const postSignUp = async ({
    email,
    name,
    classNum,
    grade,
    number,
    password,
  }: Input) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer`, // result.token을 직접 사용
        },
        body: JSON.stringify({
          email: email,
          name: name,
          classNum: classNum,
          grade: grade,
          number: number,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const articles = await response.json();
      setData(articles);
    } catch (error) {
      setError("요청 실패!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { postSignUp, data, loading, error };
};

export default usePostSIgnUp;
