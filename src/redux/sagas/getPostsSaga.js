import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../action-types";
import { postListApi } from "../../API/API";

function* getPostsSaga(params) {
  
  try {
    
    const response = yield call(() => postListApi(params));
    yield put({ type: types.VIEW_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.VIEW_POST_FAILURE, error });
  }
}

export function* watchGetPostsSaga() {
  yield takeEvery(types.VIEW_POST_REQUESTED, getPostsSaga);
}
