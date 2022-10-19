import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  __deleteComments,
  __editComments,
  __getComments,
} from "../../redux/modules/comment";

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
    <div>
      {isEdit ? (
        <>
          <input
            type="text"
            value={newCommentBody}
            onChange={(e) => setNewCommentBody(e.target.value)}
            padding="5px"
            size="1em"
          />
          <CommentBtnWarp>
            <TodoDetailBtn onClick={cancelHandler}>취소</TodoDetailBtn>
            <TodoDetailBtn onClick={commentUpdateHandler}>저장</TodoDetailBtn>
          </CommentBtnWarp>
        </>
      ) : (
        <>
          <DivInnerBox padding="5px" size="0.75em">
            {comment?.user}
          </DivInnerBox>
          <DivInnerBox padding="5px" size="1em">
            {comment?.body}
          </DivInnerBox>
          <CommentBtnWarp>
            <TodoDetailBtn onClick={editHandler}>수정</TodoDetailBtn>
            <TodoDetailBtn onClick={deleteHandler}>삭제</TodoDetailBtn>
          </CommentBtnWarp>
        </>
      )}
    </div>
  );
};

export default CommentsList;

const DivInnerBox = styled.div`
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

const CommentBtnWarp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
