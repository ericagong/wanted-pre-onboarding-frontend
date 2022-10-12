import styled from "styled-components";

import Form from "./Form";

const AuthFrame = () => {
  return (
    <StLayout>
      <StForm>
        <Form />
      </StForm>
    </StLayout>
  );
};

export default AuthFrame;

const StLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: rgba(236, 236, 236, 1);
`;

const StForm = styled.div`
  width: 433px;
  height: 630px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 3px 13px 1px rgba(0, 0, 0, 0.05);
  padding: 40px 52px;
`;
