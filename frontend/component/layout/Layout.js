import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import styled from 'styled-components';

import sierra from '../../resource/images/sierra.jpg';

const ImageLayout = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`

const BackgroundImage = styled.img`
    src: url(${sierra});
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
`


const Layout = ({children}) => {
    return (
        <ImageLayout>
            <Header/>
            <BackgroundImage src={sierra}/>
            {children}
        </ImageLayout>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
