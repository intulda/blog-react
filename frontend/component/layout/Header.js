import React, { useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../common/SideMenu';
import { SIDE_ClOSE_ACTION, SIDE_OPEN_ACTION } from '../../reducers/common';
import DropdownProfile from './DropdownProfile';

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
    color: #F2F3F6;
    z-index: 1001;
`;

const CenterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const CurrentPageTitle = styled.span`
    font-weight: bold;
    &>a {
        color: white !important;
    }
`;

const HamburgerMenuWrap = styled.div`
    width: 30px;
    height: 20px;
    position: absolute;
    top: 20px;
    left: 50%;
    z-index: 12;
    cursor: pointer;
      
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: white;
        transition: transform 0.3s ease-out;
    }
    
    & .hamburger__middle {
        position: absolute;
        top: 8px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: white;
        transition: all 0.3s ease-out;
    }
    
    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: white;
        transition: transform 0.3s ease-out;
    }
    
    &.hamburger__close {
        &:before {
          transform: rotate(45deg) translateY(0px);
          top: 8px;
          width: 30px;
          background: #fff;
        }
    
        &.hamburger__close .hamburger__middle {
          opacity: 0;
          transform: scaleX(0);
          background: #fff;
        }
    
        &:after {
          transform: rotate(-45deg) translateY(1px);
          bottom: 8px;
          background: #fff;
          width: 30px;
        }
    }
`;

const Header = () => {
  const { currentPageTitle, isSideOpen } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const onMenuOpenHandler = useCallback(() => {
    if (!isSideOpen) {
      dispatch(SIDE_OPEN_ACTION());
      return;
    }
    dispatch(SIDE_ClOSE_ACTION());
  }, [isSideOpen]);

  return (
    <HeaderWrap>
      <CenterDiv>
        <CurrentPageTitle>
          <Link href="/">
            <a>
              {currentPageTitle}
            </a>
          </Link>
        </CurrentPageTitle>
        <div>
          <HamburgerMenuWrap onClick={onMenuOpenHandler} className={isSideOpen && 'hamburger__close'}>
            <div className="hamburger__middle" />
          </HamburgerMenuWrap>
          <SideMenu />
        </div>
        <div>
          <DropdownProfile />
        </div>
      </CenterDiv>
    </HeaderWrap>
  );
};

export default Header;
