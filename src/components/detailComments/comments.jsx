import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addComments } from "../../redux/modules/comment";
import { __getComments } from "../../redux/modules/comment";
import CommentsList from "./CommentsList";
import useInput from "../../hooks/useInput";

// --------------------comment--------------------
const Comments = ({ id }) => {
  const commentDispatch = useDispatch();

  const { comments: data } = useSelector((state) => state.comments);
  const comments = data.filter((comment) => comment.todoId === +id);

  const [user, onUserChange] = useInput("");
  const [body, onBodyChange] = useInput("");

  useEffect(() => {
    commentDispatch(__getComments());
  }, [commentDispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.trim() === "" || body.trim() === "") {
      window.alert("작성자와 댓글내용을 입력해주세요.");
    }

    commentDispatch(
      __addComments({
        user,
        body,
        todoId: +id,
        id: Date.now(),
      })
    );
  };

  return (
    <CommentContainer>
      <HomeH1 font="1.7em">댓글창</HomeH1>
      <CommentForm onSubmit={onSubmit}>
        <CommentInputbox>
          <CommentInput
            type="text"
            width="150px"
            padding="5px"
            height="30px"
            name="user"
            value={user}
            onChange={onUserChange}
          />
          <CommentInput
            type="text"
            width="1000px"
            padding="5px"
            height="30px"
            name="body"
            value={body}
            onChange={onBodyChange}
          />
        </CommentInputbox>

        <TodoDetailBtn width="100%" height="42px" padding="auto" margin="auto">
          추가하기
        </TodoDetailBtn>
      </CommentForm>

      <CommentListBox>
        <CommentBoxWarp>
          <CommentBox width="100%" padding="10px">
            {comments
              .filter((comment) => comment.todoId === +id)
              .map((comment) => (
                <CommentsList key={comment.id} comment={comment} />
              ))}
          </CommentBox>
        </CommentBoxWarp>
      </CommentListBox>
    </CommentContainer>
  );
};

export default Comments;

const HomeH1 = styled.h1`
  color: tomato;
  padding: 10px;
  justify-content: center;
  width: 95%;
  font-size: ${({ font }) => font};
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

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 10px;
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

const CommentListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
