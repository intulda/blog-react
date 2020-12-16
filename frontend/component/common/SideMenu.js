import React, {useCallback, useEffect, useState} from 'react';
import styled, {keyframes, css} from 'styled-components';
import Link from "next/link";
import {BsChevronLeft} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {SIDE_ClOSE_ACTION} from "../../reducers/common";

const listAnimation = keyframes`
    0% {
        transform: translateX(0px);
    }
    
    50% {
        transform: translateX(-10px);
    }
    
    100% {
        transform: translateX(0px);
    }
`

const SideMenuContainer = styled.div`
    display: none;
    width: 80%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    background-color: rgb(1, 1, 1, 0.9);
    z-index: 1;
    transition: 0.6s;
    color: white;
    
    @media only screen and (max-width: 768px) {
        & {
            display: block;
        }
    }
    
    ${props => 
        props.active
            ? css`transform: translateX(0);`
            : css`transform: translateX(100%);`
    }
`

const SideMenuWrap = styled.ul`
    font-size: 2rem;
    padding: 150px 20px 0 20px;
    
    & li {
        padding-bottom: 25px;
    }
    
    & li > a {
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    
    & li:hover {
        color: #4ea1d3;
        animation: ${listAnimation} 1s infinite;
    }
`


const SideMenu = () => {

    const {isSideOpen} = useSelector(state => state.common);
    const dispatch = useDispatch();
    const [isDisplay, setIsDisplay] = useState('none');

    const onMoveHandler = useCallback((e) => {
        dispatch(SIDE_ClOSE_ACTION());
    }, []);

    return (
        <>
            <SideMenuContainer active={isSideOpen}>
                <SideMenuWrap>
                    <li>
                        <Link href="./profile">
                            <a onClick={onMoveHandler}>
                                <BsChevronLeft/>
                                Profile
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="./project">
                            <a onClick={onMoveHandler}>
                                <BsChevronLeft/>
                                Project
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a onClick={onMoveHandler}>
                                <BsChevronLeft/>
                                Free
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a onClick={onMoveHandler}>
                                <BsChevronLeft/>
                                Study
                            </a>
                        </Link>
                    </li>
                </SideMenuWrap>
            </SideMenuContainer>
        </>
    )
}

export default SideMenu;