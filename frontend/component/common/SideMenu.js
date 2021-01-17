import React, { useCallback, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { SIDE_ClOSE_ACTION } from '../../reducers/common';

const SideMenuContainer = styled.div`
    width: 100%;
    min-height: 0vh;
    position: absolute;
    top: 0;
    right: 0;
    text-align: left;
    background-color: #546beb;
    z-index: 11;
    transition: 0.6s;
    color: white;    
    transform-origin: bottom right;
    transform: skew(0deg, 2deg); 
    transition: cubic-bezier(0.61,-0.08, 1, 1) 0.6s;
    
    ${(props) => (props.active
    ? css`
            transition: 0.6s 0.4s;
            transform: translateY(0%) skew(0deg, 0deg);
            min-height: 100vh; 
        `
    : css`
            transform: translateY(-100%) skew(0deg, 2deg);
            min-height: 0vh; 
        `)
}

    &>h1 {
        width: calc(100% - 80px);
        position: absolute;
        top: 70px;
        left: 40px;
        font-size: 4rem;
        font-weight: bold;
        padding: 20px 0;
        border-bottom: 2px solid white;
    }
    
    @media only screen and (max-width: 768px) {
        &>h1 {
            font-size: 2rem;
            border-bottom: 1px solid white;
        }
    }
`;

const Background = styled.div`
    width: 100%;
    min-height: 0vh;
    position: absolute;
    top: 0;
    right: 0;
    text-align: left;
    background-color: white;
    z-index: 10;
    transition: cubic-bezier(0.61,-0.08, 1, 1) 0.6s;
    color: white;      
    
    ${(props) => (props.active
    ? css`
            min-height: 100vh;
            transform: translateY(0%);
        `
    : css`
            transition: 0.6s 0.4s;
            transform: translateY(-100%);
            min-height: 0vh; 
        `)
}
`;

const SideMenuWrap = styled.ul`
    font-size: 3rem;
    padding: 200px 20px;
    
    & li {
        margin: 20px;
        padding-bottom: 20px;
        font-weight: bold;
    }
    
    & li > a {
        display:flex;
        align-items: center;
        justify-content: space-between;
        color: white !important;
    }
    
    & li:hover {
        color: #1B1D21;
    }
    
    @media only screen and (max-width: 768px) {
        & {
            font-size: 2rem;
            padding: 160px 20px;
        }
    }
`;

const SideMenuEtcWrap = styled.ul`
    position: absolute;
    bottom: 0;
    display: flex;
    padding: 20px 40px;
    font-size: 3rem;
    
    &>li {
        margin-right: 10px;
        cursor: pointer;
    }
    
    &>li a {
        color: white !important;
    }
`;

const SideMenu = () => {
  const { isSideOpen } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const onMoveHandler = useCallback(() => {
    dispatch(SIDE_ClOSE_ACTION());
  }, []);

  return (
    <>
      <SideMenuContainer active={isSideOpen}>
        <h1>Menu</h1>
        <SideMenuWrap>
          <li>
            <Link href="/profile">
              <a onClick={onMoveHandler}>
                Profile
              </a>
            </Link>
          </li>
          <li>
            <Link href="/project">
              <a onClick={onMoveHandler}>
                Project
              </a>
            </Link>
          </li>
          <li>
            <Link href="/post">
              <a onClick={onMoveHandler}>
                Blog
              </a>
            </Link>
          </li>
        </SideMenuWrap>
        <SideMenuEtcWrap className="SideMenu__etc-wrap">
          <li>
            <Link href="www.naver.com" target="_blank">
              <a>
                <AiFillGithub />
              </a>
            </Link>
          </li>
        </SideMenuEtcWrap>
      </SideMenuContainer>
      <Background active={isSideOpen} />
    </>
  );
};

export default SideMenu;
