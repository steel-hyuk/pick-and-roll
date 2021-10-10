import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SearchValueContext } from '../context/searchValueContext'
import ImageComponent from './imageComponent'
import LoadingComponent from './loadingComponent'

const SearchComponent = () => {
  const { isValue, setIsValue } = useContext(SearchValueContext)
  const [datas, setDatas] = useState([])
  // { // 객체나 배열로 들어가야 할 것 같다.
  //   id: '',
  //   url: '',
  //  ...
  // }
  const [offset, setOffset] = useState(1)

  const fetchImages = async () => {
    // await axios.get(`/recipes?searchName=${isValue}&offset=${offset}&limit=10`)
    // .then(res=>{
    //   setDatas([...setDatas, res.data])
    //   setOffset(offset+1)
    // })
  }

  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <>
      <Header>
        <h3>
          {isValue} &nbsp;&nbsp;검색 결과 &nbsp;&nbsp;&nbsp; {datas.length} 개
        </h3>
      </Header>
      <Wrapper>
        <InfiniteScroll
          dataLength={datas.length}
          next="fetchImages" //{} 로 들어가야함
          hasMore={datas.length >= 10}
          loader={<LoadingComponent />}
        >
          <WrapperImage>
            {datas.map((image) => (
              <div
                className="img-wrapper"
                key={image.id}
                onClick={() => console.log(333)}
              >
                <ImageComponent datas={datas} />
              </div>
            ))}
          </WrapperImage>
        </InfiniteScroll>
      </Wrapper>
    </>
  )
}

const Header = styled.div`
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
