import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import styled, {keyframes} from 'styled-components';
import {FOLDER_ADD_MODAL_CLOSE_ACTION} from "../../reducers/common";
import {BsX} from "react-icons/bs";
import {LOGIN_ACTION, LOGIN_FORM_CLOSE_ACTION} from "../../reducers/login";
import customInput from "../hooks/customInput";
import Toast from "../common/Toast";

const ModalOpenAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    
    100% {
        transform: translateY(0);
        opacity: 1;
    }

`

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
`

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
`

const ModalTop = styled.div`
    width: 100%;
    padding: 20px 20px 10px 20px;
    text-align: center;
`

const ModalContent = styled.div`
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
    
    &>div:nth-child(1) div {
        padding: 15px 0;
    }
    
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
`

const ModalBottom = styled.div`
    display: flex;
    width: 100%;
    background-color: #eee;
    border-radius: 0 0 10px 10px;
`

const ChoiceButton = styled.button`
    width: 100%;
    height: 40px;
    border: 0;
    color: orange;
    font-size: 0.9rem;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    border-radius: inherit;
`

const ConfirmLeft = styled(ChoiceButton)`
    border-radius: 0 0 0px 10px;
    border-right: 1px solid #ccc;
`
const ConfirmRight = styled(ChoiceButton)`
    border-radius: 0 0 10px 0px;
`

const AlertButton = styled(ChoiceButton)`
    border-radius: 0 0 10px 10px;
`

const ModalCancel = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 20px;
    cursor: pointer;
`

const Login = () => {

    const dispatch = useDispatch();
    const inputElement= useRef(null);

    const [id, onChangeId] = customInput('');
    const [password, onChangePassword] = customInput('');

    useEffect(() => {
        inputElement.current.focus();
    }, [])

    const onClickModalCloseHandler = useCallback(() => {
        dispatch(LOGIN_FORM_CLOSE_ACTION());
    }, [])

    const onLoginHandler = useCallback((e) => {
        e.preventDefault();
        if(id === '') {
            return <Toast message="아이디 입력하셈."/>
        }
        if(password === '') {

        }
        dispatch(LOGIN_ACTION());
    }, [id, password]);

    return (
        <>
            <ModalContainer>
                <ModalWrap>
                    <ModalCancel onClick={onClickModalCloseHandler}>
                        <BsX/>
                    </ModalCancel>
                    <ModalTop>
                        <div>로그인 / 회원가입</div>
                    </ModalTop>
                    <ModalContent>
                        <div>
                            <input type="text" name="id" placeholder="아이디를 입력해주세요." ref={inputElement} onChange={onChangeId} value={id}/>
                            <input type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword} value={password}/>
                        </div>
                    </ModalContent>
                    <ModalBottom>
                        <>
                            <ConfirmLeft onClick={onLoginHandler}>로그인</ConfirmLeft>
                            <ConfirmRight>회원가입</ConfirmRight>
                        </>
                    </ModalBottom>
                </ModalWrap>
            </ModalContainer>
        </>
    )
}

export default Login;