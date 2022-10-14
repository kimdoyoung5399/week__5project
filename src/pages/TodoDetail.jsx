import React, { useState } from "react";
import Header from "../components/layout/Header";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoDetail = () => {
  const nav = useNavigate();

  const [inputs, setInputs] = useState({
    id: 0,
    commentTitle: "",
    commentBody: "",
  });

  const { commentTitle, commentBody } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      <Header />

      <TodoDetailWrapWidth>
        <DivInnerBox padding="10px" size="1.5em">
          id :
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
        <HomeH1 font="1.7em">제목</HomeH1>

        <DivInnerBox padding="20px" size="1.5em" width="90%" height="200px">
          내용
        </DivInnerBox>

        <TodoDetailBtn width="95%" margin="10px" padding="10px" font="1em">
          수정하기
        </TodoDetailBtn>
      </TodoDetailWrapHeight>

      {/*  모달 ? 보이기? */}
      <CommentContainer>
        <HomeH1 font="1.7em">댓글창</HomeH1>
        <CommentForm>
          <CommentInputbox>
            <CommentInput
              type="text"
              width="150px"
              padding="5px"
              height="30px"
              name="commentTitle"
              value={commentTitle}
              onChange={onChange}
            />
            <CommentInput
              type="text"
              width="1000px"
              padding="5px"
              height="30px"
              name="commentBody"
              value={commentBody}
              onChange={onChange}
            />
          </CommentInputbox>

          <TodoDetailBtn
            width="100%"
            height="42px"
            padding="auto"
            margin="auto"
          >
            추가하기
          </TodoDetailBtn>
        </CommentForm>

        <CommentList>
          <CommentBoxWarp>
            <CommentBox width="100%" padding="10px">
              <DivInnerBox padding="5px" size="0.75em">
                닉네임
              </DivInnerBox>
              <DivInnerBox padding="5px" size="1em">
                코멘트
              </DivInnerBox>
            </CommentBox>
            <CommentBtnWarp>
              <TodoDetailBtn>수정하기 버튼</TodoDetailBtn>
              <TodoDetailBtn>삭제하기 버튼</TodoDetailBtn>
            </CommentBtnWarp>
          </CommentBoxWarp>
        </CommentList>
      </CommentContainer>
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
