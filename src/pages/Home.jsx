import React from "react";
import "../App.scss";
import Header from "../components/layout/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  console.log(process.env.REACT_APP_HOST_URL);

  return (
    <>
      <Header />
      <BaseContainer>
        <HomeH1>무엇을 할까요?</HomeH1>
        <HomeBtn onClick={() => nav("/form")}>Todo 기록하기</HomeBtn>
        <HomeBtn onClick={() => nav("/todolist")}>TodoList</HomeBtn>
      </BaseContainer>
    </>
  );
};

export default Home;

const BaseContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  max-height: 100vh;
  margin: 20px auto;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.61);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.28);
`;

const HomeBtn = styled.button`
  width: 95%;
  height: 150px;
  margin: 20px;
  padding: 0 0 0 30px;
  color: rgb(103, 124, 241);
  text-align: left;
  font-weight: bold;
  font-size: 1.5em;
  background-color: rgba(142, 157, 243, 0.226);
  border: none;
  border-radius: 10px;
`;

const HomeH1 = styled.h1`
  margin-top: 30px;
  padding: 0 30px;
  color: rgb(103, 124, 241);
`;
