import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk
export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
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
      await axios.delete(`http://localhost:3001/comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __editComments = createAsyncThunk(
// 'comments/editComments',
// async (postId, thunkAPI) => {
// try {
// const data = await axios.patch(`http://localhost:3001/comments/${postId}`)
// }
// }
// )

//initialState
const initialState = {
  comments: [
    {
      id: 0,
      postId: 0,
      user: "",
      body: "",
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
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    });
    builder.addCase(__deleteComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default commentSlice.reducer;
