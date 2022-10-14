import React from "react";
import Header from "../components/layout/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      <Header />
      <HomeDiv>
        <HomeH1>무엇을 할까요?</HomeH1>
        <HomeBtn onClick={() => nav("/form")}>할일 기록하기</HomeBtn>
        <HomeBtn onClick={() => nav("/todolist")}>TodoList</HomeBtn>
      </HomeDiv>
    </>
  );
};

export default Home;

const HomeDiv = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const HomeBtn = styled.button`
  width: 95%;
  height: 150px;
  margin: 20px;
  padding: 0 0 0 30px;
  text-align: left;
  font-size: 1.5em;
  background-color: transparent;
  border: 0.02em solid tomato;
  border-radius: 10px;
  color: #ff9574;
`;

const HomeH1 = styled.h1`
  color: tomato;
  padding: 60px;
`;
