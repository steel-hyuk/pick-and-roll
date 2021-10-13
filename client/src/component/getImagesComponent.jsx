import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api'
import ImageComponent from './imageComponent'
import Category from '../component/category/category'

function GetImagesComponent() {
  const [offset, setOffset] = useState(1) // 데이터를 받으면 then에서 offset +1
  const [infos, setInfos] = useState([])
  const [division, setDivision] = useState('createdAt')
  const [category, setCategory] = useState('all')
  const [moreViewMessage, setMoreViewMessage] = useState('더보기')

  const handleChangeCategory = (category) => {
    setCategory(category)
  }
  const handleChangeDivision = (division) => {
    if (division === '최신') setDivision('createdAt')
    else if (division === '맛') setDivision('taste')
    else if (division === '간편성') setDivision('easy')
  }
  const handleChangeOffset = async () => {
    let offsetNum = offset + 1
    setOffset(offsetNum)
  }

  const paginationImages = async () => {
    await api
    .get(
      `/recipes?category=${category}&division=${division}&offset=${offset}&limit=4`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    )
    .then((res) => {
      if(res.data.length !== 0) {
        if(res.data.length < 4) {
          setMoreViewMessage('더 이상 레시피가 없어요!')
          setInfos([...infos, ...res.data])            
        } else { 
          setInfos([...infos, ...res.data])
        }
      } else if (res.data.length === 0) {
        setMoreViewMessage('더 이상 레시피가 없어요!')        
      }
    })
  }

  const fetchImages = async () => {
    await api
      .get(
        `/recipes?category=${category}&division=${division}&offset=${offset}&limit=4`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if(res.data.length < 4) {
          setMoreViewMessage('더 이상 레시피가 없어요!')
        }
        setInfos([...res.data])
      })
  }

  useEffect(() => {
    paginationImages()
  }, [offset])

  useEffect(() => {
    setMoreViewMessage('더보기')
    setInfos([])
    fetchImages()
    setOffset(1)
  }, [category, division])

  return (
    <div>
      <Category handleChangeCategory={handleChangeCategory} handleChangeDivision={handleChangeDivision}/>   
      <Wrapper>
          <WrapperImage>
            {infos.map((image, idx) => (
              <div className="img-wrapper" key={idx}>
                <ImageComponent url={image.mainImg} info={image} />
              </div>
            ))}
          </WrapperImage>
          <Pagination onClick={handleChangeOffset}>{moreViewMessage}</Pagination> 
      </Wrapper>
    </div>
  )
}

const Pagination = styled.div`
`


const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 130px;
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
