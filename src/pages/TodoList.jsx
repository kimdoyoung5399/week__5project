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
              <DivInnerBox size="1.3em">휴지통</DivInnerBox>
            </DivInnerWarp>
            <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
          </TodoListBox>

          <TodoListBox onClick={() => nav("/todolist/:id")}>
            <DivInnerWarp>
              <DivInnerBox size="1.3em">내용</DivInnerBox>
              <DivInnerBox size="1.3em">휴지통</DivInnerBox>
            </DivInnerWarp>
            <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
          </TodoListBox>

          <TodoListBox onClick={() => nav("/todolist/:id")}>
            <DivInnerWarp>
              <DivInnerBox size="1.3em">내용</DivInnerBox>
              <DivInnerBox size="1.3em">휴지통</DivInnerBox>
            </DivInnerWarp>
            <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
          </TodoListBox>

          <TodoListBox onClick={() => nav("/todolist/:id")}>
            <DivInnerWarp>
              <DivInnerBox size="1.3em">내용</DivInnerBox>
              <DivInnerBox size="1.3em">휴지통</DivInnerBox>
            </DivInnerWarp>
            <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
          </TodoListBox>

          <TodoListBox onClick={() => nav("/todolist/:id")}>
            <DivInnerWarp>
              <DivInnerBox size="1.3em">내용</DivInnerBox>
              <DivInnerBox size="1.3em">휴지통</DivInnerBox>
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
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const DivInnerBox = styled.div`
  padding: 20px;
  font-size: ${({ size }) => size};
  color: tomato;
`;
