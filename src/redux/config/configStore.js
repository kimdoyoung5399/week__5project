// createStore is not recommended para
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todos from "../modules/todos";
import comment from "../modules/comment";

const store = configureStore({
  reducer: { todos },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
export default store;
