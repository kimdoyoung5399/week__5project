import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  todos: [
    /* id: index, author: 글쓴이, title: 제목, content: 내용 <json 객체와 동일 구성> */
    {
      id: 0,
      author: "",
      title: "",
      content: "",
    },
  ],
  isLoading: false,
};

/* Thunk Functions */
/* 게시글 몽땅 조회 */

export const getData = createAsyncThunk(
  "todos/getData",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:3001/todos");
      //const todoData = res.data;
      console.log(res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

/* 게시글 id 값을 부여 후 todo 추가 get -> post  */

export const postData = createAsyncThunk(
  "todos/getData",
  async (payload, thunkAPI) => {
    try {
      //const { author, title, content } = payload;
      const res = await axios.post("http://localhost:3001/todos", {
        payload,
      });
      console.log(res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

/* 해당 id의 todo 를 update 인자에 저장 후 반환 */

export const updateData = createAsyncThunk(
  "todos/getData",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.patch("http://localhost:3001/todos");
      //const todoData = res.data;
      console.log(res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

/* 해당 id에 todo를 삭제 */

export const deleteData = createAsyncThunk(
  "todos/getData",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.delete("http://localhost:3001/todos");
      //const todoData = res.data;
      console.log(res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// Reducer
/* 필요한 reducer : 
post : 게시글 작성  get : 게시글 전체 조회, 게시글 조회 put : 게시글 수정 Delete : todo 삭제 
toolkit의 기능으로 객체 불변성 신경 x , payload라는 매개변수는 고정 값*/

const todosSlice = createSlice({
  name: "todos", // module`s name
  initialState, // this module`s initialState

  /* reducer logic */
  reducers: {},

  /* 비동기 관련 */
  /* How return for pending (네트워크 요청 시작), fulfilled (네트워크 요청 끝), rejected (네트워크 요청 끝 -> 에러 발생) */
  /* addCase는 내장함수 */

  extraReducers: (builder) => {
    /* ----------- getData(전체 게시글 조회) ---------------- */
    builder.addCase(getData.pending, (state, { payload }) => {
      //state.todos = payload;
      console.log("pending");
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = true;
      console.log(state, action);
    });
    builder.addCase(getData.rejected, (state, action) => {
      console.log("error");
    });

    /* ----------- postData(Todo 추가) ---------------- */
    /*     builder.addCase(postData.pending, (state, { payload }) => {
      //state.todos = payload;
      console.log("pending");
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = true;
      console.log(state, action);
    });
    builder.addCase(postData.rejected, (state, action) => {
      console.log("error");
    }); */

    /* ----------- updateData(Todo 수정) ---------------- */
    /*     builder.addCase(updateData.pending, (state, { payload }) => {
      //state.todos = payload;
      console.log("pending");
    });
    builder.addCase(updateData.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = true;
      console.log(state, action);
    });
    builder.addCase(updateData.rejected, (state, action) => {
      console.log("error");
    }); */

    /* ----------- deleteData(Todo 삭제) ---------------- */
    /*     builder.addCase(deleteData.pending, (state, { payload }) => {
      //state.todos = payload;
      console.log("pending");
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = true;
      console.log(state, action);
    });
    builder.addCase(deleteData.rejected, (state, action) => {
      console.log("error");
    }); */
  },
});

//export

export default todosSlice.reducer;
