import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk
export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (_, thunkAPI) => {
    // console.log("aaapayload:", payload);
    try {
      const data = await axios.get(`http://localhost:3001/comments/`);
      console.log("data:", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComments = createAsyncThunk(
  "comments/addComments",
  async (payload, thunkAPI) => {
    console.log("addpayload:", payload);
    try {
      const data = await axios.post("http://localhost:3001/comments", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComments = createAsyncThunk(
  "comments/deleteComments",
  async (payload, thunkAPI) => {
    console.log("id, postId:", payload);
    try {
      await axios.delete(`http://localhost:3001/comments/${payload.id}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editComments = createAsyncThunk(
  "comments/editComments",
  async (payload, thunkAPI) => {
    // console.log()
    try {
      const data = await axios.patch(
        `http://localhost:3001/comments/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//initialState
const initialState = {
  comments: [
    {
      user: "",
      body: "",
      id: "0",
      todoId: 0,
    },
  ],
  isLoading: false,
  error: null,
};

// reducer
export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__addComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__addComments.fulfilled, (state, action) => {
      console.log("add부분:", state, action);
      state.isLoading = false;
      state.comments.push(action.payload);
    });
    builder.addCase(__addComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__getComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getComments.fulfilled, (state, action) => {
      console.log("get부분:", state, action);
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(__getComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__deleteComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__deleteComments.fulfilled, (state, action) => {
      console.log("delete부분:", state, action);
      state.isLoading = false;
      const idx = state.comments.findIndex(
        (comment) => comment.todoId === action.payload.todoId
      );
      state.comments.splice(idx, 1);
    });
    builder.addCase(__deleteComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__editComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__editComments.fulfilled, (state, action) => {
      state.isLoading = false;
      const idx = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments.splice(idx, 1, action.payload);
    });
    builder.addCase(__editComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default commentSlice.reducer;

// id값을 확인해서 인덱스 찾아서 그 부분을 수정하도록
