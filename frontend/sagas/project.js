import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { GET_PROJECT_FAILURE, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS } from '../reducers/project';

function getProjectAPI(data) {
  return axios.get(`/project/detail/${data.id}`);
}

function* getProject(action) {
  try {
    const result = yield call(getProjectAPI, action.data);
    yield put({
      type: GET_PROJECT_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: GET_PROJECT_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchGetProject() {
  yield takeLatest(GET_PROJECT_REQUEST, getProject);
}

export default function* projectSaga() {
  yield all([
    fork(watchGetProject),
  ]);
}
