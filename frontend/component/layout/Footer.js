import React, {useCallback} from 'react';
import styled from 'styled-components';
import {BsFolderPlus, BsPencilSquare} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {FOLDER_ADD_MODAL_CLOSE_ACTION, FOLDER_ADD_MODAL_OPEN_ACTION} from "../../reducers/common";

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

    const {modal} = useSelector(state => state.common);
    const dispatch = useDispatch();

    const onClickFolderAdd = useCallback((e) => {
        if(modal.isOpen) {
            dispatch(FOLDER_ADD_MODAL_CLOSE_ACTION());
        } else {
            dispatch(FOLDER_ADD_MODAL_OPEN_ACTION());
        }
    },[modal]);

    return (
        <FooterWrap>
            <div onClick={onClickFolderAdd}>
                <BsFolderPlus/>
            </div>
            <div>
                <BsPencilSquare/>
            </div>
        </FooterWrap>
    )
}

export default Footer;