import { types } from "./action-types";

export const viewPost = (params) => {
  console.log("params: ", params);
  return {
    type: types.VIEW_POST_REQUESTED,
    payload: params,
  };
};
export const createPost = (params) => {
  console.log("params: ", params);
  return {
    type: types.CREATE_POST_REQUESTED,
    payload: params,
  };
};
export const updatePost = (params) => {
  console.log("params: ", params);
  return {
    type: types.UPDATE_POST_REQUESTED,
    payload: params,
  };
};
export const deletePost = (params) => {
  console.log("params: ", params);
  return {
    type: types.DELETE_POST_REQUESTED,
    payload: params,
  };
};