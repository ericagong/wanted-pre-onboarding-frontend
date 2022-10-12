import styled from "styled-components";

// TODO assignment 5 todo 삭제 기능 구현
const ReadTodo = ({ id, todo, isCompleted, toggleUpdate, deleteTodo }) => {
  // todo 읽기 모드에서 삭제 API 호출
  const deleteHandler = () => {
    deleteTodo({ id });
  };

  return (
    <>
      <StStatus>{isCompleted ? "완료" : "진행중"}</StStatus>
      <StTodo>
        {todo?.length <= 28 ? todo : todo?.slice(0, 26).concat("...")}
      </StTodo>
      <StButtons>
        <StButton onClick={toggleUpdate}>수정하기</StButton>
        <StButton onClick={deleteHandler}>삭제하기</StButton>
      </StButtons>
    </>
  );
};

export default ReadTodo;

const StFont = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const StStatus = styled(StFont)`
  width: 45px;
  height: 20px;

  background: #ffffff;
  border: 1px solid #256ef1;
  border-radius: 6px;

  font-size: 0.8rem;
  color: #256ef1;
  text-align: center;
  padding: 3px;
  margin-bottom: 15px;
`;

const StTodo = styled(StFont)`
  font-size: 1rem;
  margin-bottom: 15px;
`;

const StButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const StButton = styled.button`
  width: calc(100% - 40px - 10px);
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
