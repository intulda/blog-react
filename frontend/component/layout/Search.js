import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const SearchWrap = styled.div`
    width: 100%;
    padding: 10px 0;
`;

const InputGroup = styled.div`
    position: relative;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 35px;
    border: 0;
    border-radius: 5px;
    background-color: white;
    &:focus {
        outline: none;
    }
`;

const SearchInputLabel = styled.label`
    position: absolute;
    left: 10px;
    top: calc(50% - 8px);
    color: #aaa;
`;

const Search = () => {
  const { backgroundSwitch } = useSelector((state) => state.common);

  return (
    <SearchWrap>
      <InputGroup>
        <SearchInput active={backgroundSwitch} id="searchInput" placeholder="검색" />
        <SearchInputLabel aactive={backgroundSwitch} htmlFor="searchInput">
          <BsSearch />
        </SearchInputLabel>
      </InputGroup>
    </SearchWrap>
  );
};

export default Search;
