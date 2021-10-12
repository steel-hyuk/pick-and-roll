import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'

import ImageComponent from './imageComponent'
import LoadingComponent from './loadingComponent'
import Posts from '../page/posts'

function GetImagesComponent({ isValue, selectCategory }) {
  const [images, setImages] = useState([])
  const [offset, setOffset] = useState(1) // 데이터를 받으면 then에서 offset +1
  const [info, setInfo] = useState([])

  const fetchImages = async () => {
    await axios.get(`/recipes?offset=${offset}&limit=10`).then((res) => {
      setInfo([...info, ...res.body])
      setImages([...images, ...res.body.mainImage])
      setOffset(offset + 1)
    })
  }

  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <div>
      <Wrapper>
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={images.length >= 10}
          loader={<LoadingComponent />}
        >
          <WrapperImage>
            {images.map((image, idx) => (
              <div className="img-wrapper" key={image.id} onClick={() => {}}>
                <ImageComponent url={image.urls.thumb} />
              </div>
            ))}
          </WrapperImage>
        </InfiniteScroll>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 3rem 7rem;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  .img-wrapper {
    object-fit: cover;
    border-radius: 25%;
    cursor: pointer;
  }
`

export default GetImagesComponent
