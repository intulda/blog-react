import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { LOGIN_FORM_OPEN_ACTION, LOGOUT_REQUEST_ACTION } from '../../reducers/login';
import { DROPDOWN_MENU_OFF_ACTION, DROPDOWN_MENU_ON_ACTION } from '../../reducers/common';

const ProfileWrap = styled.div`
    min-width: 40px;
    height: 40px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;
    border-radius: 12px;
    font-weight: bold;
    font-size: 1rem;
    padding: 5px;
`;

const ProfileContainer = styled.a`
    max-width: 40px;
    max-height: 40px;
    display: flex; 
    alignItems: center; 
    position: relative;
    color: white !important;
`;

const DropdownMenuWrap = styled.ul`
    display: none;
    width: 100px;
    height: auto;
    position: absolute;
    left: -50px;
    top: 55px;
    background-color: white;
    color: #1B1D21;
    padding: 10px;
    border-radius: 10px;
    
    &.active {
        display: flex;
        align-items: center;
        flex-direction: column;
        
        &.active>li {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            font-weight: bold;
            font-size: 0.9rem;
        }
        
        &.active>li:hover {
            color: orange;
        }
        
    }
    
    &.active:before {
        content: '';
        position: absolute;
        top: -5px;
        right: 25px;
        width: 10px;
        height: 10px;
        background: white;
        transform: rotate(45deg);
    }
`;

const DropdownProfile = () => {
  const { isDropdownMenuOpen } = useSelector((state) => state.common);
  const { isLoggedIn, isLoginModalOpen, user } = useSelector((state) => state.login);
  const refWrapper = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(e) {
      let { target } = e;
      if (target.nodeName === 'LI') {
        target = e.target.parentNode.parentNode;
      }
      // eslint-disable-next-line eqeqeq
      if (isDropdownMenuOpen && refWrapper.current != target) {
        dispatch(DROPDOWN_MENU_OFF_ACTION());
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownMenuOpen]);

  const onErrorHandler = useCallback(() => {

  }, []);

  const onLoginHandler = useCallback(() => {
    if (!isLoginModalOpen) {
      dispatch(LOGIN_FORM_OPEN_ACTION());
    }
  }, [isLoginModalOpen]);

  const onLogoutHandler = useCallback(() => {
    dispatch(LOGOUT_REQUEST_ACTION());
  }, []);

  const onDropDownHandler = useCallback(() => {
    if (!isDropdownMenuOpen) {
      dispatch(DROPDOWN_MENU_ON_ACTION());
      return;
    }
    dispatch(DROPDOWN_MENU_OFF_ACTION());
  }, [isDropdownMenuOpen]);

  return (
    <>
      {
            isLoggedIn
              ? (
                <ProfileContainer href="#!">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img src={null} onError={onErrorHandler} />
                  <ProfileWrap onClick={onDropDownHandler} ref={refWrapper}>
                    {user.nickname[0]}
                    <DropdownMenuWrap className={isDropdownMenuOpen && 'active'}>
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                      <li onClick={onLogoutHandler}>로그아웃</li>
                    </DropdownMenuWrap>
                  </ProfileWrap>
                </ProfileContainer>
              )
              : (
                <ProfileContainer href="#!">
                  <ProfileWrap onClick={onDropDownHandler} ref={refWrapper}>
                    Gu
                    <DropdownMenuWrap className={isDropdownMenuOpen && 'active'}>
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                      <li onClick={onLoginHandler}>로그인</li>
                    </DropdownMenuWrap>
                  </ProfileWrap>
                </ProfileContainer>
              )
            }
    </>
  );
};

export default DropdownProfile;
