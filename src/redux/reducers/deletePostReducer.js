import { types } from "../action-types";

const initialState = {
  loading: false,
  success: false,
  posts: [],
  error: false,
};

const deletePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_POST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        posts: action.payload,
        error: false,
      };
    case types.DELETE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        posts: [],
        error: true,
      };
    default:
      return state;
  }
};

export default deletePostReducer;
