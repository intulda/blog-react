import React, {useCallback} from 'react';
import styled, {keyframes} from 'styled-components';
import {BsChevronLeft, BsToggleOff, BsToggleOn} from "react-icons/bs";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";

const HeaderWrap = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CenterDiv = styled.div`
    display: flex;
    align-items: center;
`

const CurrentPageTitle = styled.span`
    font-weight: bold;
`

const Header = () => {
    const {currentPageTitle, isPrevAction} = useSelector((state) => state.common);

    return (
        <HeaderWrap>
            <CenterDiv>
                {
                    isPrevAction
                    && <Link href="/">
                        <a style={{marginRight: `5px`}}><BsChevronLeft/></a>
                    </Link>
                }
                <CurrentPageTitle>{currentPageTitle}</CurrentPageTitle>
            </CenterDiv>
        </HeaderWrap>
    )
}

export default Header;