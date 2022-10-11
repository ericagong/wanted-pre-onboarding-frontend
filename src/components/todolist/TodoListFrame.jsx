import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Lists from "./Lists";

const TodoListFrame = () => {
  const navigate = useNavigate();

  // Assignment 3: 로그인 여부에 따른 리다이렉트 처리
  const checkToken = () => {
    if (localStorage.getItem("AccessToken")) {
      return;
    }
    // 토큰 존재하지 않는 경우 /로 리다이렉트
    navigate("/");
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      <Lists />
    </>
  );
};

export default TodoListFrame;
