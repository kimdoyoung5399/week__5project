import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Form from "../pages/Form";
import TodoDetail from "../pages/TodoDetail";
import TodoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todolist/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
