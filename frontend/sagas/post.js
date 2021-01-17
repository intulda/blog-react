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
  GET_ALL_POST_LIST_SUCCESS, GET_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/post/addPost', data);
}

function getPostListAPI(lastId) {
  return axios.get(`/post/postList?lastId=${lastId || 0}`);
}

function getHashtagListAPI() {
  return axios.get('/post/hashtagList');
}

function getPostAPI(data) {
  return axios.get(`/post/${data.id}/detail`);
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

function* getPostList(action) {
  try {
    console.log(action.data);
    const result = yield call(getPostListAPI, action.data);
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

function* getPost(action) {
  try {
    const result = yield call(getPostAPI, action.data);
    yield put({
      type: GET_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_POST_FAILURE,
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

function* watchGetPost() {
  yield takeLatest(GET_POST_REQUEST, getPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchGetPostList),
    fork(watchGetHashTagList),
    fork(watchGetPost),
  ]);
}
