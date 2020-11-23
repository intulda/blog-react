import React from 'react';
import styled from 'styled-components';
import {BsFolderPlus, BsPencilSquare} from "react-icons/bs";

const FooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 0px -1px #ddd;
    font-size: 1.3rem;
    color: orange;
    &>div {
        cursor: pointer;
    }
`

const Footer = () => {
    return (
        <FooterWrap>
            <div>
                <BsFolderPlus/>
            </div>
            <div>
                <BsPencilSquare/>
            </div>
        </FooterWrap>
    )
}

export default Footer;