import React from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { postData } from "../redux/modules/todos";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import Btn from "../components/features/Btn";
import Swal from "sweetalert2";

const Form = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [author, authorChange, authorReset] = useInput("");
  const [title, titleChange, titleReset] = useInput("");
  const [content, contentChange, contentReset] = useInput("");

  const submitHandler = (e) => {
    const id = nextId(); // 제출하기 했을 때만 id값이 증가하도록 안에 넣어야 함
    e.preventDefault();
    if (author === "" || title === "" || content === "") {
      Swal.fire({
        icon: "warning",
        title: "양식 오류",
        text: "양식을 모두 입력해주세요.",
      });
      return;
    } else if (content.length < 10) {
      Swal.fire({
        icon: "info",
        title: "양식 오류",
        text: "내용을 10글자 이상 입력해주세요.",
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "작성 완료",
        text: "GO TO TODOLIST",
      });
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
  console.log("author, title, content:", author, title, content);

  return (
    <BaseWrap>
      <BaseContainer>
        <Header />
        <FormWrap onSubmit={submitHandler}>
          <FormInputWrap>
            <label htmlFor="">작성자</label>
            <br />
            <FormInput
              type="text"
              name="author"
              value={author}
              onChange={authorChange}
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
            />
          </FormInputWrap>
          <FormInputWrap>
            <label htmlFor="">내용</label>
            <br />
            <FormInputContent
              type="text"
              name="content"
              value={content}
              onChange={contentChange}
            />
          </FormInputWrap>
          <FormBtnWrap>
            <Btn size="sm">작성하기</Btn>
          </FormBtnWrap>
        </FormWrap>
      </BaseContainer>
    </BaseWrap>
  );
};

export default Form;

const BaseWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const BaseContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 540px;
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

const FormInputContent = styled.input`
  width: 100%;
  height: 100px;
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
  margin-top: 10px;
`;
