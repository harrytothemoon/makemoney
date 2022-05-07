import { apiKolList } from "src/apis/kolList";
import transformKolList from "src/redux/transform/transformKolList.js";

export const GET_KOL_LIST_SUCCESS = "GET_KOL_LIST_SUCCESS";
export const getKolListSuccess = (payload) => ({
  type: GET_KOL_LIST_SUCCESS,
  payload,
});

export const fetchKolList = () => {
  return async (dispatch, _, fetchAPI) => {
    const rawKolList = await apiKolList(fetchAPI);
    const kolList = transformKolList(rawKolList);

    dispatch(getKolListSuccess(kolList));
  };
};
