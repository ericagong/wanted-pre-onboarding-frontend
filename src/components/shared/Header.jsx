import styled from "styled-components";

const Header = (props) => {
  return (
    <StLayout>
      <div>My Todo List</div>
      <div>React</div>
    </StLayout>
  );
};

export default Header;

const StLayout = styled.header`
  width: 100vw;
  height: 5vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0px;
  padding: 0px 30px;
`;
