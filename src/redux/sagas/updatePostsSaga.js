import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../action-types";
import { updatepostApi } from "../../API/API";

function* updatePostsSaga(params) {
  
  try {
    
    const response = yield call(() => updatepostApi(params));
    yield put({ type: types.UPDATE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.UPDATE_POST_FAILURE, error });
  }
}

export function* watchUpdatePostsSaga() {
  yield takeEvery(types.UPDATE_POST_REQUESTED, updatePostsSaga);
}
