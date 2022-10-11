import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "../pages/Auth";
import TodoList from "../pages/TodoList";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/todo' element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
