import { combineReducers } from "redux";
import topHeadlines from "./TopHeadlines/headlines.reducer";
import profile from "./Profile/profile.reducer";

const appReducer = combineReducers({
  topHeadlines,
  profile,
});

export default appReducer;
