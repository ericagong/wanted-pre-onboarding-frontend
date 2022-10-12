import styled from "styled-components";

import { useState } from "react";

const CreateTodo = (props) => {
  const [form, setForm] = useState({ title: "", content: "" });

  // input field의 변경 내용 반영
  const changeHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // 사용자가 제출 버튼을 눌렀을 때 신규 todo를 추가하는 함수
  const submitHandler = (event) => {
    event.preventDefault();

    setForm({ title: "", content: "" });
  };

  return (
    <StForm onsubmit={submitHandler}>
      <StField>
        <StLabel htmlFor='title'>제목</StLabel>
        <StInput
          type='text'
          id='title'
          value={form.title}
          onChange={changeHandler}
          required
        />
      </StField>
      <StField>
        <StLabel htmlFor='contents'>내용</StLabel>
        <StInput
          type='text'
          id='content'
          value={form.content}
          onChange={changeHandler}
          required
        />
      </StField>
      <StButton
        type='submit'
        disabled={form.title && form.content ? false : true}
      >
        할일 추가하기
      </StButton>
    </StForm>
  );
};

export default CreateTodo;

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;
  padding: 20px 0px;

  background: rgba(236, 236, 236, 0.3);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.04);
`;

const StField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const StLabel = styled.label`
  font-family: "Noto Sans KR";
  font-style: normal;
  letter-spacing: -0.5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

const StInput = styled.input`
  background: #ffffff;
  border: 1.2px solid #dadada;
  border-radius: 6px;
  width: 332px;
  height: 40px;
  padding: 11px 14px 11px 14px;
  &:hover,
  &:focus {
    outline: none;
    border: 1.2px solid #256ef1;
  }
`;

const StButton = styled.button`
  width: 100px;
  height: 40px;
  background: ${(props) => (!props.disabled ? "#256ef1" : "#a5a5a54a")};
  border: ${(props) =>
    !props.disabled ? "1px solid #256ef1" : "1px solid #a5a5a54a"};
  color: #ffffff;
  border-radius: 6px;
  transition: all 0.3s;
  &:hover {
    cursor: ${(props) => (!props.disabled ? "pointer" : "default")};
    transform: ${(props) => (!props.disabled ? "scale(1.05)" : "none")};
  }
`;
