import { CHANGE_LANGUAGE } from "./types";

export const changeLanguage = language => {
  return { type: CHANGE_LANGUAGE, payload: language };
};
