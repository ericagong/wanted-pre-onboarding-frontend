import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { apis } from "../../shared/axios";
import CreateTodo from "./CreateTodo";
import Lists from "./Lists";

const TodoListFrame = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    const resp = apis.get_todos();
    setTodos(resp.data);
  };

  // Assignment 3: 로그인 여부에 따른 리다이렉트 처리
  const checkToken = () => {
    if (localStorage.getItem("AccessToken")) {
      // todos를 가져옴
      getTodos();
      return;
    }
    // 토큰 존재하지 않는 경우 /로 리다이렉트
    navigate("/");
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <StLayout>
      <CreateTodo />
      {/* <Lists /> */}
    </StLayout>
  );
};

export default TodoListFrame;

const StLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(236, 236, 236, 0.3);
  padding: 0px 30px;
`;
