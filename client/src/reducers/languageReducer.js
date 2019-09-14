import { CHANGE_LANGUAGE } from "../actions/types";
import languages from "../i18n/languages";

const initialState =
  localStorage.getItem("currentLanguage") || languages.en.value;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LANGUAGE:
      localStorage.setItem("currentLanguage", payload);
      return payload;

    default:
      return state;
  }
};
