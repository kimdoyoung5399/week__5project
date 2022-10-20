import React, { useState } from "react";
import styled from "styled-components";
import "../../App.scss";
import { useDispatch } from "react-redux";
import { __deleteComments, __editComments } from "../../redux/modules/comment";

const CommentsList = ({ comment }) => {
  const dispatch = useDispatch();
  const todoId = comment.todoId;
  const [isEdit, setIsEdit] = useState(false);
  const [newCommentBody, setNewCommentBody] = useState(comment.body);

  const cancelHandler = () => {
    setIsEdit(false);
  };

  const commentUpdateHandler = () => {
    dispatch(
      __editComments({
        user: comment.user,
        body: newCommentBody,
        id: comment.id,
        todoId,
      })
    );
    setIsEdit(false);
  };

  const editHandler = () => {
    setIsEdit(true);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(__deleteComments(comment));
  };

  return (
    <>
      {isEdit ? (
        <DivInnerBoxContainer>
          <NewCommentInput
            type="text"
            value={newCommentBody}
            onChange={(e) => setNewCommentBody(e.target.value)}
          />
          <CommentBtnWarp>
            <TodoDetailBtn onClick={cancelHandler}>취소</TodoDetailBtn>
            <TodoDetailBtn onClick={commentUpdateHandler}>저장</TodoDetailBtn>
          </CommentBtnWarp>
        </DivInnerBoxContainer>
      ) : (
        <DivInnerBoxContainer>
          <DivInnerBoxWrap>
            <DivInnerAuthor>{comment?.user}</DivInnerAuthor>
            <div>{comment?.body}</div>
          </DivInnerBoxWrap>
          <CommentBtnWarp>
            <TodoDetailBtn onClick={editHandler}>수정</TodoDetailBtn>
            <TodoDetailBtn onClick={deleteHandler}>삭제</TodoDetailBtn>
          </CommentBtnWarp>
        </DivInnerBoxContainer>
      )}
    </>
  );
};

export default CommentsList;

const DivInnerAuthor = styled.div`
  font-size: 0.8em;
  margin-bottom: 0.5em;
`;

const TodoDetailBtn = styled.button`
  border: none;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  &:hover {
    background: rgb(103, 124, 241);
    color: white;
  }
`;

const CommentBtnWarp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const DivInnerBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  padding: 0.8em;
  border-radius: 5px;
  box-shadow: 0em 0em 0.5em lightgray;
  height: 2.5em;
`;

const NewCommentInput = styled.input`
  height: 2.5em;
  width: 85%;
  padding-left: 0.5em;
  border-radius: 5px;
  border: 0.15em solid lightgray;
`;

const DivInnerBoxWrap = styled.div`
  display: flex;
  flex-flow: column;
`;
