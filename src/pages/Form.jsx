import React from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { postData } from "../redux/modules/todos";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import Btn from "../components/features/Btn";

const Form = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [author, authorChange, authorReset] = useInput("");
  const [title, titleChange, titleReset] = useInput("");
  const [content, contentChange, contentReset] = useInput("");

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  const submitHandler = (e) => {
    const id = nextId(); // 제출하기 했을 때만 id값이 증가하도록 안에 넣어야 함
    e.preventDefault();
    if (author === "" || title === "" || content === "") {
      window.alert("양식을 모두 작성해주세요.");
      return;
    } else if (content.length < 10) {
      window.alert("내용을 10글자 이상 입력해주세요.");
      return;
    }
    console.log("id:", id);
    dispatch(
      postData({
        id: Date.now(),
        author,
        title,
        content,
      })
    );
    // input 값 reset
    authorReset();
    titleReset();
    contentReset();
    nav("/TodoList"); // 페이지 전환하기
  };

  return (
    <>
      <Header />
      <FormWrap onKeyPress={onCheckEnter}>
        <FormInputWrap>
          <label htmlFor="">작성자</label>
          <br />
          <FormInput
            type="text"
            name="author"
            value={author}
            onChange={authorChange}
            required
          />
        </FormInputWrap>
        <FormInputWrap>
          <label htmlFor="">제목</label>
          <br />
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={titleChange}
            required
          />
        </FormInputWrap>
        <FormInputWrap>
          <label htmlFor="">내용</label>
          <br />
          <FormInput
            type="text"
            name="content"
            value={content}
            onChange={contentChange}
            required
          />
        </FormInputWrap>
        <FormBtnWrap>
          <FormBtn onClick={submitHandler}>작성하기</FormBtn>
          <Btn size="sm">만능버튼</Btn>
        </FormBtnWrap>
      </FormWrap>
    </>
  );
};

export default Form;

const FormWrap = styled.form`
  display: flex;
  flex-flow: column;
  padding: 20px;
`;

const FormInputWrap = styled.div`
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border: 2px solid #ff917f;
  border-radius: 5px;
`;

const FormBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const FormBtn = styled.button`
  background: #ff917f;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  width: 300px;
  height: 30px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #103fa3;
    color: #ffffff;
  }
`;
