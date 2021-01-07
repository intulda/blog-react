import React from 'react';
import styled from 'styled-components';

const CategoryWrap = styled.aside`
    width: 25%;
    padding: 30px 0;
    float: right;
    
    &>strong {
        color: #2ac1bc;
        font-size: 1.3rem;
    }
    
    &>ul {
        margin: 15px 0;
    }
    
    @media only screen and (max-width: 600px) {
        display: none;   
    }
`

const CategoryList = styled.li`
    font-size: 1rem;
    margin-bottom: 15px;
    cursor: pointer;
`

const Category = () => {

    return (
        <CategoryWrap>
            <strong>Categories</strong>
            <ul>
                <CategoryList>java (1)</CategoryList>
                <CategoryList>react (1)</CategoryList>
                <CategoryList>db (0)</CategoryList>
            </ul>
        </CategoryWrap>
    )
}

export default Category;