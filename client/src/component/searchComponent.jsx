import React, { useContext } from 'react'
import styled from 'styled-components'
import { SearchValueContext } from '../context/searchValueContext'
import GetImagesComponent from './getImagesComponent'

const SearchComponent = () => {
  const { isValue, setIsValue } = useContext(SearchValueContext)

  return (
    <>
      <Wrapper>
        <h3>{isValue}에 대한 검색 결과</h3> <br />
        <h4 onClick={() => console.log(isValue)}>{}개의 결과가 있습니다.</h4>
      </Wrapper>
      <GetImagesComponent isValue={isValue}></GetImagesComponent>
    </>
  )
}

const Wrapper = styled.div`
  width: 50%;
  margin-left: 50px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-auto-rows: 10px;
`

export default SearchComponent
