import React from "react";
import "../App.scss";
import Header from "../components/layout/Header";
import styled from "styled-components";
import "../App.scss";
import { useNavigate } from "react-router-dom";
import { FcTodoList, FcFile } from "react-icons/fc";

const Home = () => {
  const nav = useNavigate();

  console.log(process.env.REACT_APP_HOST_URL);

  return (
    <BaseWraper>
      <BaseContainer>
        <Header />
        <HomeBtnWrap>
          <HomeBtn onClick={() => nav("/form")}>
            <FcFile />
            &nbsp;WRITING
          </HomeBtn>
          <HomeBtn onClick={() => nav("/todolist")}>
            <FcTodoList />
            &nbsp;TODOLIST
          </HomeBtn>
        </HomeBtnWrap>
      </BaseContainer>
    </BaseWraper>
  );
};

export default Home;

const BaseWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const BaseContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 540px;
  margin: 20px auto;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.61);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.28);
`;

const HomeBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeBtn = styled.button`
  width: 45%;
  height: 350px;
  margin: 40px 20px 10px 20px;
  color: var($text-main);
  text-align: left;
  font-weight: bold;
  font-size: 1.5em;
  background-color: rgba(142, 157, 243, 0.226);
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 5px solid rgb(103, 124, 241);
  }
`;
