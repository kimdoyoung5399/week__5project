import "../../App.scss";
import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <HeaderDiv>
      <HeaderText onClick={() => nav("/")}>
        <FaHome size="30" />
      </HeaderText>
      <HeaderText>4조 ToDoList</HeaderText>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  margin-bottom: 5px;
  padding: 20px;
  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.61);
  position: sticky;
  justify-content: space-between;
  display: flex;
`;

const HomeButton = styled.span`
  font-size: 19px;
`;

const HeaderText = styled.div`
  color: black;
  font-size: 1.5em;
`;
