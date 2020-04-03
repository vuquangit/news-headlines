import { combineReducers } from "redux";
import topHeadlines from "./TopHeadlines/headlines.reducer";

const appReducer = combineReducers({
  topHeadlines
});

export default appReducer;
