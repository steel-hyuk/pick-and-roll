import React, { useState } from 'react'
import styled from 'styled-components'
import GetImgComponent from '../component/getImagesComponent'

const Recipe = () => {
  return (
    <Wrap>
      <GetImgComponent />
    </Wrap>
  )
}

const Wrap = styled.div`
position : static;
`
export default Recipe
