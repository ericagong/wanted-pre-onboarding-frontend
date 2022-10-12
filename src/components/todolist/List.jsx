import styled from "styled-components";

import Todo from "./Todo";

const List = ({ list, updateTodo, deleteTodo }) => {
  const todos = list.map((todo) => (
    <Todo
      key={todo.id}
      {...todo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  ));
  return <StLayout>{todos}</StLayout>;
};

export default List;

const StLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 12fr);
  grid-column-gap: 15px; // gutter @Figma
  grid-row-gap: 28px; // gutter @Figma

  /* mobile */
  @media all and (max-width: 700px) {
    grid-template-columns: repeat(4, 4fr);
    grid-column-gap: 16px; // gutter @Figma
    grid-row-gap: 16px; // gutter @Figma
  }
`;
