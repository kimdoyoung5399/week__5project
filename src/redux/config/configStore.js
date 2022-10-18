<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/comment";
import todos from "../modules/todos";
import logger from "redux-logger";

const store = configureStore({
  reducer: { todos, comments },
=======
// createStore is not recommended para
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todos from "../modules/todos";
import comment from "../modules/comment";

const store = configureStore({
  reducer: { todos },
>>>>>>> 364c4b1bcf7af2bc6c3f170ea030f9ebebc6570c
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
export default store;
