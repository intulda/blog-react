import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled, {keyframes} from 'styled-components';
import {TOAST_CLOSE_ACTION} from "../../reducers/common";

const ToastAnimation = keyframes`
    0% {
        opacity: 0;
        right: -100px;
    }
    
    25% {
        opacity: 0.7;
        right: 10px;
    }
    
    75% {
        opacity: 0.7;
        right: 10px;
    }
    
    100% {
        opacity: 0;
        right: -100px;
    }
`

const ToastWrap = styled.div`
    max-width: 300px;
    background: rgba(30, 30, 30);
    position: absolute;
    top: 10px;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 20px 30px;
    border-radius: 10px;
    color: orange;
    animation: ${ToastAnimation} 2s;
    opacity: 0;
    overflow: hidden;
    word-wrap: break-word;
`


const Toast = () => {


    const {isToastMessageOpen, toastMessage} = useSelector(state => state.common);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isToastMessageOpen) {
            setTimeout(() => {
                dispatch(TOAST_CLOSE_ACTION());
            }, 2000);
        }
    }, [isToastMessageOpen]);


    return (
        <>
            <ToastWrap>
                <span>{toastMessage}</span>
            </ToastWrap>
        </>
    )
}

export default Toast;

