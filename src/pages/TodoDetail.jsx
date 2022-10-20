import React, { useState, useEffect } from "react";
import "../App.scss";
import styled from "styled-components";
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
  const [isEdit, setIsEdit] = useState(false);
  const [newContent, setNewContent] = useState(todo?.content);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const contentUpdateHandler = () => {
    dispatch(
      updateData({
        id: todo?.id,
        author: todo?.author,
        title: todo?.title,
        content: newContent,
      })
    );
    setIsEdit(false);
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      {isEdit === true ? (
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
            <Btn size="sm" onClick={contentUpdateHandler}>
              저장하기
            </Btn>
          </div>
        </div>
      ) : (
        <DetailWrap>
          <BaseContainer>
            <Header />
            <DetailCommentWrap>
              <TodoDetailWrapWidth>
                <DivInnerBox padding="10px" size="1.5em">
                  id: {+id}
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
                <DetailInnerWrap>
                  <p font="1.7em">작성자: {todo?.author}</p>
                  <DetailTitle>{todo?.title}</DetailTitle>
                  <DetailContent
                    padding="20px"
                    size="1.5em"
                    width="90%"
                    height="200px"
                  >
                    {todo?.content}
                  </DetailContent>
                </DetailInnerWrap>
                <FormBtnWrap>
                  <Btn
                    size="sm"
                    width="95%"
                    margin="10px"
                    padding="10px"
                    font="1em"
                    onClick={editHandler}
                  >
                    수정하기
                  </Btn>
                </FormBtnWrap>
              </TodoDetailWrapHeight>
              <Comments id={id} />
            </DetailCommentWrap>
          </BaseContainer>
        </DetailWrap>
      )}
    </div>
  );
};
export default TodoDetail;

const DetailWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const BaseContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 620px;
  margin: 20px auto;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.61);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  position: relative;

  overflow: hidden;
`;

const DetailCommentWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const TodoDetailWrapWidth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 1em;
  width: 95%;
`;
const TodoDetailWrapHeight = styled.div`
  height: 300px;
  margin: 0em 1em;
  padding: 1.5em 2em;
  background: white;
  border-radius: 15px;
  box-shadow: 0rem 0rem 0.3rem 0.3rem #adadad99;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const DetailInnerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const DetailTitle = styled.h1`
  margin: 1em 0em;
`;

const DetailContent = styled.p`
  font-size: 20px;
`;

const DivInnerBox = styled.div`
  padding: ${({ padding }) => padding};
  font-size: ${({ size }) => size};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-weight: bold;
  color: rgb(103, 124, 241);
`;

const DivTextArea = styled.textarea`
  width: 95%;
  height: 70%;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0em 0em 0.5em lightgray;
  border: none;
  color: black;

  &:focus {
    outline: none;
  }
`;

const TodoDetailBtn = styled.button`
  height: 2em;
  background: #b7c2fb;
  border: none;
  font-size: 1em;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  &:hover {
    background: rgb(103, 124, 241);
    color: white;
  }
`;

const FormBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
