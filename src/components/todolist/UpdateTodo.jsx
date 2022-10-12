import { useState } from "react";

import styled from "styled-components";

const UpdateTodo = ({
  id,
  todo,
  isCompleted,
  userId,
  toggleUpdate,
  updateTodo,
}) => {
  const [form, setForm] = useState({
    id,
    todo,
    isCompleted,
    userId,
    hasError: false,
  });

  // form input field 값이 변화할 때마다 이를 반영하는 함수
  const changeHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [field]: value,
      hasError: !value,
    }));
  };

  // 수정하기 모드 isCompleted 값 변경
  const toggleHandler = (e) => {
    setForm((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
  };

  const submitHandler = (e) => {
    updateTodo({ id, todo: form.todo, isCompleted: form.isCompleted });
    toggleUpdate();
  };

  console.log(form.hasError);

  return (
    <>
      <StState>
        <StStatus>{!form.isCompleted ? "진행중" : "완료"}</StStatus>
        <StToggle onClick={toggleHandler}>
          {!form.isCompleted ? "완료로 변경" : "진행 중으로 변경"}
        </StToggle>
      </StState>
      <StInput value={form.todo} onChange={changeHandler} id='todo' />
      {form.hasError ? (
        <StError>수정하기 위해서는 할일을 기입해주셔야해요.</StError>
      ) : null}
      <StButtons>
        <StButton onClick={submitHandler} disabled={form.hasError}>
          제출하기
        </StButton>
        <StButton onClick={toggleUpdate}>취소하기</StButton>
      </StButtons>
    </>
  );
};

export default UpdateTodo;

const StFont = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const StState = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
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
`;

const StToggle = styled.button`
  background: transparent;
  border: none;
  color: #dadada;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #256ef1;
  }
`;

const StInput = styled.input`
  background: #ffffff;
  border: 1.2px solid #dadada;
  border-radius: 6px;
  width: 100%;
  height: 40px;
  padding: 11px 14px 11px 14px;
  margin-bottom: 5px;
  &:hover,
  &:focus {
    outline: none;
    border: 1.2px solid #256ef1;
  }
`;

const StError = styled(StFont)`
  font-size: 10px;
  line-height: 14px;
  color: #256ef1;
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
  border: none;
  border-radius: 6px;
  font-size: 0.8rem;
  transition: all 0.3s;
  &:hover {
    cursor: ${(props) => (!props.disabled ? "pointer" : "cursor")};
    transform: ${(props) => (!props.disabled ? "scale(1.05)" : "none")};
    background: ${(props) => (!props.disabled ? "#256ef1" : "#f3f3f3")};
    color: ${(props) => (!props.disabled ? "#ffffff" : "none")};
  }
`;
