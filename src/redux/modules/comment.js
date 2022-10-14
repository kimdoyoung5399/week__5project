// Action Value
const COMMENT_ADD_TODO = "COMMENT_ADD_TODO";

// Action Creator
export const CommentaddTodo = (payload) => {
  return {
    type: COMMENT_ADD_TODO,
    payload,
  };
};

// initialState
const initialState = [
  {
    id: 0,
    commentTitle: "",
    commentBody: "",
  },
];

// Reducer
const comment_reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

//export
export default comment_reducer;
