import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, deleteData } from "../redux/modules/todos";
import Btn from "../components/features/Btn";

const TodoList = () => {
  const nav = useNavigate();
  const { todos, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const dropItem = (id) => {
    dispatch(deleteData(id));
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  console.log(todos);

  return (
    <div>
      <Header />
<<<<<<< HEAD
      <TodoListDiv>
        <HomeH1>My List</HomeH1>
        <TodoListWarp>
          {[1, 2, 3].map((item) => (
            <TodoListBox onClick={() => nav("/todolist/:id")}>
              <DivInnerWarp>
                <DivInnerBox size="1.3em">내용</DivInnerBox>
                <TodoListBtn size="1em" padding="10px" margin="10px">
                  휴지통
                </TodoListBtn>
              </DivInnerWarp>
              <DivInnerBox size="1em">작성자 : 000</DivInnerBox>
            </TodoListBox>
          ))}
        </TodoListWarp>
      </TodoListDiv>
    </>
=======
      <HomeH1>My List</HomeH1>
      {todos?.map((todo) => (
        <TodoListDiv key={todo.id}>
          <TodoListWarp>
            <TodoListBox
              onClick={() => nav(`/todolist/${todo.id}`)}
              todos={todos}>
              <DivInnerWarp>
                <DivInnerBox size="1.3em">{todo.content}</DivInnerBox>
                <TodoListBtn size="1em" padding="10px" margin="10px">
                  {todo.title}
                </TodoListBtn>
              </DivInnerWarp>
              <DivInnerBox size="1em">작성자 : {todo.author}</DivInnerBox>
              <StButton onClick={() => dropItem(todo.id)}>삭제</StButton>
              <StButton2>수정</StButton2>
            </TodoListBox>
          </TodoListWarp>
        </TodoListDiv>
      ))}
    </div>
>>>>>>> 364c4b1bcf7af2bc6c3f170ea030f9ebebc6570c
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

const StButton = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 60px;
  padding: 8px;
  font-size: 0.8rem;
  color: #ffffff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 255);
  background-color: #e73737;
  box-shadow: 0 4px 9px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: none;
  border-radius: 7px;
  //justify-content: left;
  display: inline;

  :active {
    box-shadow: inset 2px 2px 2px 2px #2424243e;
  }
`;

const StButton2 = styled(StButton)`
  margin-right: 5px !important;
  background-color: #0bc041;
`;
