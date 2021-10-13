import React, { useState } from 'react'
import styled from 'styled-components'
import Category from '../component/category/category'
import GetImgComponent from '../component/getImagesComponent'

const Recipe = () => {
  const [selectCategory, setSelectCateogry] = useState('all')
  const [selected, setSelected] = useState('최신')

  return (
    <Wrap>
      <Category
        selected={selected}
        setSelected={setSelected}
        setSelectCateogry={setSelectCateogry}
      />
      <GetImgComponent selectCategory={selectCategory} />
    </Wrap>
  )
}

const Wrap = styled.div`
position : static;
`
export default Recipe
