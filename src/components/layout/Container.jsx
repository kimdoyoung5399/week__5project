import "../../App.css";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return <MainContainer />;
};

export default Header;

const MainContainer = styled.div`
  width: 1200px;
  max-width: 1200px;
  min-width: 800px;
  margin: 5px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  box-shadow: 10px, 10px, 1;
  justify-content: space-between;
  position: sticky;
`;
