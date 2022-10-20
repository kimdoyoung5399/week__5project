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
      <HomeH1>TODOLIST</HomeH1>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  margin-bottom: 5px;
  padding: 10px 20px;
  box-shadow: 0px 5px 5px lightgray;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-radius: 10px;
  position: sticky;
`;

const HomeH1 = styled.h1`
  color: rgb(103, 124, 241);
`;

const HeaderText = styled.div`
  color: rgb(103, 124, 241);
  padding: 0;
  cursor: pointer;
`;
