import React from "react";
import Header from "../components/layout/Header";

const TodoDetail = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <p>id</p>
          <button>이전 버튼</button>
        </div>
        <div>
          <h3>제목</h3>
          <p>내용</p>
        </div>
        <button>수정하기 버튼</button>
      </div>
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
