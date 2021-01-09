import React, {useCallback, useState} from 'react';
import marked from 'marked';
import styled from "styled-components";
import {BsTypeBold, BsTypeItalic, BsImage} from 'react-icons/bs';

const EditorContentWrap = styled.div`
    display: flex;
    width: 100%;
    
    &>div:first-child {
        position: relative;
        width: 100%;
        height: 500px;
        border-radius: 0 0 5px 5px;
        border: 1px solid #bbc0c4;
        overflow: hidden;
    }
    
    &>div:first-child textarea {
        width: 50%;
        height: 100%;
        border: 0;
        padding: 10px;
        resize: none;
        outline: none;
    }
  
    &>div:first-child>div {
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        color: black;
        border-left: 2px solid #bbc0c4;
        background-color: white;
        padding: 10px;
        word-break: break-all;
    }
    
    &>div pre {
        background-color: #ddd;
        border-radius: 2px;
        padding: 2px;
    }
    &>div ol, ul {
        padding-left: 40px;
        list-style: revert;
    }
`

const EditorHeaderWrap = styled.div`
    width: 100%;
    height: 44px;
    border: 1px solid #bbc0c4;
    border-radius: 5px 5px 0 0;
    background-color: transparent;
    padding: 0 10px;
    
    &>ul {
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0;
        font-size: 20px;
    }
    
    &>ul li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        margin: 0 5px;
    }
    
    &>ul svg {
        fill: #F2F3F6;
        cursor: pointer;
    }
    &>ul svg:hover {
        fill: orange;
    }
`

const MarkdownEditor = (props) => {

    const [text, setText] = useState('');
    const [html, setHtml] = useState('');
    const [selectionLocate, setSelectionLoate] = useState(null);
    const [selection, setSelection] = useState('');
    const [target, setTarget] = useState(null);

    const onChangeTextHandler = useCallback((e) => {
        setText(e.target.value);
        setHtml(marked(e.target.value, { sanitize: true}));
        setTarget(e.target);
        setSelectionLoate(e.target.selectionStart);
    }, []);

    const onSelectionSaveHandler = useCallback((e) => {
        setTarget(e.target);
        setSelectionLoate(e.target.selectionStart);
    }, []);

    const onSelectionDrag = useCallback((e) => {
        // setSelection(window.getSelection().toString());
    }, []);

    const onMarkdownSnippetHandler = useCallback((e) => {
        const currentSnippet = e.currentTarget.id;
        let addText = '';
        switch (currentSnippet) {
            case 'bold':
                if(selection === '') {
                    addText = "**strongText**";
                } else {
                    addText = selection.indexOf('**') > -1 ? `${selection}` : `**${selection}**`;
                    setSelection('');
                }
                const startText = text.substring(0, selectionLocate);
                const endText = text.substring(selectionLocate);
                const sumText = `${startText} ${addText} ${endText}`;
                setText(sumText);
                setHtml(marked(sumText, { sanitize: true}));
                break;
            case 'italic':
                break;
            case 'image':
                break;
            default:
                break;
        }
    }, [selection, selectionLocate, target, text]);

    const getText = useCallback((e) => {
        return text;
    }, [text]);

    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            <div>
                <EditorHeaderWrap>
                    <ul>
                        <li id="bold" onClick={onMarkdownSnippetHandler}>
                            <BsTypeBold/>
                        </li>
                        <li id="italic">
                            <BsTypeItalic/>
                        </li>
                        <li></li>
                        <li id="image">
                            {/*<input type="file"/>*/}
                            <BsImage/>
                        </li>
                    </ul>
                </EditorHeaderWrap>
                <EditorContentWrap>
                    <div>
                        <textarea onChange={onChangeTextHandler} onClick={onSelectionSaveHandler} onSelect={onSelectionDrag} value={text}/>
                        <div id={props.id} dangerouslySetInnerHTML={{__html: html}}/>
                    </div>
                </EditorContentWrap>
            </div>
        </>
    )
}

export default MarkdownEditor;