import { getCategories } from "api/categories";
import { call, put, takeEvery } from "redux-saga/effects";
import type from "./constants";

function* fetchCategories() {
  try {
    const categoriesResponse = yield call(getCategories);
    yield put({ type: type.GET_CATEGORIES_SUCCESS, payload: categoriesResponse });
  } catch (e) {
    yield put({ type: type.GET_CATEGORIES_FAILED, error: e.message });
  }
}

function* categoriesSaga() {
  yield takeEvery(type.GET_CATEGORIES_REQUESTED, fetchCategories);
}

export default categoriesSaga;
