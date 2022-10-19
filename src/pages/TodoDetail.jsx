import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData, updateData } from "../redux/modules/todos";
import Comments from "../components/detailComments/comments";

const TodoDetail = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { todos } = useSelector((state) => state.todos);
  const todo = todos.find((todo) => todo.id === +id);

  /* --------------------todos-------------------- */
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const [isEdit, setIsEdit] = useState(false);
  const [newContent, setNewContent] = useState("");

  const editHandler = () => {
    setIsEdit(true);
  };

  const contentUpdateHandler = () => {
    dispatch(
      updateData({
        id: todo.id,
        author: todo.author,
        title: todo.title,
        content: newContent,
      })
    );
    setIsEdit(false);
  };

  return (
    <>
      <Header />
      <TodoDetailWrapWidth>
        <DivInnerBox padding="10px" size="1.5em">
          id : {+id}
        </DivInnerBox>
        <TodoDetailBtn
          onClick={() => nav("/todolist")}
          margin="5px"
          padding="10px"
          font="1.5em"
        >
          이전으로
        </TodoDetailBtn>
      </TodoDetailWrapWidth>

      <TodoDetailWrapHeight>
        <HomeH1 font="1.7em">{todo?.author}</HomeH1>
        <div padding="20px" size="1.5em" width="90%" height="200px">
          {todo?.title}
        </div>
        {isEdit ? (
          <>
            <DivTextArea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              padding="20px"
              size="1.5em"
              width="90%"
              height="200px"
            />
            <TodoDetailBtn
              onClick={contentUpdateHandler}
              width="95%"
              margin="10px"
              padding="10px"
              font="1em"
            >
              저장하기
            </TodoDetailBtn>
          </>
        ) : (
          <>
            <div padding="20px" size="1.5em" width="90%" height="200px">
              {todo?.content}
            </div>
            <TodoDetailBtn
              onClick={editHandler}
              width="95%"
              margin="10px"
              padding="10px"
              font="1em"
            >
              수정하기
            </TodoDetailBtn>
          </>
        )}
      </TodoDetailWrapHeight>

      {/*  모달 ? 보이기? */}
      <Comments id={id} />
    </>
  );
};

export default TodoDetail;

const TodoDetailWrapWidth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 1em;
  margin: 1em;
  min-width: 95%;
`;
const TodoDetailWrapHeight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 1.2em 1em;
  align-items: center;
  border: 0.02em solid tomato;
  border-radius: 10px;
`;

const HomeH1 = styled.h1`
  color: tomato;
  padding: 10px;
  justify-content: center;
  width: 95%;
  font-size: ${({ font }) => font};
`;

const DivInnerBox = styled.div`
  padding: ${({ padding }) => padding};
  font-size: ${({ size }) => size};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: tomato;
`;

const DivTextArea = styled.textarea`
  padding: ${({ padding }) => padding};
  font-size: ${({ size }) => size};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: tomato;
`;

const TodoDetailBtn = styled.button`
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
