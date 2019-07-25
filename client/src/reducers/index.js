import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import positionsReducer from "./positionsReducer";

export default combineReducers({
  currentLanguage: languageReducer,
  positions: positionsReducer
});
