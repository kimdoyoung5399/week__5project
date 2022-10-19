import React, { useState, useEffect } from "react";
import "../App.scss";
import styled from "styled-components";
import { FaReply } from "react-icons/fa";
import { FaSlackHash } from "react-icons/fa";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData, updateData } from "../redux/modules/todos";
import Comments from "../components/detailComments/Comments";
import Btn from "../components/features/Btn";

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
  const [isComment, setIsComment] = useState(false);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const commentHandler = () => {
    setIsComment(!isComment);
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
    <div>
      {isEdit == 1 ? (
        /* 수정버튼 -> 모달창 (isEdit == true) */
        <div className="ContentsModalBg" onClick={editHandler}>
          <div className="ContentsModal">
            <DivTextArea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              padding="20px"
              size="1.5em"
              width="90%"
              height="200px"
            />
            <Btn className="ex" onClick={contentUpdateHandler}>
              Save
            </Btn>
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <BaseContainer>
            <TodoDetailWrapWidth>
              <DivInnerBox padding="10px" size="1.5em">
                id: {+id}
              </DivInnerBox>
              <TodoDetailBtn
                onClick={() => nav("/todolist")}
                margin="5px"
                padding="10px"
                font="1.5em">
                이전으로
              </TodoDetailBtn>
            </TodoDetailWrapWidth>

            <TodoDetailWrapHeight>
              <HomeH1 font="1.7em">{todo?.author}</HomeH1>
              <div padding="20px" size="1.5em" width="90%" height="200px">
                {todo?.title}
              </div>
              <div padding="20px" size="1.5em" width="90%" height="200px">
                {todo?.content}
              </div>
              <TodoDetailBtn
                onClick={editHandler}
                width="95%"
                margin="10px"
                padding="10px"
                font="1em">
                수정하기
              </TodoDetailBtn>
            </TodoDetailWrapHeight>
            <Comments id={id} />
          </BaseContainer>
        </div>
      )}
    </div>
  );
};
export default TodoDetail;

const BaseContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 65vh;
  margin: 20px auto;
  //padding: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.61);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  position: relative;

  overflow: hidden;
`;

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
  height: 400px;
  padding: 1.2em 1em;
  background: rgb(103, 124, 241);
  border-radius: 15px;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #49494999;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const HomeH1 = styled.h1`
  color: ${({ color }) => color}; //rgb(103, 124, 241);
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
  font-weight: bold;
  color: rgb(103, 124, 241);
`;

const DivContent = styled.div`
  padding: 10px;
  font-size: 3rem;
  width: ${({ width }) => width};
  height: 200px;
  color: white;
`;

const DivTextArea = styled.textarea`
  width: 595px;
  height: 250px;
  font-size: 1.9rem;
  border-radius: 15px 15px 0 0;
  border: none;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.8);
  color: black;

  &:focus {
    outline: none;
  }
`;

const TodoDetailBtn = styled.button`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: center;
  font-size: ${({ font }) => font};
  background-color: transparent;
  border-radius: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const CommentContainer = styled.div`
  width: inherit;
  height: 500px;
  background-color: white;
  border-radius: 0 15px 15px 0;
  flex-direction: column;
  display: inline;
`;

const CommentForm = styled.form`
  display: flex;
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CommentInputbox = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
`;

const CommentInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  border: 0.02em solid tomato;
  border-radius: 10px;
`;

const CommentBoxWarp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const CommentBox = styled.div`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ size }) => size};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: tomato;
  border: 0.2px solid tomato;
  border-radius: 10px;
`;

const CommentBtnWarp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
