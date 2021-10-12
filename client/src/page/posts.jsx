import React, { useState, useContext, useEffect, useCallback } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import DropdownStar from '../component/posts/dropdownPosts'
import { GoBookmark } from 'react-icons/go'

const Posts = ({ postId }) => {
  const [postInfo, setPostInfo] = useState({})

  const [title, setTitle] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [category, setCategory] = useState('')
  const [requiredTime, setRequiredTime] = useState('')
  const [content, setContent] = useState('')

  const [mainImg, setMainImg] = useState('')
  const [contentImg, setContentImg] = useState('')

  const [ingredients, setIngredients] = useState('')
  const [amount, setAmount] = useState('')

  const [tasteScore, setTasteScore] = useState('')
  const [easyScore, setEasyScore] = useState('')
  const [comment, setComment] = useState('')

  const addFavoriteList = () => {}

  // useEffect(async () => {
  //   await axios.get(`https://localhost:4000/posts/${postId}`)
  //   .then((res) => {
  //     // console.log('res: ', res.data.data)
  //     // setPostInfo(res.data.data)
  //   })
  // })

  // const addFavorite = async () => {
  //   await axios.post(`https://localhost:4000/posts/${postId}/favorite/add`, {
  //     userId: userInfo.id
  //   }, {
  //     'Content-Type': 'application/json'
  //   })
  // }

  // const deleteFavorite = async () => {
  //   await axios.delete(`https://localhost:4000/posts/${postId}/favorite/delete`, {
  //     data : {
  //       userId: userInfo.id
  //     }
  //   })
  // }

  // const updatePost = async () => {
  //   let content = [content1, content2].join('@');
  //   let contentImgs = [contentImg1, contentImg2].join(',');
  //   let ing1 = [ingredients1, amount1].join(',');
  //   let ing2 = [ingredients2, amount2].join(',');
  //   let ingredients = [ing1, ing2].join('@');

  //   await axios.put(`https://localhost:4000/posts/${postId}/update`, {
  //     title,
  //     introduction,
  //     category,
  //     requiredTime,
  //     content,
  //     mainImg,
  //     contentImgs,
  //     ingredients
  //   })
  // }

  // const deletePost = async () => {
  //   await axios.delete(`https://localhost:4000/posts/${postId}/delete`)
  // }

  // const evaluateTaste = async () => {
  //   const score = parseFloat(tasteScore)
  //   await axios.post(`https://localhost:4000/posts/${postId}/tasteScore`, {
  //     userId: userInfo.id,
  //     score: score
  //   })
  // }

  // const evaluateEasy = async () => {
  //   const score = parseFloat(easyScore)
  //   await axios.post(`https://localhost:4000/posts/${postId}/easyScore`, {
  //     userId: userInfo.id,
  //     score: score
  //   })
  // }

  // const writeComment = async () => {
  //   await axios.post(`https://localhost:4000/posts/${postId}/comment`, {
  //     userId: userInfo.id,
  //     content: comment
  //   }, {
  //     'Content-Type': 'application/json'
  //   })
  // }

  // const updateComment = async () => {
  //   await axios.put(`https://localhost:4000/posts/${postId}/comment/update`, {
  //     // id: // comment id 줘야 함
  //     content: comment
  //   })
  // }

  // const deleteComment = async () => {
  //   await axios.delete(`https://localhost:4000/posts/${postId}/comment/delete`, {
  //     // data : {
  //     //   id // comment id 줘야 함
  //     // }
  //   })
  // }

  return (
    <Container>
      <ScoreAndStyle>
        <DropdownStar className="taste" color="blue" />
        <DropdownStar className="simple" color="red" />
        <span>Score and favorite</span>
      </ScoreAndStyle>
      <Header
        style={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/pick-and-rool.appspot.com/o/contentMain%2Fb2ad7e35-8846-4695-8a50-37f5c28c8069?alt=media&token=8065300e-fc8d-45b4-98fe-274ec6b099b5')`,
        }}
      >
        header MainImg
      </Header>
      <Title>
        <p className="instruction">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </Title>

      <GoBookmark className="icon" onClick={addFavoriteList} />
      <ContentStyle>contents</ContentStyle>
      <ContentImg />
      <ContentImg />
      <ContentImg />
      <ContentImg />
      <Comments></Comments>
      <div className="grid-item grid-item-6">grid6</div>
      <div className="grid-item grid-item-7">grid7</div>
      <div className="grid-item grid-item-8">grid8</div>
      <div className="bubble"></div>
    </Container>
  )
}

export default Posts

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(150px, auto);

  grid-gap: 1%;
  justify-content: stretch;
  align-items: stretch;

  z-index: -2;
  margin-top: 40px;
  /* .bubble {
    border-radius: 100%;
    background-color: #eec409e8;

    z-index: -100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -20%;
    box-shadow: 5px 4px 150px 200px #eec409e8;
  } */

  .icon {
    position: absolute;
    width: 50px;
    height: 50px;
    color: #eeeb24;
    border-color: #a0a0a5;
    margin-left: 50px;
    padding: 5px 0px;
    left: 89%;
    top: 88px;
  }
  .icon:hover {
    cursor: pointer;
    background-color: #f00404;
    border-radius: 15%;
    transition: all 0.3s linear;
    background-size: 50px;
  }
`
const Header = styled.div`
  grid-column: 3 / 7;
  grid-row: 2 / 4;
  background-color: aqua;
  z-index: 2;
  border-radius: 12%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0px 0px 100px 40px #787c7e;
`

const Title = styled.div`
  grid-row: 4 / 5;
  grid-column: 2 /6;
  background-color: #f5eeee14;
  margin-top: 0px;
  margin-left: -20%;
  border-left: solid 60mm #eec409e8;
  p {
    font-size: 34px;
    font-style: italic;
    font-family: 'Noto Sans Mono', monospace;
    text-orientation: upright;
    outline: none;
    border: none;
    text-align: center;
  }
`
const ScoreAndStyle = styled.div`
  grid-column: span 8;
  grid-row: span 1;
  display: flex;
  margin-top: 20px;
  padding: 20px 0px 0px 200px;
  justify-self: center;
  border-top: solid 0.2mm #92928ea6;
  width: 100%;
  span {
    position: absolute;
    z-index: 55;
  }
`

const ContentStyle = styled.div`
  background-color: #e6eeea85;
  grid-column: span 4;
  grid-row: span 2;
`

const ContentImg = styled.div`
  background-color: #e6eeea85;
`

const Comments = styled.div`
  background-color: #707274ae;
  grid-column: span 3;
  grid-row: span 5;
`
