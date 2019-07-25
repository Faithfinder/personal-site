import { FETCH_POSITIONS } from "../actions/types";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSITIONS:
      return payload;

    default:
      return state;
  }
};
