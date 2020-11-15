import React, {useCallback, useState} from 'react';
import CustomInput from '../hooks/customInput';
import {useDispatch} from "react-redux";
import styled, {keyframes} from 'styled-components';
import {loginAction} from "../../reducers/user";
import {AiOutlineArrowRight} from 'react-icons/ai';
import guest from '../../resource/images/user.png';
import kimbogeun from '../../resource/images/kimbogeun.jpg';

const shake = keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
  
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
`

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
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 50%;
    background-color: rgba(128 128 128);
    
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
    width: 185px;
    height: 120px;
    justify-content: space-between;
    cursor: pointer;
    
`

const IOWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:23px;
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
    ${(props) => props.active === 'true' ? `
        animation: ${shake} 0.5s;
    `: ''}
`

const SubmitLogo = styled(AiOutlineArrowRight)`
    color: rgb(52,49,56);
`

const LoginFrom = () => {
    const dispatch = useDispatch();
    const [password, onChangePassword] = CustomInput('');
    const [display, setDisplay] = useState(true);
    const [currentUser, setCurrentUser] = useState('code');
    const [active, setActive] = useState('false');

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        if(currentUser === 'code') {
            if(password != 1234) {
                setActive('true');
                return;
            }
        }
        dispatch(loginAction({password: password}));
    }, [password, currentUser, active]);

    const onProfileClickHandler = (e) => {
        if(e.target.getAttribute('value') === 'code') {
            setDisplay(true);
            setCurrentUser('code');
        } else {
            setDisplay(false);
            setCurrentUser('guest');
        }
    }

    return (
        <LoginFormWrap onSubmit={onSubmitForm}>
            <div>
                <div>
                    <ProfileWrap onClick={onProfileClickHandler}>
                        <ProfileImage style={{backgroundImage: `url(${kimbogeun})`}} value="code">
                            <span>코드몽키</span>
                        </ProfileImage>
                        <ProfileImage style={{backgroundImage:`url(${guest})`}} value="guest">
                            <span>게스트</span>
                        </ProfileImage>
                    </ProfileWrap>
                </div>
                <IOWrap>
                    { display ? <InputWrap active={active} type="password" value={password} onChange={onChangePassword}/> : '' }
                    <ButtonWrap>
                        <SubmitLogo/>
                    </ButtonWrap>
                </IOWrap>
            </div>
        </LoginFormWrap>
    )
};

export default LoginFrom;