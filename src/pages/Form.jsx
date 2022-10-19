import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { postData } from "../redux/modules/todos";
import nextId from "react-id-generator";

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
    if (inputs.author.length < 2 || inputs.author.length > 13) {
      window.alert("작성자는 3자 이상 13자 이하의 이름으로 이루어져야 합니다.");
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
      <BaseContainer>
        <FormWrap onSubmit={submitHandler}>
          <FormInputWrap>
            <label htmlFor="">작성자</label>
            <br />
            <FormInput
              type="text"
              name="author"
              value={author}
              onChange={changeHandler}
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
              onChange={changeHandler}
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
              onChange={changeHandler}
              required
            />
          </FormInputWrap>
          <FormBtnWrap>
            <FormBtn>작성하기</FormBtn>
          </FormBtnWrap>
        </FormWrap>
      </BaseContainer>
    </>
  );
};

export default Form;

const BaseContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  max-height: 100vh;
  margin: 20px auto;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.61);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.28);
`;

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
  font-size: 1.7rem;
  border-radius: 5px;
  border: none;
  background-color: rgba(172, 185, 255, 0.432);

  &:focus {
    outline: none;
    box-shadow: inset 0.2rem 0.3rem 0.4rem #557fb699;
  }
`;

const FormBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const FormBtn = styled.button`
  width: 300px;
  height: 30px;
  margin-top: 20px;
  font-weight: 600;
  background: rgb(103, 124, 241);
  border: none;
  border-radius: 5px;
  box-shadow: 0.3rem 0.3rem 0.3rem #a1a7aa99;
  cursor: pointer;
  &:hover {
    background-color: #103fa3;
    color: #ffffff;
  }
  &:active {
    box-shadow: inset 0.3rem 0.4rem 0.5rem #2561af99;
  }
`;
