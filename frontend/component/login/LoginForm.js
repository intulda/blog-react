import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import customInput from '../hooks/customInput';
import { ModalTop, ModalContent, ModalBottom, ConfirmLeft, ConfirmRight } from './Login';
import { LOGIN_REQUEST_ACTION, REGISTER_FORM_MOVE_ACTION } from '../../reducers/login';

const LoginFrom = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = customInput('');
  const [password, onChangePassword] = customInput('');
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const onLoginHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(LOGIN_REQUEST_ACTION());
  }, [id, password]);

  const onResisterHandler = useCallback(() => {
    dispatch(REGISTER_FORM_MOVE_ACTION());
  }, []);

  return (
    <>
      <ModalTop>
        <div>로그인 / 회원가입</div>
      </ModalTop>
      <ModalContent>
        <div>
          <input type="text" name="id" placeholder="아이디를 입력해주세요." ref={inputElement} onChange={onChangeId} value={id} />
          <input type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword} value={password} />
        </div>
      </ModalContent>
      <ModalBottom>
        <>
          <ConfirmLeft onClick={onLoginHandler}>로그인</ConfirmLeft>
          <ConfirmRight onClick={onResisterHandler}>회원가입</ConfirmRight>
        </>
      </ModalBottom>
    </>
  );
};

export default LoginFrom;
