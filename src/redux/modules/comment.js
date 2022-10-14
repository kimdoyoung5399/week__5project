import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = [
  {
    id: 0,
    commentTitle: "",
    commentBody: "",
  },
];

// Reducer
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log(state[0]);
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
