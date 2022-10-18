import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/comment";
import todos from "../modules/todos";
import logger from "redux-logger";

const store = configureStore({
  reducer: { todos, comments },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
export default store;
