import { types } from "../action-types";

const initialState = {
  loading: false,
  posts: [],
  error: false,
};

const updatePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_POST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case types.UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: false,
      };
    case types.UPDATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: true,
      };
    default:
      return state;
  }
};

export default updatePostReducer;
