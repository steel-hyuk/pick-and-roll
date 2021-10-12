import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

import ImageComponent from './imageComponent'
import LoadingComponent from './loadingComponent'
import axios from 'axios'

function GetImagesComponent({ isValue, selectCategory }) {
  const [images, setImages] = useState([])
  const [offset, setOffset] = useState(1) // 데이터를 받으면 then에서 offset +1

  // const fetchImages = async () => {
  //   await axios.get(`/recipes?searchName=${isValue}&offset=${offset}&limit=10`)
  //   .then(res=>{
  //     setImages([...images, res.data.url])
  //     setOffset(offset+1)
  //   })

  // }

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=dllapZyq7HTMkM11dE1uhoBRzwWNupievUHo1BM2Nq8&count=10`
      )
      .then((res) => {
        setImages((photo) => [...photo, ...res.data])
        setOffset(offset + 1)
      })
  }

  useEffect(() => {
    fetchImages()
  }, [])
  useEffect(() => {
    //fetchImages()
  }, [])

  return (
    <div>
      <Wrapper>
        <InfiniteScroll
          dataLength={images.length}
          next=""
          hasMore={images.length >= 10}
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
