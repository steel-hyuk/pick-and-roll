import React from 'react'
import styled from 'styled-components'

const ImageComponent = ({ url }) => {
  return (
    <>
    <Background className='back'>hi</Background>
      <BackImg
        style={{ backgroundImage: `url(${url})` }}
      ></BackImg>
    </>
  )
}

const BackImg = styled.div`
  width: 268px;
    height: 301px;
  border-radius: 15%;
  object-fit: cover;
  background-size: 100% 100%;
  transition: all 0.6s linear;
  background-repeat: no-repeat;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled.div`
  position:absolute;
    
    width: 268px;
    height: 301px;
    background: #aeb4b696;
    border-radius: 15%;
    text-align: center;
    opacity: 0;
    transition: all 0.3s linear;

    :hover {
      opacity: 1;
    }
`
export default ImageComponent

