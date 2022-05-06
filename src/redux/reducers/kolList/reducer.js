import { GET_KOL_LIST_SUCCESS } from "src/redux/actions/kolList.js";

export const INIT_KOL_STATE = {
  list: [],
};

export default function kolListReducer(state = INIT_KOL_STATE, action) {
  switch (action.type) {
    case GET_KOL_LIST_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
}
