import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../action-types";
import { createPostApi } from "../../API/API";

function* createPostsSaga(params) {
  console.log("Fetching Gigs saga");
  try {
    
    const response = yield call(() => createPostApi(params));
    yield put({ type: types.CREATE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.CREATE_POST_FAILURE, error });
  }
}

export function* watchCreatePostsSaga() {
  yield takeEvery(types.CREATE_POST_REQUESTED, createPostsSaga);
}
