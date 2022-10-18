import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

// Reducer
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = commentSlice.actions;

export default commentSlice.reducer;
