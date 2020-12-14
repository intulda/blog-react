import React, {useCallback, useState} from 'react';
import styled, {keyframes, css} from 'styled-components';
import {BsChevronLeft, BsJustifyRight} from "react-icons/bs";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import SideMenu from "../common/SideMenu";
import {SIDE_ClOSE_ACTION, SIDE_OPEN_ACTION} from "../../reducers/common";

const BorderAnimation = keyframes`
    0% {
        width: 0%;
    }
    
    100% {
        width: 100%;
    }
`

const HeaderWrap = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 24px;
    background-color: #24272B;
    z-index: 1001;
`

const CenterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const CurrentPageTitle = styled.span`
    font-weight: bold;
`

const MenuButton = styled(BsJustifyRight)`
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    position: relative;
    
    @media only screen and (max-width: 768px) {
        & {
            display: block;
            position: absolute;
            top: 25px;
            right: 20px;
            z-index: 10;
        }
    }
`

const MenuList = styled.ul`
    display: flex;
    font-size: 1.1rem;
    & li {
        padding-left: 20px;
        cursor: pointer;
        color: #717174;
    }
    
    & li:hover {
        color: #B6B7B8;
    }
    
    & li>a {
        position: relative;
    }
    
    @media only screen and (max-width: 768px) {
        & {
            display: none;
        }
    }
`

const Header = () => {
    const {currentPageTitle, isPrevAction, isSideOpen} = useSelector((state) => state.common);
    const dispatch = useDispatch();
    const onMenuHandler = useCallback(() => {
        if(!isSideOpen) {
            dispatch(SIDE_OPEN_ACTION());
            return;
        }
        dispatch(SIDE_ClOSE_ACTION());
    }, [isSideOpen]);

    return (
        <HeaderWrap>
            <CenterDiv>
                <CurrentPageTitle>
                    {
                        isPrevAction
                        && <Link href="/">
                            <a style={{marginRight: `5px`}}><BsChevronLeft/></a>
                        </Link>
                    }
                    <Link href="/">
                        <a>
                            {currentPageTitle}
                        </a>
                    </Link>
                </CurrentPageTitle>
                    <MenuButton onClick={onMenuHandler}/>
                    <SideMenu/>
                    <MenuList>
                        <li>
                            <Link href="./profile">
                                <a>
                                    Profile
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="./project">
                                <a>
                                    Project
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Free
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Study
                                </a>
                            </Link>
                        </li>
                    </MenuList>
            </CenterDiv>
        </HeaderWrap>
    )
}

export default Header;