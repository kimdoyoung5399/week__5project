import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderText>Home</HeaderText>
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
`;

const HeaderText = styled.div`
  color: tomato;
  font-size: 1.5em;
`;
