import {
  all, fork,
} from 'redux-saga/effects';

import postSaga from './post';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(postSaga),
  ]);
}

/**
 * [fork, call]: 해당 함수를 실행하게 해줌
 * fork: 비동기 함수 호출,
 * call: 동기 함수 호출,
 * take: 해당 액션이 실행될 때 까지 기다린다.
 * put == dispatch
 */
