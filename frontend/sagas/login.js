import { all, call, fork, put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  ID_CHECK_REQUEST,
  ID_CHECK_FAILURE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  ID_CHECK_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  LOGOUT_REQUEST,
  LOAD_MY_INFORMATION_REQUEST,
  LOAD_MY_INFORMATION_SUCCESS, LOAD_MY_INFORMATION_FAILURE,
} from '../reducers/login';

function loginAPI(data) {
  return axios.post('/login/loginReq', data);
}
function logoutAPI() {
  return axios.post('/login/logoutReq');
}

function idCheckAPI(data) {
  return axios.post('/login/idCheck', data);
}

function signUpAPI(data) {
  return axios.post('/login/signUp', data);
}

function loadMyInformationAPI() {
  return axios.get('/login/myInformation');
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
  console.log(action.data);
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

function* loadMyInformation() {
  try {
    const result = yield call(loadMyInformationAPI);
    yield put({
      type: LOAD_MY_INFORMATION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_INFORMATION_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

function* watchIdCheck() {
  yield takeLatest(ID_CHECK_REQUEST, idCheck);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLoadMyInformation() {
  yield takeLatest(LOAD_MY_INFORMATION_REQUEST, loadMyInformation);
}

export default function* loginSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchIdCheck),
    fork(watchSignUp),
    fork(watchLoadMyInformation),
  ]);
}
