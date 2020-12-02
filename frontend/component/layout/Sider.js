import React, {useCallback} from 'react';
import Link from 'next/link';
import {BsFillPersonFill, BsList, BsFillFolderFill, BsFillTrashFill, BsFolderPlus, BsOutlet} from "react-icons/bs";
import styled, {keyframes} from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {
    FOLDER_ADD_MODAL_CLOSE_ACTION,
    FOLDER_ADD_MODAL_OPEN_ACTION,
    SIDE_ClOSE_ACTION,
    SIDE_OPEN_ACTION, TOAST_OPEN_ACTION
} from "../../reducers/common";
import {LOGIN_FORM_CLOSE_ACTION, LOGIN_FORM_OPEN_ACTION, LOGOUT_ACTION} from "../../reducers/login";

const OpacityAnimation = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 1;
    }
`

const SideWrap = styled.div`
    width: ${props => props.active ? `200px` : `55px`};
    height: 100%;
    position: relative;
    background-color: rgba(30,30,30,0.9);
    padding: 10px;
    transition: all 1s;
    
    & span {
        display: ${props => props.active ? `block` : `none`};
        animation: ${OpacityAnimation} 0.8s;
    }
`

const SiderWrap = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    color: white;
    font-size: 2rem;
`

const SiderMenu = styled.div`
    position: absolute;
    top: 10px;
    font-size: 30px;
    color: white;
    cursor: pointer;
`

const SideMenuList = styled.li`
    display: flex;  
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    
    &:hover {
        transition: 0.2s;
        color: orange;
        transform: scale(1.1);
    }
    
    & a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        position: relative;
        font-size: 30px;
    }
    
    & div {
        position: absolute;
        left: 0;
    }

    & span {
        width: 100%;
        padding-left: 30px;
        font-size: 1rem;
        text-align: center;
    }
`

const FolderAdded = styled.div`
    position: absolute;
    bottom: 10px;
    font-size: 30px;
    color: white;
    cursor: pointer;
    
    &:hover {
        transition: 0.2s;
        color: orange;
        transform: scale(1.1);
    }
`

const LoginForm = styled.form`
    margin: 80px 0;
    
    & input {
        width: 100%;
        border: 1px solid #ddd;
        height: 25px;
        border-radius: 5px;
        outline: none;
        padding: 0 10px;
        margin-bottom: 10px;
    }
    
    & > div {
        display: flex;
        border-radius: 10px;
    }
    
    & button {
        width: 100%;
        height: 40px;
        border: 0;
        color: orange;
        font-size: 0.8rem;
        font-weight: 500;
        outline: none;
        border-right: 1px solid #ccc;
        overflow: hidden; 
        text-overflow: ellipsis; 
        white-space: nowrap;
    }
    
    & button:first-child {
        border-radius: 5px 0 0 5px;
    }
    
    & button:last-child {
        border-radius: 0 5px 5px 0;
    }
`

const LoginProfileIconWrap = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 30px;
    color: white;
    cursor: pointer;
    position: relative;
    
    &:hover {
        transition: 0.2s;
        color: orange;
        transform: scale(1.1);
    }
    
    & span {
        width: 100%;
        font-size: 1rem;
        text-align: center;
        margin-bottom: 5px;
    }
`

const IconPosition = styled.div`
    position: absolute;
    left: 0;
`

const MessageBox = styled.div`
    width: 100%;
    font-size: 0.9rem !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const LogoutBox = styled.span`
    position: absolute;
    right: 10px;
    padding: 5px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    
    &:hover {
        transition: 0.2s;
        color: orange;
        border: 1px solid orange;
        transform: scale(1.1);
    }
`

const Sider = () => {

    const {isSideOpen, modal} = useSelector(state => state.common);
    const {isLoggedIn, isLoginModalOpen, user} = useSelector(state => state.login);
    const dispatch = useDispatch();

    const onClickSideHandler = useCallback(() => {
        if(!isSideOpen) {
            dispatch(SIDE_OPEN_ACTION());
            return false;
        };
        dispatch(SIDE_ClOSE_ACTION());
    }, [isSideOpen]);

    const onLoginModalOpenHandler = useCallback(() => {
        if(!isLoginModalOpen) {
            dispatch(LOGIN_FORM_OPEN_ACTION());
            return false;
        }
        dispatch(LOGIN_FORM_CLOSE_ACTION());
    }, []);

    const onClickFolderAdd = useCallback((e) => {
        if(user.nickname !== '김코몽') {
            dispatch(TOAST_OPEN_ACTION(`${user.nickname}은 권한이 없습니다.`));
            return;
        }

        if(!modal.isOpen) {
            dispatch(FOLDER_ADD_MODAL_OPEN_ACTION());
            return;
        }
        dispatch(FOLDER_ADD_MODAL_CLOSE_ACTION());
    },[modal]);

    const onLogoutHandler = useCallback((e) => {
        e.preventDefault();
        dispatch(LOGOUT_ACTION());
    }, []);

    return (
        <SideWrap active={isSideOpen}>
            <SiderMenu>
                <BsList onClick={onClickSideHandler}/>
            </SiderMenu>
            {
                isLoggedIn &&
                <LogoutBox onClick={onLogoutHandler}>Logout</LogoutBox>
            }
            <LoginForm>
                {
                    isLoggedIn ?
                        <LoginProfileIconWrap>
                            <div>
                                <BsOutlet/>
                            </div>
                            <MessageBox>
                                <span>{user.nickname}님</span>
                                <span>환영합니다</span>
                            </MessageBox>
                        </LoginProfileIconWrap>
                        :
                        <LoginProfileIconWrap onClick={onLoginModalOpenHandler}>
                            <div>
                                <BsOutlet/>
                            </div>
                            <span>Login</span>
                        </LoginProfileIconWrap>
                }
            </LoginForm>
            <SiderWrap>
                <SideMenuList>
                    <Link href="./profile">
                        <a>
                            <div>
                                <BsFillPersonFill/>
                            </div>
                            <span>Profile</span>
                        </a>
                    </Link>
                </SideMenuList>
                <SideMenuList>
                    <Link href="#">
                        <a>
                            <div>
                                <BsFillFolderFill/>
                            </div>
                            <span>Project</span>
                        </a>
                    </Link>
                </SideMenuList>
                <SideMenuList>
                    <Link href="./post">
                        <a>
                            <div>
                                <BsFillFolderFill/>
                            </div>
                            <span>Post</span>
                        </a>
                    </Link>
                </SideMenuList>
                <SideMenuList>
                    <Link href="#">
                        <a>
                            <div>
                                <BsFillTrashFill/>
                            </div>
                            <span>Trash</span>
                        </a>
                    </Link>
                </SideMenuList>
            </SiderWrap>
            <FolderAdded onClick={onClickFolderAdd}>
                <BsFolderPlus/>
            </FolderAdded>
        </SideWrap>
    )
}

export default Sider;