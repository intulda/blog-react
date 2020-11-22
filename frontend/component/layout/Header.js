import React, {useCallback} from 'react';
import styled, {keyframes} from 'styled-components';
import {BsChevronLeft, BsToggleOff, BsToggleOn} from "react-icons/bs";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {BACKGROUND_SWITCH_ON_ACTION, BACKGROUND_SWITCH_OFF_ACTION} from '../../reducers/common';

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

const Header = () => {
    const {backgroundSwitch} = useSelector((state) => state.common);
    const dispatch = useDispatch();

    const onClickSwitchHandler = useCallback((e) => {
        e.preventDefault();
        if(!backgroundSwitch) {
            dispatch(BACKGROUND_SWITCH_ON_ACTION());
            return false;
        }
        dispatch(BACKGROUND_SWITCH_OFF_ACTION());
    }, [backgroundSwitch]);

    return (
        <HeaderWrap>
            <CenterDiv>
                <Link href="/">
                    <a style={{marginRight: `5px`}}><BsChevronLeft/></a>
                </Link>
                <span>Kim.BoGeun</span>
            </CenterDiv>
            <div onClick={onClickSwitchHandler} style={{ cursor: `pointer`}}>
                {
                    backgroundSwitch
                        ? <BsToggleOn size="25"/>
                        : <BsToggleOff size="25"/>
                }
            </div>
        </HeaderWrap>
    )
}

export default Header;