import React from "react";
import Header from "../components/layout/Header";

const Form = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <label htmlFor="">닉네임</label>
          <input type="text" name="nickname" />
        </div>
        <div>
          <label htmlFor="">제목</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="">내용</label>
          <input type="text" name="content" />
        </div>
        <button>작성하기</button>
      </div>
    </>
  );
};

export default Form;
