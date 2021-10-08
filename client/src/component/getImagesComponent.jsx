import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

import ImageComponent from './imageComponent'
import LoadingComponent from './loadingComponent'

function GetImagesComponent({ isValue, selectCategory }) {
  const [images, setImages] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    // fetchImages()
  }, [])

  return (
    <div>
      <Wrapper>
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<LoadingComponent />}
        >
          <WrapperImage>
            {images.map((image) => (
              <div
                className="img-wrapper"
                key={image.id}
                onClick={() => console.log(333)}
              >
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
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;

  .img-wrapper {
    object-fit: cover;
    border-radius: 25%;
    cursor: pointer;
  }
`

export default GetImagesComponent
