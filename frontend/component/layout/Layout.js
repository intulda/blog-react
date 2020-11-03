import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import styled from 'styled-components';

import sierra from '../../resource/images/sierra.jpg';
import LoginFrom from "../login/LoginForm";
import {useSelector} from "react-redux";

const ImageLayout = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
`
export const BackgroundImage = styled.img`
    width: initial;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
   
    @media only screen and (min-width: 1350px) {
        width: inherit;
        height: 100%;
    }
    
    @media only screen and (max-height: 780px) {
        width: 100%;
        height: 100%; 
    }
`

const Layout = ({children}) => {

    const isOpenLogin = useSelector((state) => state.isLoginFormOpen);

    return (
        <ImageLayout>
            {
                isOpenLogin ? '' : <Header/>
            }
            <BackgroundImage src={sierra}/>
            {
                isOpenLogin ? <LoginFrom/> : children
            }
        </ImageLayout>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
