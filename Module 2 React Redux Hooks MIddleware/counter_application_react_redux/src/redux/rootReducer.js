import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
  hooksCounter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
});

export default rootReducer;
