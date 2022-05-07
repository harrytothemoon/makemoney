import { apiPosts } from "src/apis/posts";
import transformPosts from "src/redux/transform/transformPosts.js";

export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const getPostsSuccess = (payload) => ({
  type: GET_POSTS_SUCCESS,
  payload,
});

export const fetchPosts = () => {
  return async (dispatch, _, fetchAPI) => {
    const rawPosts = await apiPosts(fetchAPI);
    const postsList = transformPosts(rawPosts);

    dispatch(getPostsSuccess(postsList));
  };
};
