import React from 'react';
import styled from 'styled-components';
import { AiFillApple } from "react-icons/ai";

const MenuContainer = styled.div`
    width: 100%;
    height: 20px;
    background-color: #bee0f2;
    padding: 0 20px;
`
const MenuWrap = styled.div`
    display: flex;
    align-items: flex-end;
    width:100%;
    height: 100%;
`

const Logo = styled(AiFillApple)`
    margin-right: 15px;
`

const CurrentPage = styled.span`
    font-size: 1rem;
    font-weight: 800;
    margin-right: 15px;
`

const MenuList = styled.ul`
    display: flex;
    font-size: 0.9rem;
    align-items: center;
    height: 100%;
`
const MenuItem = styled.li`
    padding: 0 8px;
    cursor: pointer;
`
//Ho inner inner macbook
const Header = ({chilren}) => {
    return (
        <MenuContainer>
            <MenuWrap>
                <Logo size="20px"/>
                <CurrentPage>
                    Kim.BoGeun
                    {chilren}
                </CurrentPage>
                <MenuList>
                    <MenuItem>프로필</MenuItem>
                    <MenuItem>프로젝트</MenuItem>
                    <MenuItem>아카이브</MenuItem>
                    <MenuItem>방명록</MenuItem>
                </MenuList>
            </MenuWrap>
        </MenuContainer>
    )
}

export default Header;