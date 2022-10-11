import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const SignIn = ({ onClick }) => {
  return (
    <StLayout>
      <StHeader>
        <Logo style={{ viewport: "0 0 200 100" }} />
        <div onClick={onClick}>회원가입</div>
      </StHeader>
      <div>로그인</div>
      <form>
        <label htmlFor='email' />
        <input type='text' id='email' placeholder='the.erica.gong@gmail.com' />
        <label htmlFor='password' />
        <input type='text' id='password' placeholder='*****' />
        <button type='submit'>제출</button>
      </form>
    </StLayout>
  );
};

export default SignIn;

const StLayout = styled.div`
  padding: 32px 37px;
  border: 1px solid #ececec;
`;

const StHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
`;

const StPart = styled.div`
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

const StHelper = styled.div`
  margin-top: 3px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.5px;
  color: #656565;
`;

const StError = styled(StHelper)`
  color: #ff5c01;
`;
