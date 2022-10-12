import styled from "styled-components";

import List from "./List";

const Lists = ({ todos }) => {
  const workingList = todos.filter((todo) => !todo.isDone);
  const doneList = todos.filter((todo) => todo.isDone);
  return (
    <StLayout>
      <StContainer>
        <StCategory>Working.. 🔥</StCategory>
        <List list={workingList}></List>
      </StContainer>
      <StContainer>
        <StCategory>Done..! 🎉</StCategory>
        <List list={doneList}></List>
      </StContainer>
    </StLayout>
  );
};

export default Lists;

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100px;
  margin: 20px;
  max-width: 1200px;
  min-width: 800px;
`;

const StContainer = styled.div``;

const StCategory = styled.div`
  margin-top: 10px;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: bold;
`;
