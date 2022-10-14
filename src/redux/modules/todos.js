import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 0,
      userName: "",
      title: "",
      body: "",
    },
  ],
  todo: {
    id: 0,
    userName: "",
    title: "",
    body: "",
  },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("action:", action);
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
