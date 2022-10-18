import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { postData } from "../redux/modules/todos";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    author: "",
    title: "",
    content: "",
  });
  const { author, title, content } = inputs;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  console.log("inputs:", inputs);

  const submitHandler = (e) => {
    const id = nextId(); // 제출하기 했을 때만 id값이 증가하도록 안에 넣어야 함
    e.preventDefault();
    if (inputs.author === "" || inputs.title === "" || inputs.content === "") {
      window.alert("입력하세요");
      return;
    }
    console.log("id:", id);
    dispatch(
      postData({
        id: Date.now(),
        ...inputs,
      })
    );
    setInputs({
      author: "",
      title: "",
      content: "",
    });
  };

  return (
    <>
      <Header />
      <FormWrap onSubmit={submitHandler} action="TodoList.jsx">
        <FormInputWrap>
          <label htmlFor="">작성자</label>
          <br />
          <FormInput
            type="text"
            name="author"
            value={author}
            onChange={changeHandler}
          />
        </FormInputWrap>
        <FormInputWrap>
          <label htmlFor="">제목</label>
          <br />
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={changeHandler}
          />
        </FormInputWrap>
        <FormInputWrap>
          <label htmlFor="">내용</label>
          <br />
          <FormInput
            type="text"
            name="content"
            value={content}
            onChange={changeHandler}
          />
        </FormInputWrap>
        <FormBtnWrap>
          <FormBtn>작성하기</FormBtn>
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
