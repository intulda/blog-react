import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { TOAST_CLOSE_ACTION } from '../../reducers/common';

const ToastAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    
    25% {
        opacity: 0.7;
    }
    
    75% {
        opacity: 0.7;
    }
    
    100% {
        opacity: 0;
        transform: translateY(0);
    }
`;

const ToastWrap = styled.div`
    width: 300px;
    background: orange;
    position: absolute;
    top: 10%;
    left: calc(50% - 150px);
    display: flex;
    justify-content: center;
    padding: 15px 30px;
    border-radius: 10px;
    color: white;
    animation: ${ToastAnimation} 1s;
    opacity: 0;
    overflow: hidden;
    word-wrap: break-word;
    z-index: 20;
`;

const ToastMessage = () => {
  const { isToastMessageOpen, toastMessage } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isToastMessageOpen) {
      setTimeout(() => {
        dispatch(TOAST_CLOSE_ACTION());
      }, 2000);
    }
  }, []);

  return (
    <>
      <ToastWrap>
        <span>{toastMessage}</span>
      </ToastWrap>
    </>
  );
};

export default ToastMessage;
