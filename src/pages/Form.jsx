import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/layout/Header";

const Form = () => {
  const nav = useNavigate();
  const [todo, setTodo] = useState({
    author: "",
    title: "",
    body: "",
  });
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
    console.log(todo);
  };

  const submitHandler = (todo) => {
    axios.post("http://localhost:3001/todos", todo);
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <Header />
      <FormWrap
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(todo);
        }}
      >
        <FormInputWrap>
          <label htmlFor="">작성자</label>
          <br />
          <FormInput
            type="text"
            name="author"
            value={todo.author}
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
            value={todo.title}
            onChange={changeHandler}
            required
          />
        </FormInputWrap>
        <FormInputWrap>
          <label htmlFor="">내용</label>
          <br />
          <FormInput
            type="text"
            name="body"
            value={todo.body}
            onChange={changeHandler}
            required
          />
        </FormInputWrap>
        <FormBtnWrap>
          <FormBtn onClick={() => nav("/todolist")}>작성하기</FormBtn>
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
