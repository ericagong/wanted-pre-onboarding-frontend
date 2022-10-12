import styled from "styled-components";

const Header = (props) => {
  return (
    <StLayout>
      <StInfo>
        <StLabel>Creator</StLabel>
        <StLink
          href='https://github.com/ericagong'
          target='_blank'
          rel='noreferrer'
        >
          ericagong
        </StLink>
      </StInfo>
      <StInfo>
        <StLabel>Project Github</StLabel>
        <StLink
          href='https://github.com/ericagong/wanted-pre-onboarding-frontend'
          target='_blank'
          rel='noreferrer'
        >
          ericagong / wanted-pre-onboarding-frontend
        </StLink>
      </StInfo>
    </StLayout>
  );
};

export default Header;

const StLayout = styled.footer`
  // sticky 요소
  position: absolute;
  bottom: 0%;

  width: 100vw;
  height: 10vh;

  display: flex;
  flex-direction: column;
  gap: 7px;

  padding: 13px 30px;

  background: #ffffff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.04);
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const StFont = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const StLabel = styled(StFont)`
  font-size: 10px;
  line-height: 14px;
  color: #656565;
  margin-top: 3px;
`;

const StLink = styled.a`
  font-size: 10px;
  line-height: 14px;
  color: #656565;
  margin-top: 3px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #256ef1;
    transform: scale(1.05);
  }
`;
