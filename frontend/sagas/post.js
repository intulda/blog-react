import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  GET_ALL_HASHTAG_LIST_FAILURE,
  GET_ALL_HASHTAG_LIST_REQUEST,
  GET_ALL_HASHTAG_LIST_SUCCESS,
  GET_ALL_POST_LIST_FAILURE,
  GET_ALL_POST_LIST_REQUEST,
  GET_ALL_POST_LIST_SUCCESS,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/post/addPost', data);
}

function getPostListAPI() {
  return axios.get('/post/postList');
}

function getHashtagListAPI() {
  return axios.get('/post/hashtagList');
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* getPostList() {
  try {
    const result = yield call(getPostListAPI);
    yield put({
      type: GET_ALL_POST_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_ALL_POST_LIST_FAILURE,
      data: err.response.data,
    });
  }
}

function* getHashtagList() {
  try {
    const result = yield call(getHashtagListAPI);
    yield put({
      type: GET_ALL_HASHTAG_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_ALL_HASHTAG_LIST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchGetPostList() {
  yield takeLatest(GET_ALL_POST_LIST_REQUEST, getPostList);
}

function* watchGetHashTagList() {
  yield takeLatest(GET_ALL_HASHTAG_LIST_REQUEST, getHashtagList);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchGetPostList),
    fork(watchGetHashTagList),
  ]);
}
