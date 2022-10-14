// createStore is not recommended para
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import comment from "../modules/comment";

const rootReducer = combineReducers({
  todos,
  comment,
});

// 위 작업을 변수에 넣고 export
const store = createStore(rootReducer);

export default store;
