import styled from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

export default Layout;

const StLayout = styled.header`
  width: 100vw;
  height: 90vh;

  margin: 0px 0px;
  padding: 0px 30px;
`;
