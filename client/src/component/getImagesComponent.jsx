import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

import ImageComponent from './imageComponent'
import LoadingComponent from './loadingComponent'

function GetImagesComponent ({ isValue, selectCategory  }) {

  const [images, setImages] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [isMouseOn, setIsMouseOn] = useState(false)

  // 받아온 selectCategory(korean)을 통해서
  // axios 요청으로 카테고리를 전송 
  // const categoryFilter = () => {
  //   axios.get(`https://localhost:4000/recipe/:${selectCategory}`)
  //   .then(res => {
  //   })
  // }


  //   &page=${pageNumber}&per_page=10
  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=dllapZyq7HTMkM11dE1uhoBRzwWNupievUHo1BM2Nq8&count=10`
      )
      .then((res) => {
        setImages((photo) => [...photo, ...res.data])
        setPageNumber(pageNumber + 1)
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
          hasMore={true}
          loader={<LoadingComponent />}
        >
          <WrapperImage>
            {images.map((image) => (
              <div
                className="img-wrapper"
                key={image.id}
                onClick={()=>console.log(333)}
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
