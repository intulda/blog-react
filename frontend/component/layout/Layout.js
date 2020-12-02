import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from "./Search";
import styled, {keyframes} from 'styled-components';
import {useSelector} from "react-redux";
import Modal from "../common/Modal";
import Sider from "./Sider";
import Login from "../login/Login";
import Toast from "../common/Toast";


const LayoutWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;
    background-color: rgba(243, 238, 239, 1);
    color: black;
    position: relative;
`

const MainContentWrap = styled.div`
    width: calc(100%);
    padding: 10px 20px;
`

const Layout = ({children}) => {

    const {modal, isToastMessageOpen} = useSelector((state) => state.common);
    const {isLoginModalOpen} = useSelector((state) => state.login);

    return (
        <>
            {modal.isOpen && <Modal type="createFolder"/>}
            {isLoginModalOpen && <Login/>}
            <LayoutWrap>
                <Sider/>
                <MainContentWrap>
                    <Header/>
                    <Search/>
                    {children}
                    {isToastMessageOpen && <Toast/>}
                </MainContentWrap>
            </LayoutWrap>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
