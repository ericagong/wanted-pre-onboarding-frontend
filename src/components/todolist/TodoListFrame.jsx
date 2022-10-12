import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { apis } from "../../shared/axios";
import CreateTodo from "./CreateTodo";
import Lists from "./Lists";

const TodoListFrame = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  // todo Create
  const addTodo = async ({ todo }) => {
    const resp = await apis.create_todo({ todo });
    const createdTodo = resp.data;

    setTodos((prev) => [...prev, createdTodo]);
  };

  // todos Read
  const getTodos = async () => {
    const resp = await apis.get_todos();
    const allTodos = resp.data;
    setTodos(allTodos);
  };

  // todo Update
  const updateTodo = async ({ id, todo, isCompleted }) => {
    const resp = await apis.update_todo({ id, todo, isCompleted });
    const updatedTodo = resp.data;
    setTodos((prev) =>
      prev.map((item) => (item.id === updatedTodo.id ? updateTodo : item))
    );
  };

  // todo Delete
  const deleteTodo = async ({ id }) => {
    await apis.delete_todo({ id });
    setTodos((prev) => prev.filter((item) => item.id !== id));
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
      <CreateTodo createTodo={addTodo} />
      {/* <Lists updateTodo={updateTodo} deleteTodo={deleteTodo} /> */}
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
