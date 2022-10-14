import React from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const nav = useNavigate();

  return (
    <>
      <Header />
      <TodoListDiv>
        <HomeH1>My List</HomeH1>
        <TodoListWarp>
          <TodoListBox onClick={() => nav("/todolist/:id")}>
            <DivInnerWarp>
              <DivInnerBox size="1.3em">내용</DivInnerBox>
              <TodoListBtn size="1em" padding="10px" margin="10px">
                휴지통
              </TodoListBtn>
            </DivInnerWarp>
            <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
          </TodoListBox>
          <TodoListBox onClick={() => nav("/todolist/:id")}>
            <DivInnerWarp>
              <DivInnerBox size="1.3em">내용</DivInnerBox>
              <TodoListBtn size="1em" padding="10px" margin="10px">
                휴지통
              </TodoListBtn>
            </DivInnerWarp>
            <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
          </TodoListBox>
          <TodoListBox onClick={() => nav("/todolist/:id")}>
            <DivInnerWarp>
              <DivInnerBox size="1.3em">내용</DivInnerBox>
              <TodoListBtn size="1em" padding="10px" margin="10px">
                휴지통
              </TodoListBtn>
            </DivInnerWarp>
            <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
          </TodoListBox>
          <TodoListBox onClick={() => nav("/todolist/:id")}>
            <DivInnerWarp>
              <DivInnerBox size="1.3em">내용</DivInnerBox>
              <TodoListBtn size="1em" padding="10px" margin="10px">
                휴지통
              </TodoListBtn>
            </DivInnerWarp>
            <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
          </TodoListBox>
          <TodoListBox onClick={() => nav("/todolist/:id")}>
            <DivInnerWarp>
              <DivInnerBox size="1.3em">내용</DivInnerBox>
              <TodoListBtn size="1em" padding="10px" margin="10px">
                휴지통
              </TodoListBtn>
            </DivInnerWarp>
            <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
          </TodoListBox>
        </TodoListWarp>
      </TodoListDiv>
    </>
  );
};

export default TodoList;

const TodoListDiv = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const HomeH1 = styled.h1`
  color: tomato;
  padding: 10px;
`;

const TodoListBtn = styled.button`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: center;
  font-size: ${({ font }) => font};
  background-color: transparent;
  border: 0.02em solid tomato;
  border-radius: 10px;
  color: #ff9574;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const TodoListWarp = styled.div`
  max-width: 95%;
  padding: 10px;
  margin: 10px;
`;

const TodoListBox = styled.div`
  border: 0.2px solid tomato;
  margin: 10px;
  border-radius: 10px;
`;

const DivInnerWarp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DivInnerBox = styled.div`
  padding: 20px;
  font-size: ${({ size }) => size};
  color: tomato;
`;
