import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from "./Search";
import styled, {keyframes} from 'styled-components';
import {useSelector} from "react-redux";
import FolderModal from "../common/FolderModal";
import Login from "../login/Login";
import Toast from "../common/Toast";

const LayoutWrap = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
    transition: 0.5s ease-in-out;
    background: #1B1D21;
    color: #F2F3F6;
    position: relative;
`

const MainContentWrap = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
`

const Layout = ({children, search}) => {

    const {modal, isToastMessageOpen} = useSelector((state) => state.common);
    const {isLoginModalOpen} = useSelector((state) => state.login);

    return (
        <>
            {modal.isOpen && <FolderModal type="createFolder"/>}
            {isLoginModalOpen && <Login/>}
            <LayoutWrap>
                <MainContentWrap>
                    <Header/>
                    {/*{search && <Search/>}*/}
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
