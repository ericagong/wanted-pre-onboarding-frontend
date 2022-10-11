import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "../pages/Auth";
import TodoList from "../pages/TodoList";
import NotFound from "../pages/NotFound";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/todo' element={<TodoList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
