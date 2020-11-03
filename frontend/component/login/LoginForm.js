import React, {useCallback} from 'react';
import CustomInput from '../hooks/customInput';
import {useDispatch} from "react-redux";
import styled from 'styled-components';
import {loginAction} from "../../reducers";

const LoginFormWrap = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`


const LoginFrom = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = CustomInput('');
    const [password, onChangePassword] = CustomInput('');

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch(loginAction({id: id, password: password}));
    }, [id, password]);

    return (
        <LoginFormWrap onSubmit={onSubmitForm}>
            <div>
                <div/>
                <span>코드몽키</span>
            </div>
            <div>
                <input type="text" value={id} onChange={onChangeId}/>
            </div>
            <div>
                <input type="password" value={password} onChange={onChangePassword}/>
            </div>
            <div>
                <button>로그인</button>
            </div>
        </LoginFormWrap>
    )
};

export default LoginFrom;