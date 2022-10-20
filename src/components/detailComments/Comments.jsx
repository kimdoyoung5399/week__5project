import React, { useEffect, useState } from "react";
import "../../App.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdSwapVert } from "react-icons/md";
import { __addComments } from "../../redux/modules/comment";
import { __getComments } from "../../redux/modules/comment";
import CommentsList from "./CommentsList";
import useInput from "../../hooks/useInput";
import Btn from "../../components/features/Btn";

// --------------------comment--------------------
const Comments = ({ id }) => {
  const commentDispatch = useDispatch();

  const { comments: data } = useSelector((state) => state.comments);
  const comments = data.filter((comment) => comment.todoId === +id);

  const [user, onUserChange, userReset] = useInput("");
  const [body, onBodyChange, bodyReset] = useInput("");

  const [isActive, SetIsActive] = useState(false);

  useEffect(() => {
    commentDispatch(__getComments());
  }, [commentDispatch]);

  const activeHandler = () => {
    SetIsActive(!isActive);
    console.log(isActive);
  };

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
    userReset();
    bodyReset();
  };

  return (
    <div className={isActive === true ? "after" : "before"}>
      <CommentTitle className={isActive === 0} onClick={activeHandler}>
        {isActive === 0 ? <p>댓글 창 열기</p> : <p>댓글 창 닫기</p>}
        <MdSwapVert size="20px" onClick={activeHandler} />
      </CommentTitle>
      <>
        <CommentForm onSubmit={onSubmit}>
          <CommentInputbox>
            <CommentUserInput
              type="text"
              width="150px"
              padding="5px"
              height="30px"
              name="user"
              value={user}
              placeholder="닉네임"
              onChange={onUserChange}
            />
            <CommentBodyInput
              type="text"
              width="1000px"
              padding="5px"
              height="30px"
              name="body"
              value={body}
              placeholder="댓글 내용"
              onChange={onBodyChange}
            />
          </CommentInputbox>
          <CommentBtnWrap>
            <Btn size="sm" width="95%" margin="10px" padding="10px" font="1em">
              작성하기
            </Btn>
          </CommentBtnWrap>
        </CommentForm>

        <CommentListBox>
          <CommentBox width="100%" padding="10px">
            {comments
              .filter((comment) => comment.todoId === +id)
              .map((comment) => (
                <CommentsList key={comment.id} comment={comment} />
              ))}
          </CommentBox>
        </CommentListBox>
      </>
    </div>
  );
};

export default Comments;

const CommentTitle = styled.p`
  background: white;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  column-gap: 5px;
  border-radius: 1em;
`;

const CommentForm = styled.form`
  display: flex;
  margin: 0 px 1.5;
  flex-direction: column;
  justify-content: space-between;
`;

const CommentInputbox = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0em 1.5em 1em;
`;

const CommentBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const CommentUserInput = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: rgba(172, 185, 255, 0.432);

  &:focus {
    outline: none;
    box-shadow: inset 0.2rem 0.3rem 0.4rem #557fb699;
  }
`;

const CommentBodyInput = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: rgba(172, 185, 255, 0.432);

  &:focus {
    outline: none;
    box-shadow: inset 0.2rem 0.3rem 0.4rem #557fb699;
  }
`;

const CommentListBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommentBox = styled.div`
  height: 10em;
  padding: 20px;
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
