import React from 'react';
import styled from 'styled-components';

const CheckboxWrap = styled.div`
  padding: 0 !important;
  width: 15px;
  height: 15px;
  margin-right: 5px;

  & .round {
    position: relative;
  }
  & .round label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 15px;
    left: 0;
    position: absolute;
    top: 0;
    width: 15px;
  }
  
  & .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 4px;
    left: 2px;
    opacity: 0;
    position: absolute;
    top: 2px;
    transform: rotate(-45deg);
    width: 8px;
  }
  
  & .round input[type="checkbox"] {
    height: auto !important;
    visibility: hidden;
  }
  & .round input[type="checkbox"]:checked + label {
    background-color: orange;
    border-color: orange;
  }
  & .round input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`;

const CustomCheckbox = ({ changeEvent, term }) => (
  <CheckboxWrap className="container">
    <div className="round">
      <input type="checkbox" id="checkbox" onChange={changeEvent} value={term} required />
      <label htmlFor="checkbox" />
    </div>
  </CheckboxWrap>
);

export default CustomCheckbox;
