import { combineReducers } from "redux";

import appReducer from "./app/reducer.js";
import kolListReducer from "./kolList/reducer.js";
import postReducer from "./posts/reducer.js";

const reducers = {
  app: appReducer,
  kolList: kolListReducer,
  posts: postReducer,
};

export default combineReducers(reducers);
