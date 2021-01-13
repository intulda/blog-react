import { all, call, fork, put, take } from 'redux-saga/effects';
import axios from 'axios';
import {
  ID_CHECK_REQUEST,
  ID_CHECK_FAILURE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  ID_CHECK_SUCCESS, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST,
} from '../reducers/login';

function loginAPI(data) {
  return axios.post('/api/login', data);
}
function logoutAPI() {
  return axios.post('/api/logout');
}

function idCheckAPI(data) {
  return axios.post('/api/idCheck', data);
}

function signUpAPI(data) {
  return axios.post('http://localhost:3065/api/login/signUp', data);
}

function* idCheck(action) {
  try {
    const result = yield call(idCheckAPI, action.data);
    yield put({
      type: ID_CHECK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ID_CHECK_FAILURE,
      data: err.response.data,
    });
  }
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

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
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

function* watchIdCheck() {
  yield take(ID_CHECK_REQUEST, idCheck);
}

function* watchSignUp() {
  yield take(SIGN_UP_REQUEST, signUp);
}

export default function* loginSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchIdCheck),
    fork(watchSignUp),
  ]);
}
