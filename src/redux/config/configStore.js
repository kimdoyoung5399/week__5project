// createStore is not recommended para
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos,
});

// 위 작업을 변수에 넣고 export
const store = createStore(rootReducer);

export default store;
