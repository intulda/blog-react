import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
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

const ProfileContainer = styled.div`
    max-width: 40px;
    max-height: 40px;
    display: flex; 
    alignItems: center; 
    position: relative;
    color: white !important;
    cursor: pointer;
`;

const DropdownMenuWrap = styled.ul`
    display: none;
    width: 100px;
    height: auto;
    position: absolute;
    right: 0px;
    top: 45px;
    background-color: #2c2f33;
    border: 1px solid #99aab529;
    color: white;
    padding: 10px;
    border-radius: 5px;
    
    &.active {
        display: flex;
        align-items: center;
        flex-direction: column;
        
        &.active>li {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 10px;
            font-weight: bold;
            font-size: 0.9rem;
            position: relative;
        }
        &.active>li:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        &.active>li:hover {
            color: #546beb;
        }
        
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
      console.log(refWrapper.current, target);
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
                <ProfileContainer>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img src={null} onError={onErrorHandler} />
                  <ProfileWrap onClick={onDropDownHandler} ref={refWrapper}>
                    {user.nickname[0]}
                    <DropdownMenuWrap className={isDropdownMenuOpen && 'active'}>
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                      <li onClick={onLogoutHandler}>
                        <div>
                          <FiLogOut />
                        </div>
                        <div>
                          로그아웃
                        </div>
                      </li>
                    </DropdownMenuWrap>
                  </ProfileWrap>
                </ProfileContainer>
              )
              : (
                <ProfileContainer>
                  <ProfileWrap onClick={onDropDownHandler} ref={refWrapper}>
                    Gu
                    <DropdownMenuWrap className={isDropdownMenuOpen && 'active'}>
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                      <li onClick={onLoginHandler}>
                        <div>
                          <FiLogIn />
                        </div>
                        <div>
                          로그인
                        </div>
                      </li>
                    </DropdownMenuWrap>
                  </ProfileWrap>
                </ProfileContainer>
              )
            }
    </>
  );
};

export default DropdownProfile;
