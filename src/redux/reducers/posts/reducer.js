import { GET_POSTS_SUCCESS } from "src/redux/actions/posts.js";

export const INIT_POST_STATE = {
  list: [],
};

export default function postReducer(state = INIT_POST_STATE, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
}
