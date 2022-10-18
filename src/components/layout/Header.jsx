import "../../App.css";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <HeaderDiv>
      <HeaderText onClick={() => nav("/")}>Home</HeaderText>
      <HeaderText>4조 ToDoList</HeaderText>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: space-between;
  margin: 5px;
  border: 1px solid tomato;
  border-radius: 5px;
  position: sticky;
`;

const HeaderText = styled.div`
  color: tomato;
  font-size: 1.5em;
`;
