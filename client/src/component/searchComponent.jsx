import React, { useContext } from 'react'

import { SearchValueContext } from '../context/searchValueContext'

const SearchComponent = () => {
  const { isValue, setIsValue } = useContext(SearchValueContext)

  return (
    <>
      <div>
        <h3>{isValue}에 대한 검색 결과</h3> <br />
        <h4>{}개의 결과가 있습니다.</h4>
      </div>
    </>
  )
}

export default SearchComponent
