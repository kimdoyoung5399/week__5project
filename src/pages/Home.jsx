import React from "react";
import Header from "../components/layout/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      <Header />
      <div>
        <button onClick={() => nav("/form")}>Form btn</button>
        <button onClick={() => nav("/todolist")}>TodoList btn</button>
      </div>
    </>
  );
};

export default Home;
