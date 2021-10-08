import React, { useState } from 'react'
import Category from '../component/category/category'
import GetImgComponent from '../component/getImagesComponent'

const Recipe = () => {
  const [selectCategory, setSelectCateogry] = useState('')

  return (
    <>
      <Category setSelectCateogry={setSelectCateogry} />
      <GetImgComponent />
    </>
  )
}

export default Recipe
