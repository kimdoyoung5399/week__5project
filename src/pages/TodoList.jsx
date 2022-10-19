import React, { useEffect } from "react";
import "../App.scss";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, deleteData } from "../redux/modules/todos";
import Btn from "../components/features/Btn";

const TodoList = () => {
  const nav = useNavigate();
  const { todos, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const deleteTodo = (todo) => {
    console.log("todo:", todo.id);
    const todoId = todo.id;
    dispatch(deleteData(todoId));
  };

  console.log(todos);

  return (
    <div>
      <Header />
      <BaseContainer>
        <HomeH1>My List</HomeH1>
        {todos?.map((todo) => (
          <TodoListDiv key={todo.id} todos={todos}>
            <TodoListWarp>
              <TodoListBox
                onClick={() => nav(`/todolist/${todo.id}`)}
                todos={todos}>
                <DivInnerWarp>
                  <DivInnerBox size="1.3em" weight="bold">
                    {todo.content}
                  </DivInnerBox>
                  <TodoListBtn size="1em" padding="10px" margin="10px">
                    {todo.title}
                  </TodoListBtn>
                  <StButton onClick={() => deleteTodo(todo.id)}>
                    <FaTrashAlt size="20px" />
                  </StButton>
                </DivInnerWarp>
                <DivInnerBox size="1em">작성자 : {todo.author}</DivInnerBox>
              </TodoListBox>
            </TodoListWarp>
          </TodoListDiv>
        ))}
      </BaseContainer>
    </div>
  );
};

export default TodoList;

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

const TodoListDiv = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const HomeH1 = styled.h1`
  color: rgb(103, 124, 241);
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
  color: rgb(103, 124, 241);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const TodoListWarp = styled.div`
  max-width: 95%;
  padding: 10px;
  margin: 10px;
`;

const TodoListBox = styled.div`
  border: none;
  background-color: rgba(172, 185, 255, 0.589);
  margin: 10px;
  border-radius: 10px;
`;

const DivInnerWarp = styled.div`
  display: flex;
  flex-direction: row;
`;

const DivInnerBox = styled.div`
  padding: 20px;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: rgb(103, 124, 241);
`;

const StButton = styled.button`
  width: 50px;
  height: 40px;
  margin-right: 490px;
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
  justify-content: right;
  display: inline;
  :active {
    box-shadow: inset 2px 2px 2px 2px #2424243e;
  }
`;

// const StButton2 = styled(StButton)`
//   margin-right: 5px !important;
//   background-color: #0bc041;
// `;
