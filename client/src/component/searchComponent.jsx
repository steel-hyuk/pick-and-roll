import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { SearchValueContext } from '../context/searchValueContext'
import ImageComponent from './imageComponent'
import api from '../api'

const SearchComponent = () => {
  const { isValue, setIsValue } = useContext(SearchValueContext)
  const [infos, setInfos] = useState([])
  const [offset, setOffset] = useState(1)
  const [moreViewMessage, setMoreViewMessage] = useState('더보기')

  const handleChangeOffset = async () => {
    let offsetNum = offset + 1
    setOffset(offsetNum)
  }

  const paginationImages = async () => {
    await api
    .get(
      `/recipes??searchName=${isValue}&offset=${offset}&limit=4`,
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
      .get(`/recipes?searchName=${isValue}&offset=${offset}&limit=4`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((res) => {
        setInfos([...res.data])
      })
  }

  useEffect(() => {
    paginationImages()
  }, [offset])

  useEffect(() => {
    fetchImages()
  }, [isValue])

  return (
    <>
      <Header>
        <h3>
          {isValue} &nbsp;&nbsp;검색 결과 &nbsp;&nbsp;&nbsp; {infos.length} 개
        </h3>
      </Header>
      <Wrapper>        
          <WrapperImage>
            {infos.map((image) => (
              <div className="img-wrapper" key={image.id}>
                <ImageComponent url={image.mainImg} info={image} />
              </div>
            ))}
          </WrapperImage>
          <Pagination onClick={handleChangeOffset}>{moreViewMessage}</Pagination>      
      </Wrapper>
    </>
  )
}

const Pagination = styled.div`
`

const Header = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
`

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

export default SearchComponent
