import { all } from "redux-saga/effects";

import { watchGetPostsSaga } from "./getPostsSaga";
import { watchCreatePostsSaga } from "./createPostSaga";
import { watchUpdatePostsSaga } from "./updatePostsSaga";
import { watchDeletePostsSaga } from "./deletePostsSaga";

export default function* rootSaga() {
  yield all([
    watchGetPostsSaga(),
    watchCreatePostsSaga(),
    watchUpdatePostsSaga(),
    watchDeletePostsSaga()
  ]);
}
