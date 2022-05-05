import { combineReducers } from "redux";

import appReducer from "./app/reducer.js";

const reducers = {
  app: appReducer,
};

export default combineReducers(reducers);
