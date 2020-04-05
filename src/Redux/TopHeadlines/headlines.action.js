import { REQUEST_API } from "Middlewares/api";
import * as actionTypes from "./actionTypes";

const updateNewsHeadlines = ({
  options = {},
  endpoint = "/top-headlines",
  method = "GET",
  headers = {}
} = {}) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.HEADLINES_REQUEST,
      actionTypes.HEADLINES_SUCCESS,
      actionTypes.HEADLINES_FAILURE
    ],
    endpoint,
    method,
    options,
    headers
  }
});

const increaseNewsPage = () => ({
  type: actionTypes.HEADLINES_INCREASE_PAGE
});

const updateKeyword = (data = "") => ({
  type: actionTypes.HEADLINES_KEYWORD,
  data
});

export { updateNewsHeadlines, increaseNewsPage, updateKeyword };
