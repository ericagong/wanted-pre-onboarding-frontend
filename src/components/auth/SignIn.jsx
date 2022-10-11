import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as Email } from "../../assets/email.svg";
import { ReactComponent as Password } from "../../assets/password.svg";

const SignIn = ({ onClick }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    emailErr: true,
    passwordErr: true,
  });

  // form input field 값이 변화할 때마다 이를 반영하는 함수
  const changeHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    const fieldErr = `${e.target.id}Err`;
    const hasErr = checkErr(field, value);
    setForm((prev) => ({
      ...prev,
      [field]: value,
      [fieldErr]: hasErr,
    }));
  };

  // 실시간 email, password field 유효성 검사
  const checkErr = (field, value) => {
    if (field === "email") {
      return !value.includes("@");
    }
    if (field === "password") {
      return value.length < 8;
    }
    return false;
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div onClick={onClick}>회원가입</div>
      <div>로그인</div>
      <form onSubmit={submitHandler}>
        <StField hasError={form.emailErr}>
          <StLabel htmlFor='email'>이메일</StLabel>
          <StHelper>@을 포함한 형태의 이메일을 기입해주세요.</StHelper>
          <StWrapper>
            <StIcon>
              <Email />
            </StIcon>
            <StInput
              type='text'
              id='email'
              placeholder='username@address.com'
              onChange={changeHandler}
              value={form.email}
            />
          </StWrapper>
          {form.emailErr ? (
            <StError>이메일은 @를 반드시 포함해야합니다.</StError>
          ) : null}
        </StField>
        <StField>
          <StLabel htmlFor='password'>비밀번호</StLabel>
          <StHelper>8자 이상의 비밀번호를 기입해주세요.</StHelper>
          <StWrapper hasError={form.emailErr}>
            <StIcon>
              <Password />
            </StIcon>
            <StInput
              type='password'
              id='password'
              placeholder='*****'
              onChange={changeHandler}
              value={form.password}
            />
          </StWrapper>
          {form.passwordErr ? (
            <StError>비밀번호는 반드시 8자 이상이어야합니다.</StError>
          ) : null}
        </StField>
        <StButton type='submit' disabled={form.emailErr || form.passwordErr}>
          제출하기
        </StButton>
      </form>
    </>
  );
};

export default SignIn;

const StField = styled.div`
  margin-bottom: ${(props) => (!props.hasError ? "26px" : "11px")};
`;

const StLabel = styled.label`
  position: relative;
  display: block;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

const StHelper = styled.div`
  margin-top: 3px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #656565;
`;

const StWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

const StIcon = styled.div`
  position: absolute;
  left: 25px;
  bottom: 10px;
`;

const StInput = styled.input`
  background: #fafafa;
  border: 1.2px solid #dadada;
  border-radius: 6px;
  width: 332px;
  height: 50px;
  margin-top: 6px;
  padding: 11px 14px 11px 60px;
  &:hover,
  &:focus {
    outline: none;
    border: 1.2px solid #ffb356;
  }
`;

const StError = styled(StHelper)`
  color: #ff5c01;
`;

const StButton = styled.button`
  width: 329px;
  height: 50px;
  background: ${(props) => (!props.disabled ? "#fc9700" : "#FFEAD8")};
  border: ${(props) =>
    !props.disabled ? "1px solid #f07401" : "1px solid #FFEAD8"};
  border-radius: 6px;
`;
