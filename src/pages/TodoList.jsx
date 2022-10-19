import React, { useEffect } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, deleteData } from "../redux/modules/todos";

const TodoList = () => {
  const nav = useNavigate();
  const todos = useSelector((state) => state.todos.todos);
  console.log("todossss:", todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const deleteTodo = (todoId) => {
    console.log("todoId:", todoId);
    dispatch(deleteData(todoId));
  };

  return (
    <ListWrap>
      <BaseContainer>
        <Header />
        <HomeH1>My List</HomeH1>
        <TodoListContainer>
          {todos?.map((todo) => (
            <TodoListDiv
              key={todo.id}
              todos={todos}
              onClick={() => nav(`/todolist/${todo.id}`)}
            >
              <TodoListWarp>
                <TodoListBox todos={todos}>
                  <ListInnerWrap>
                    <DivInnerWarp>
                      <DivInnerBox size="1.3em" weight="bold">
                        {todo.title}
                      </DivInnerBox>
                      <DivInnerBox size="1em">
                        작성자 : {todo.author}
                      </DivInnerBox>
                    </DivInnerWarp>
                    <StButton
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTodo(todo.id);
                      }}
                    >
                      <FaTrashAlt size="20px" />
                    </StButton>
                  </ListInnerWrap>
                </TodoListBox>
              </TodoListWarp>
            </TodoListDiv>
          ))}
        </TodoListContainer>
      </BaseContainer>
    </ListWrap>
  );
};

export default TodoList;

const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

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

const TodoListContainer = styled.div`
  max-height: 600px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: #adadad;
  }
  &::-webkit-scrollbar-thumb {
    background: #ecc5c5;
    border-radius: 6px;
  }
`;

const TodoListDiv = styled.div`
  max-height: 300px;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

const HomeH1 = styled.h1`
  color: rgb(103, 124, 241);
  padding: 10px;
`;

const TodoListWarp = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 10px;
`;

const TodoListBox = styled.div`
  border: none;
  background-color: rgba(172, 185, 255, 0.589);
  border-radius: 10px;
  width: 100%;
`;

const ListInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivInnerWarp = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  padding: 20px;
`;

const DivInnerBox = styled.div`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: rgb(103, 124, 241);
  margin: 10px;
`;

const StButton = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  padding: 8px;
  font-size: 0.8rem;
  color: #ffffff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 255);
  background-color: #e73737;
  box-shadow: 0 4px 9px 0 rgba(31, 38, 135, 0.37);
  cursor: pointer;
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
