import React from "react";
import Header from "../components/layout/Header";
import styled from "styled-components";

const TodoDetail = () => {
  return (
    <>
      <Header />

      <TodoDetailWrapWidth>
        <DivInnerBox padding="10px" size="1.5em">
          id :
        </DivInnerBox>
        <TodoDetailBtn margin="5px" padding="10px" font="1.5em">
          이전으로
        </TodoDetailBtn>
      </TodoDetailWrapWidth>

      <TodoDetailWrapHeight>
        <HomeH1>제목</HomeH1>
        <DivInnerBox padding="20px" size="1.5em" width="95%" height="300px">
          내용
        </DivInnerBox>
        <TodoDetailBtn width="95%" margin="10px" padding="10px" font="1em">
          수정하기
        </TodoDetailBtn>
      </TodoDetailWrapHeight>

      {/* 모달창 */}
      <div>
        <div>
          <p>댓글창</p>
          <input type="text" />
          <input type="text" />
          <button>추가하기 버튼</button>
        </div>
        <div>
          <p>닉네임</p>
          <p>코멘트</p>
          <button>수정하기 버튼</button>
          <button>삭제하기 버튼</button>
        </div>
      </div>
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
`;

const HomeH1 = styled.h1`
  color: tomato;
  padding: 10px;
  justify-content: center;
  width: 95%;
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
`;
