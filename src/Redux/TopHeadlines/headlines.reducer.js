import { get } from "lodash";
import * as actionTypes from "./actionTypes";

const initState = {
  isFetching: false,
  data: [],
  error: false,
  limit: 20,
  page: 1,
  totalResults: 0,
  keyword: ""
};

export const headlinesReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case actionTypes.HEADLINES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case actionTypes.HEADLINES_SUCCESS:
      return {
        ...state,
        error: false,
        isFetching: false,
        data: [...state.data, ...get(action, "data.articles", [])],
        totalResults: get(action, "data.totalResults", 0)
      };
    case actionTypes.HEADLINES_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case actionTypes.HEADLINES_INCREASE_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case actionTypes.HEADLINES_KEYWORD:
      return {
        ...state,
        keyword: action.data,
        page: 1,
        totalResults: 0,
        data: []
      };

    default:
      return state;
  }
};

export default headlinesReducer;
