<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
=======
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { postData } from "../redux/modules/todos";
>>>>>>> origin
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";

const Form = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      username: "작성자",
      title: "이런",
      body: "홧팅",
    },
    {
      id: 2,
      username: "작성자",
      title: "이런",
      body: "홧팅",
    },
  ]);

  const [inputs, setInputs] = useState({
<<<<<<< HEAD
    id: 0,
    username: "",
=======
    author: "",
>>>>>>> origin
    title: "",
    content: "",
  });
<<<<<<< HEAD
=======
  const { author, title, content } = inputs;
>>>>>>> origin

  const { username, title, body } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs(...inputs, { [name]: value });
  };

  const formonSumbit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (username.trim() === "" || title.trim() === "" || body.trim() === "") {
      alert("Please enter a text");
    }
=======
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
>>>>>>> origin
  };

  return (
    <>
      <Header />
<<<<<<< HEAD
      <FormWrap>
        <FormInputWrap onSubmit={formonSumbit}>
=======
      <FormWrap onSubmit={submitHandler} action="TodoList.jsx">
        <FormInputWrap>
>>>>>>> origin
          <label htmlFor="">작성자</label>
          <br />
          <FormInput
            type="text"
<<<<<<< HEAD
            name="username"
            value={username}
            onChange={onChange}
=======
            name="author"
            value={author}
            onChange={changeHandler}
>>>>>>> origin
          />
        </FormInputWrap>
        <FormInputWrap>
          <label htmlFor="">제목</label>
          <br />
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={onChange}
          />
        </FormInputWrap>
        <FormInputWrap>
          <label htmlFor="">내용</label>
          <br />
<<<<<<< HEAD
          <FormInput type="text" name="body" value={body} onChange={onChange} />
=======
          <FormInput
            type="text"
            name="content"
            value={content}
            onChange={changeHandler}
          />
>>>>>>> origin
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
