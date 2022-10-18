import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaReply } from "react-icons/fa";
import { FaSlackHash } from "react-icons/fa";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData, patchData } from "../redux/modules/todos";
import {
  __addComments,
  __deleteComments,
  __getComments,
} from "../redux/modules/comment";

const TodoDetailList = ({ comment }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(__deleteComments(comment));
  };

  const onEdit = () => {};

  return (
    <div>
      <DivInnerBox padding="5px" size="0.75em">
        {comment.user}
      </DivInnerBox>
      <DivInnerBox padding="5px" size="1em">
        {comment.body}
      </DivInnerBox>
      <CommentBtnWarp>
        <TodoDetailBtn>수정</TodoDetailBtn>
        <TodoDetailBtn onClick={onDelete}>삭제</TodoDetailBtn>
      </CommentBtnWarp>
    </div>
  );
};

const TodoDetail = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const { comments } = useSelector((state) => state.comments);
  const { id } = useParams();

  /* todos 데이터 관련 */

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  console.log(todos);

  const todo = todos.find((todo) => todo.id === +id);

  /* comment 데이터 관련 */
  const [inputs, setInputs] = useState({
    user: "",
    body: "",
  });
  const { user, body } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputs.user.trim() === "" || inputs.body.trim() === "") {
      window.alert("작성자와 댓글내용을 입력해주세요.");
    }

    dispatch(
      __addComments({
        ...inputs,
        id,
      })
    );
    setInputs({
      user: "",
      body: "",
    });
  };
  console.log("inputs:", inputs);

  return (
    <>
      <Header />
      <BaseContainer>
        <TodoDetailWrapWidth>
          <DivInnerBox padding="1px" size="2em">
            <FaSlackHash top="3px" /> {id}
          </DivInnerBox>
          <TodoDetailBtn
            onClick={() => nav("/todolist")}
            margin="5px"
            padding="10px"
            font="1.5em">
            <FaReply />
          </TodoDetailBtn>
        </TodoDetailWrapWidth>

        <TodoDetailWrapHeight>
          <HomeH1 font="1.7em" color="white">
            {todo?.author}
          </HomeH1>
          <HomeH1 size="1.5em" color="white">
            {todo?.title}
          </HomeH1>
          <HomeH1 size="1.3em" color="white">
            {todo?.content}
          </HomeH1>
          <TodoDetailBtn width="95%" margin="10px" padding="10px" font="1em">
            수정하기
          </TodoDetailBtn>
        </TodoDetailWrapHeight>

        {/* 모달 ? 보이기? */}
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
                onChange={onChange}
              />
              <CommentInput
                type="text"
                width="1000px"
                padding="5px"
                height="30px"
                name="body"
                value={body}
                onChange={onChange}
              />
            </CommentInputbox>

            <TodoDetailBtn
              width="100%"
              height="42px"
              padding="auto"
              margin="auto">
              추가하기
            </TodoDetailBtn>
          </CommentForm>

          <CommentList>
            <CommentBoxWarp>
              <CommentBox width="100%" padding="10px">
                {comments?.map((comment) => (
                  <TodoDetailList key={comment.postId} comment={comment} />
                ))}
              </CommentBox>
            </CommentBoxWarp>
          </CommentList>
        </CommentContainer>
      </BaseContainer>
    </>
  );
};
export default TodoDetail;

const BaseContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  max-height: 100vh;
  margin: 20px auto;
  //padding: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.61);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.28);
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
  display: flex;
  padding: 1.2em 1em;
  background: rgb(103, 124, 241);
  box-shadow: 0.1rem 0.1rem 0.1rem #49494999;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
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

const DivInput = styled.input`
  padding: ${({ padding }) => padding};
  font-size: ${({ size }) => size};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: rgb(103, 124, 241);
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
  border-radius: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 10px;
  display: none;
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
