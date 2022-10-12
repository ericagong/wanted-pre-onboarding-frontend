import styled from "styled-components";

import List from "./List";

// TODO Assignment 4: todoList 페이지에는 내용과 완료 여부 표시
const Lists = ({ todos, updateTodo, deleteTodo }) => {
  const workingList = todos.filter((todo) => !todo.isCompleted);
  const doneList = todos.filter((todo) => todo.isCompleted);
  return (
    <>
      <StSection>
        <StCategory>Working...🔥</StCategory>
        <List
          list={workingList}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </StSection>
      <StSection>
        <StCategory>Done..! 🎉</StCategory>
        <List list={doneList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </StSection>
    </>
  );
};

export default Lists;

const StSection = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 13px 1px rgba(0, 0, 0, 0.05);
  padding: 30px 20px;
  margin-bottom: 30px;
`;

const StCategory = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 20px;
  margin-bottom: 20px;
`;
