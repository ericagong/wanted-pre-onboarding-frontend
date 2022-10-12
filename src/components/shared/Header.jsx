import styled from "styled-components";

const Header = (props) => {
  return (
    <StLayout>
      <StLogo>Simple Todos</StLogo>
      <StInfo>with React</StInfo>
    </StLayout>
  );
};

export default Header;

const StLayout = styled.header`
  width: 100vw;
  height: 8vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0px 30px;

  background: #ffffff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.04);
`;

const StFont = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const StLogo = styled(StFont)`
  font-family: "Lobster";
  font-size: 20px;
  color: #256ef1;

  padding: 30px 0px;
`;

const StInfo = styled(StFont)`
  font-size: 10px;
  line-height: 14px;
  color: #656565;

  margin-top: 3px;
`;
