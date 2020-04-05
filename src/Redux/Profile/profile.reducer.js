import { get } from "lodash";
import * as actionTypes from "./actionTypes";

const initState = {
  isFetching: false,
  data: [],
  error: false,
};

export const profileReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case actionTypes.PROFILE_UPDATE:
      return {
        ...state,
        data: get(action, "data", []),
      };
    case actionTypes.PROFILE_CLEAR:
      return {
        ...state,
        data: [],
        error: false,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default profileReducer;
