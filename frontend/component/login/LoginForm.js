import React, {useCallback} from 'react';
import CustomInput from '../hooks/customInput';
import {useDispatch} from "react-redux";
import styled from 'styled-components';
import {loginAction} from "../../reducers";
import {AiOutlineArrowRight} from 'react-icons/ai';

const LoginFormWrap = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const ProfileImage = styled.span`
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    & span {
        position: absolute;
        bottom: -25px;
        /* text-align: center; */
        color: white;
        color: 0.9rem;
        font-size: 0.9rem;
    }
`

const ProfileWrap = styled.div`
    display: flex;
    width: 180px;
    height: 120px;
    justify-content: space-between;
`

const IOWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonWrap = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(128,120,130, 1);
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    &:focus {
        outline: none;
    }
`

const InputWrap = styled.input`
    width: 70%;
    border: 0;
    background-color: rgba(127,119,134, 1);
    border-radius: 5px;
    margin-right: 10px;
    padding: 4px 5px;
    color: white;
    &:focus {
        outline: none;
        color: white;
    }
`

const SubmitLogo = styled(AiOutlineArrowRight)`
    color: rgb(52,49,56);
`



const LoginFrom = () => {
    const dispatch = useDispatch();
    const [password, onChangePassword] = CustomInput('');

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch(loginAction({password: password}));
    }, [password]);

    return (
        <LoginFormWrap onSubmit={onSubmitForm}>
            <div>
                <div>
                    <ProfileWrap>
                        <ProfileImage>
                            <span>코드몽키</span>
                        </ProfileImage>
                        <ProfileImage>
                            <span>게스트</span>
                        </ProfileImage>
                    </ProfileWrap>
                </div>
                <IOWrap>
                    <InputWrap type="password" value={password} onChange={onChangePassword}/>
                    <ButtonWrap><SubmitLogo/></ButtonWrap>
                </IOWrap>
            </div>
        </LoginFormWrap>
    )
};

export default LoginFrom;