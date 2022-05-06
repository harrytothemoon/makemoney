import { combineReducers } from "redux";

import appReducer from "./app/reducer.js";
import kolListReducer from "./kolList/reducer.js";

const reducers = {
  app: appReducer,
  kolList: kolListReducer,
};

export default combineReducers(reducers);
