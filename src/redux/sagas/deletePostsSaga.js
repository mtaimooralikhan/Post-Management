import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../action-types";
import { deletePostApi } from "../../API/API";

function* deletePostsSaga(params) {
  
  try {
    
    const response = yield call(() => deletePostApi(params));
    yield put({ type: types.DELETE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.DELETE_POST_FAILURE, error });
  }
}

export function* watchDeletePostsSaga() {
  yield takeEvery(types.DELETE_POST_REQUESTED, deletePostsSaga);
}
