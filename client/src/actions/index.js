import { CHANGE_LANGUAGE, FETCH_POSITIONS } from "./types";
import backend from "../apis/backend";

export const changeLanguage = language => {
  return { type: CHANGE_LANGUAGE, payload: language };
};

export const fetchPositions = () => async dispatch => {
  const response = await backend.get("/positions");

  dispatch({ type: FETCH_POSITIONS, payload: response.data });
};
