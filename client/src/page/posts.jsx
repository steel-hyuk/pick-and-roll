import React from 'react'
import styled from 'styled-components'
import DropdownStar from '../component/posts/dropdownPosts'
import { FaRegBookmark, FaCog, FaRegTrashAlt } from 'react-icons/fa'
import CommentComponent from '../component/comment/commentComponent'
const Posts = () => {
  return (
    <Wrapper>
      <Form>
        <TitleArea>
        <Favorite>
            <FaRegBookmark />
        </Favorite>
          <Title>제목입니다</Title>
          <TextWrap>
          <Category>총 소요 시간 : 3시간</Category>
          <Editor>작성자</Editor>
          </TextWrap>
          <TextWrap>
          <Category>카테고리 : 한식</Category>
          <Editor className="date">2021-10-13</Editor>
          </TextWrap>
            <TitleIcon1>
            <FaCog />
            </TitleIcon1>
            <TitleIcon2 >
            <FaRegTrashAlt/>
            </TitleIcon2>
        </TitleArea>
        <ScoreWrap>
          <ScoreContent>
            맛 4.5
          </ScoreContent>
          <ScoreContent>
            간편성 4.2
          </ScoreContent>
        </ScoreWrap>
        <MainImage>메인 사진</MainImage>
        <BoxWrap>
          <BoxGroup>
            <StarBtn>맛 별점주기</StarBtn>
            <DropdownStar className="taste" color="blue" />
          </BoxGroup>
          <BoxGroup>
            <StarBtn>간편성 별점주기</StarBtn>
            <DropdownStar className="simple" color="red" />
          </BoxGroup>
        </BoxWrap>
        <div>
          <div>총 소요시간</div>
          <div>몇 분</div>
        </div>
        <div>카테고리</div>
        <div>한식</div>
        <Labal>
          요리소개
        </Labal>
            <Textarea />
        
        <ContentWrap>
        <Labal>재료</Labal>
        <Contents />
      </ContentWrap>
        
      <ContentWrap>
      <Labal>요리 방법</Labal>
        <Contents />
      </ContentWrap>
        <Labal>
          요리 사진
        </Labal>
      <SubWrap>
        <SubImage>
        </SubImage>
      </SubWrap>
      {/* <CommentComponent /> */}
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;
`
const Form = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 25px 0px;
  @media (max-width: 750px) {
    width: 90%;
  }
`
const Title = styled.h3`
  margin-top : 0;
  margin-bottom : 3px;
  text-align: center;
  color: rgb(77, 77, 77);
  padding-bottom : 10px;
  border-bottom : solid 1px #d4d4d4;
`
const TitleIcon1 = styled.div`
position : absolute;
top : 10px;
right : 5px;
font-size: 15px;
color : #7b7b7b;
:hover {
  color :#f3c811;
  font-size: 18px;
}
`
const TitleIcon2 = styled.div`
position : absolute;
top : 35px;
right : 5px;
font-size: 15px;
color : #7b7b7b;
:hover {
  color :#f3c811;
  font-size: 18px;
}
`

const TextWrap = styled.div`
display: flex;
justify-content: space-between;
`

const Editor = styled.p`
  margin: 5px 0;
  font-size: 15px;
`

const Category = styled.p`
font-size: 15px;
margin: 5px 0;
`

const TitleArea = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  font-size: 30px;
  margin-bottom : 60px;
`

const MainImage = styled.div`
  height: 400px;
  background-color: black;
`

const ScoreWrap = styled.div`
  display: flex;
  text-align: center;
`
const ScoreContent = styled.div`
  display: flex;
  height: 30px;
  padding: 3px 10px;
  font-size: 14px;
  margin-right: 15px;
  background-color: #857d7d2f;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 5px;
`

const Favorite = styled.div`
  position: absolute;
  left : 10px;
  color: #e9b83a;
  font-size: 25px;
  top: 1px;
  opacity: 0.7;
`

const Score = styled.p`
  margin-right: 5px;
`

const Text = styled.p`
  margin-right: 5px;
`

const BoxWrap = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
  border-bottom: solid 1px rgb(138, 138, 138);
`

const BoxGroup = styled.div`
  display: flex;
  text-align: center;
  width: 45%;
`

const StarBtn = styled.button`
border : none;
border-radius : 6px;
`

const Labal = styled.h3`
margin-bottom : 5px;
`

const Textarea = styled.textarea`
  width: 90%;
  height: 100px;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  margin : 0 auto;
  margin-bottom : 30px;
  box-sizing: border-box;
  border: solid 2px #d2d2d2;
  resize: none;
  :focus {
    border: solid 2px rgb(243, 200, 18);
    outline: none;
  }
`

const Contents = styled.div`
  width : 90%;
  height: 30px;
  margin : 0 auto;
  margin-bottom : 10px;
  align-items: center;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  :focus {
    border: solid 2px rgb(243, 200, 18);
    outline: none;
  }
  ::placeholder {
    font-size: 15px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
`
const ContentWrap = styled.div`
  align-items : center;
  text-align:center;
  margin : 20px;
`

const SubWrap = styled.div`
display: flex;
width : 100%;
`
const SubImage = styled.div`
  width :100%;
  height: 400px;
  background-color: black;
/* width : 50%;
background-color : black;
height : 300px;
margin : 3px; */
`
export default Posts
