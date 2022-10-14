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

// // Action Value
// const ADD_TODO = "ADD_TODO";

// // Action Creator
// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

// // initialState
// const initialState = {
//   todos: [
//     {
//       id: 0,
//       userName: "",
//       title: "",
//       body: "",
//     },
//   ],
//   todo: {
//     id: 0,
//     userName: "",
//     title: "",
//     body: "",
//   },
// };

// // Reducer
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// //export
// export default todos;
