import styled from "styled-components";
import React from "react";

// id 기반 상세 페이지 전환 라우터 연결하기!
const Todo = ({ id, todo, isCompleted, userId, updateTodo, deleteTodo }) => {
  return (
    <StLayout>
      <StTodo>
        {todo?.length <= 28 ? todo : todo?.slice(0, 26).concat("...")}
      </StTodo>
      <StButtons>
        <StButton onClick={deleteTodo} className='todoButton'>
          삭제하기
        </StButton>
        <StButton onClick={updateTodo} className='todoButton'>
          {!isCompleted ? "완료하기" : "미완료하기"}
        </StButton>
      </StButtons>
    </StLayout>
  );
};

export default Todo;

const StLayout = styled.div`
  grid-column: span 4;
  height: 150px;
  border: 1px solid #eeeeee;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0px 20px;

  /* mobile */
  @media all and (max-width: 700px) {
    grid-column: span 4;
  }
`;

const StTodo = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

const StButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const StButton = styled.button`
  width: calc(100% - 60px - 10px);
  min-width: 65px;
  height: 30px;
  background: #f3f3f3;
  color: black;
  border: none;
  border-radius: 6px;
  font-size: 0.8rem;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background: #256ef1;
    color: #ffffff;
  }
`;
