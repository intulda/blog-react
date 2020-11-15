import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import macFolder from '../../resource/images/folder.png';

const MacFolder = styled.img`
    width: 100%;
    padding: 5px;
`;

const FolderName = styled.span`
    width: 100%;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 3px #00000085;
    font-size: 0.8em;
    padding: 2px 4px;
`

const FolderLayout = styled.div`
    width: 100%;
    text-align: center;
    cursor: pointer;
    position: relative;
    margin: 5px;
    max-width: 104px;
    z-index: 1;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
   
    &:focus-within {
        outline: none;
    }
    &:focus-within ${MacFolder} {
        content: '';
        border: 2px solid #aaa;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: rgba( 0, 0, 0, 0.5 );
    }
    &:focus-within ${FolderName} {
        text-shadow: 0 0 0 #00000085;
        background-color: rgba(0, 88, 207, 0.8);
        border-radius: 5px;
    }
`


const Folder = (props) => {
    return (
        <FolderLayout tabIndex="-1" draggable={props.draggable}
                      onClick={props.onClickDivHandler}
                      onDoubleClick={props.onClickOpenHandler}
                      onDragStart={props.onDragStart}
                      onDragOver={props.onDragOver}
                      onDragEnd={props.onDragEnd}
                      style={{gridColumn: props.col, gridRow: props.row}}
                      name={props.name}
        >
            <MacFolder src={macFolder}/>
            <FolderName>{props.name}</FolderName>
        </FolderLayout>
    )

}

export default Folder;