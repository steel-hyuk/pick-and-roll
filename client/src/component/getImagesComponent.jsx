import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import api from '../api'
import ImageComponent from './imageComponent'
import LoadingComponent from './loadingComponent'

function GetImagesComponent({ isValue, selectCategory }) {
  const [offset, setOffset] = useState(1) // 데이터를 받으면 then에서 offset +1
  const [infos, setInfos] = useState([])
  const [division, setDivision] = useState('createdAt')

  const fetchImages = async () => {
    await api
      .get(
        `/recipes?category=${selectCategory}&division=${division}&offset=${offset}&limit=10`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res)
        setInfos([...infos, ...res.data])
        setOffset(offset + 1)
      })
  }
  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <Wrapper >
      <Form>
        <InfiniteScroll
          dataLength={infos.length}
          next={fetchImages}
          hasMore={infos.length >= 10}
          loader={<LoadingComponent />}
        >
          <WrapperImage>
            {infos.map((image, idx) => (
              <div className="img-wrapper" key={idx}>
                <ImageComponent url={image.mainImg} info={image} />
              </div>
            ))}
          </WrapperImage>
        </InfiniteScroll>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position :relative;
z-index: 5;
`

const Form = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 130px;
  position : relative;
  z-index: 0;
`

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 35px auto;
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
