import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Search from "./Search";
import styled, {keyframes} from 'styled-components';
import {useSelector} from "react-redux";
import Footer from "./Footer";
import Modal from "../common/Modal";

const materialAnimation = (active) => keyframes`
    0% {
        width: 25px;
        height: 25px;
        top: 10px;
        right: 20px;
        transform: scale(0);
        border-radius: 100%;
    }
    
    100% {
        background-color: ${active ? `rgba(30, 30, 30, 1)` : `rgba(243, 238, 239, 1)`};
        transform: scale(100);
    }
`

const LayoutWrap = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    transition: 0.8s ease-in-out;
    color: ${(prop) => prop.active ? `white` : `black`};
    position: relative;
`

const BackgroundWrap = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    border-radius: 0;
    z-index: -1;
    background-color: ${props => props.active ? `rgba(30, 30, 30, 1)` : `rgba(243, 238, 239, 1)`};
    animation: ${props => materialAnimation(props.active)} 2s ease-in-out forwards; 
`

const Layout = ({children}) => {

    const {backgroundSwitch, modal} = useSelector((state) => state.common);

    return (
        <>
            {
                modal.isOpen && <Modal type="createFolder"/>
            }
            <LayoutWrap active={backgroundSwitch}>
                <BackgroundWrap active={backgroundSwitch}/>
                <Header/>
                <Search/>
                {children}
                <Footer/>
            </LayoutWrap>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
