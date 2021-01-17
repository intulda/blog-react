import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { BsX } from 'react-icons/bs';
import { LOGIN_FORM_CLOSE_ACTION } from '../../reducers/login';
// eslint-disable-next-line import/no-cycle
import LoginFrom from './LoginForm';
import RegisterForm from './RegisterForm';

const ModalOpenAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    
    100% {
        transform: translateY(0);
        opacity: 1;
    }

`;

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    
    &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        background-color: black;
        opacity: 0.5;
        z-index: 5;    
    }
`;

const ModalWrap = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    z-index: 10;
    animation: ${ModalOpenAnimation} 0.5s;
    position: relative;
`;

export const ModalTop = styled.div`
    width: 100%;
    padding: 20px 20px 10px 20px;
    text-align: center;
`;

export const ModalContent = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    border-bottom: 1px solid #ccc;
    
    &>div:nth-child(1) {
        width: 100%;
        padding: 15px;
    }
    
    &>div:nth-child(1) span {
        width: 100%;
        margin-bottom: 15px;
        word-break: break-word;
        font-size: 0.8rem;
    }
    
    // &>div:nth-child(1) div {
    //     padding: 15px 0;
    // }
    
    &>div:nth-child(1) input {
        width: 100%;
        border: 1px solid #ddd;
        height: 25px;
        border-radius: 8px;
        outline: none;
        padding: 0 10px;
        margin-bottom: 10px;
        
        &::placeholder {
            font-size: 0.7rem;
        }
    }
`;

export const ModalBottom = styled.div`
    display: flex;
    width: 100%;
    background-color: #eee;
    border-radius: 0 0 10px 10px;
`;

const ChoiceButton = styled.button`
    width: 100%;
    height: 40px;
    border: 0;
    color: #546beb;
    font-size: 0.9rem;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    border-radius: inherit;
`;

export const ConfirmLeft = styled(ChoiceButton)`
    border-radius: 0 0 0px 10px;
    border-right: 1px solid #ccc;
`;

export const ConfirmRight = styled(ChoiceButton)`
    border-radius: 0 0 10px 0px;
    position: relative;
    overflow: hidden;
    transition: 1s;
    &:disabled {
      cursor: default;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #aaa;
        opacity: 0.5;
      }  
    }
`;

const ModalCancel = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 20px;
    cursor: pointer;
`;

const Login = () => {
  const dispatch = useDispatch();
  const { isLoginFormState } = useSelector((state) => state.login);

  const onClickModalCloseHandler = useCallback(() => {
    dispatch(LOGIN_FORM_CLOSE_ACTION());
  }, []);

  return (
    <>
      <ModalContainer>
        <ModalWrap>
          <ModalCancel onClick={onClickModalCloseHandler}>
            <BsX />
          </ModalCancel>
          {
            isLoginFormState === 'LOGIN'
              ? <LoginFrom />
              : <RegisterForm />
          }
        </ModalWrap>
      </ModalContainer>
    </>
  );
};

export default Login;
