import { all, call, fork, put, take } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../reducers/login';

function loginAPI(data) {
  return axios.post('/api/login', data);
}
function logoutAPI() {
  return axios.post('/api/logout');
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      data: err.response.data,
    });
  }
}

function* logout() {
  try {
    const result = yield call(logoutAPI);
    yield put({
      type: 'LOGOUT_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOGOUT_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield take(LOGIN_REQUEST, login);
}

function* watchLogout() {
  yield take('LOGOUT_REQUEST', logout);
}

export default function* loginSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
  ]);
}
