import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import styled from 'styled-components';

// import sierra from '../../resource/images/sierra.jpg';
import catalina from '../../resource/images/Dark-Mode-macOS-catalina-quality.jpg';
import LoginFrom from "../login/LoginForm";
import {useSelector} from "react-redux";

const ImageLayout = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
`
export const BackgroundImage = styled.img`
    width: 100%;
    height: initial;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    
    @media (min-height: 280px) {
        width: 100%;
        height: initial;
    }
    
    @media (min-width: 280px) {
        width: initial;
        height: 100%;
    }
      
    @media (min-width: 576px) {
        width: initial;
        height: 100%;
    }
    
    @media (width: 653px and height: 280px) {
        width: 100%;
        height: initial;
    }

    @media only screen and (min-width: 768px) {
        width: 100%;
        height: 100%; 
    }
    
    @media only screen and (min-width: 992px) {
        width: 100%;
        height: initial;
    }
    
    @media only screen and (min-width: 1200px) {
        width: 100%;
        height: initial;
    }
    
    
`

const Layout = ({children}) => {

    const {isLoggedIn} = useSelector((state) => state.user);
    console.log(isLoggedIn);

    return (
        <ImageLayout>
            {
                isLoggedIn ? '' : <Header/>
            }
            <BackgroundImage src={catalina}/>
            {
                isLoggedIn ? <LoginFrom/> : children
            }
        </ImageLayout>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
