import React, {useCallback, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled, {keyframes} from 'styled-components';
import {FOLDER_ADD_MODAL_CLOSE_ACTION} from "../../reducers/common";

const ModalOpenAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    
    100% {
        transform: translateY(0);
        opacity: 1;
    }

`

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    
    
    &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        background-color: black;
        opacity: 0.5;
        z-index: 5;    
    }
`

const ModalWrap = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    z-index: 10;
    animation: ${ModalOpenAnimation} 0.5s;
`

const ModalTop = styled.div`
    width: 100%;
    padding: 20px 20px 10px 20px;
    text-align: center;
`

const ModalContent = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    border-bottom: 1px solid #ccc;
    
    &>div:nth-child(1) {
        width: 100%;
        padding: 0 15px;
    }
    
    &>div:nth-child(1) span {
        width: 100%;
        margin-bottom: 15px;
        word-break: break-word;
        font-size: 0.8rem;
    }
    
    &>div:nth-child(1) div {
        padding: 15px 0;
    }
    
    &>div:nth-child(1) input {
        width: 100%;
        border: 1px solid #ddd;
        height: 25px;
        border-radius: 8px;
        outline: none;
        padding: 0 10px;
    }
`

const ModalBottom = styled.div`
    display: flex;
    width: 100%;
    background-color: #eee;
    border-radius: 0 0 10px 10px;
`

const ChoiceButton = styled.button`
    width: 100%;
    height: 40px;
    border: 0;
    color: orange;
    font-size: 0.9rem;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    border-radius: inherit;
`

const ConfirmLeft = styled(ChoiceButton)`
    border-radius: 0 0 0px 10px;
    border-right: 1px solid #ccc;
`
const ConfirmRight = styled(ChoiceButton)`
    border-radius: 0 0 10px 0px;
`
const AlertButton = styled(ChoiceButton)`
    border-radius: 0 0 10px 10px;
`

const Modal = () => {

    const {modal} = useSelector(state => state.common);
    const dispatch = useDispatch();

    const inputElement= useRef(null);

    const onClickModalCloseHandler = useCallback(() => {
        dispatch(FOLDER_ADD_MODAL_CLOSE_ACTION());
    }, [])

    useEffect(() => {
        inputElement.current.focus();
    }, [])

    return (
        <>
            <ModalContainer>
                <ModalWrap>
                    <ModalTop>
                        <div>{modal.data[0].title}</div>
                    </ModalTop>
                    <ModalContent>
                        <div>
                            <span>{modal.data[0].content}</span>
                            <div>
                                <input type="text" ref={inputElement}/>
                            </div>
                        </div>
                    </ModalContent>
                    <ModalBottom>
                        {
                            modal.isConfirm
                            ?   <>
                                    <ConfirmLeft onClick={onClickModalCloseHandler}>{modal.data[0].cancelName}</ConfirmLeft>
                                    <ConfirmRight>{modal.data[0].buttonName}</ConfirmRight>
                                </>
                            :   <AlertButton>{modal.data[0].buttonName}</AlertButton>
                        }

                    </ModalBottom>
                </ModalWrap>
            </ModalContainer>
        </>
    )
}

export default Modal;