import { combineReducers } from "redux";

import getpostsReducer from "./getpostsReducer";
import createPostsReducer from "./createPostsReducer";
import updatePostReducer from "./updatePostReducer";
import deletePostReducer from "./deletePostReducer"

export default combineReducers({
  getpostsReducer,
  createPostsReducer,
  updatePostReducer,
  deletePostReducer

});
