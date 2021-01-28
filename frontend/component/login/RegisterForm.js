import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ConfirmLeft, ConfirmRight, ModalBottom, ModalContent, ModalTop } from './Login';
import CustomCheckbox from '../common/CustomCheckbox';
import customInput from '../hooks/customInput';
import { LOGIN_FORM_MOVE_ACTION, SIGN_UP_REQUEST_ACTION } from '../../reducers/login';
import { TOAST_OPEN_ACTION } from '../../reducers/common';

const RegisterFormWrap = styled.form`
  width: 100%;
`;
const RegisterFormList = styled.ul`
  font-size: 0.8rem;
  text-align: left;
  
  & li:last-child {
    display: inline-flex;
    align-items: center;
  }
  
  & li>p {
    margin: 0 0 5px 1px;
  }
  
  & li:last-child>input {
    width: 15px;
    height: 15px;
    margin: 0 5px 0 0;
    border: 1px solid #ddd;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 0 0 10px 1px !important;
  font-size: 0.7rem;
  
  &:before {
    content: '*';
    margin-right: 1px;
  }
`;

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [password, onChangePassword] = customInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [nickname, onChangeNickname] = customInput('');
  const [authentication, setAuthentication] = useState('USER');
  const [term, setTerm] = useState(false);

  const onRegisterSubmitHandler = useCallback((e) => {
    e.preventDefault();
    console.log(term);
    if (term) {
      dispatch(SIGN_UP_REQUEST_ACTION({
        account: id,
        password,
        nickname,
      }));
    } else {
      dispatch(TOAST_OPEN_ACTION('동의버튼을 눌러주세요.'));
    }
  }, [id, password, passwordCheck, nickname, authentication, term]);

  const onChangeIdHandler = useCallback((e) => {
    setId(e.target.value);
  }, [id]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    if (e.target.value !== password) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  }, [password]);

  const onChangeAgreeHandler = useCallback((e) => {
    setTerm(e.target.checked);
  }, []);

  const onPrevHandler = useCallback(() => {
    dispatch(LOGIN_FORM_MOVE_ACTION());
  }, []);

  return (
    <RegisterFormWrap onSubmit={onRegisterSubmitHandler}>
      <ModalTop>
        <div>회원가입</div>
      </ModalTop>
      <ModalContent>
        <div>
          <RegisterFormList>
            <li>
              <p>아이디</p>
              <input type="text" name="id" onChange={onChangeIdHandler} value={id} placeholder="아이디를 입력해주세요." required />
            </li>
            <li>
              <p>비밀번호</p>
              <input type="password" name="password" onChange={onChangePassword} value={password} placeholder="비밀번호를 입력해주세요." required />
            </li>
            <li>
              <p>비밀번호 확인</p>
              <input type="password" name="passwordCheck" onChange={onChangePasswordCheck} value={passwordCheck} placeholder="비밀번호를 입력해주세요." required />
              { passwordError && <ErrorMessage>패스워드가 다릅니다</ErrorMessage> }
            </li>
            <li>
              <p>닉네임</p>
              <input type="text" name="nickname" onChange={onChangeNickname} value={nickname} placeholder="닉네임 입력해주세요." required />
            </li>
            <li>
              <CustomCheckbox changeEvent={onChangeAgreeHandler} value={term} />
              <div>회원가입 동의</div>
            </li>
          </RegisterFormList>
        </div>
      </ModalContent>
      <ModalBottom>
        <ConfirmLeft type="button" onClick={onPrevHandler}>이전</ConfirmLeft>
        <ConfirmRight>회원가입</ConfirmRight>
      </ModalBottom>
    </RegisterFormWrap>
  );
};

export default RegisterForm;
