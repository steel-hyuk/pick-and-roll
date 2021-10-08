import React from 'react'
import styled from 'styled-components'

const EditMyInfoComponent = () => {
  return (
    <Wrap>
      <NameArea>
        <Name>새로운 닉네임</Name>
        <NameInput />
        <CheckBtn>확인</CheckBtn>
      </NameArea>
      <IntroArea>
        <Name>자기 소개</Name>
        <Textarea placeholder="자기소개를 입력해주세요." />
      </IntroArea>
      <BottomArea>
        <DateArea>
          <DateP>활동 시작일</DateP>
          <Data>2021-07-01</Data>
        </DateArea>
        <EmailArea>
          <EmailP>이메일</EmailP>
          <Data>qwert@abc.com</Data>
        </EmailArea>
        <CheckBtn>수정 완료</CheckBtn>
      </BottomArea>
    </Wrap>
  )
}

const Wrap = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 13px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const NameArea = styled.div`
  text-align: center;
`

const Name = styled.h3`
  margin: 5px 0;
  width: 100%;
  color: #616161;
`

const NameInput = styled.input`
  width: 60%;
  margin: 5px 0 0 0;
  padding: 0;
  border: solid 2px #d2d2d2;
  border-radius: 5px;
`

const CheckBtn = styled.button`
  margin-top: 10px;
  width: 60%;
  height: 20px;
  border: 0;
  color: white;
  border-radius: 10px;
  background-color: rgb(243, 200, 18);
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  :hover {
    font-weight: bold;
    background-color: rgb(249, 213, 54);
  }
`

const IntroArea = styled.div`
  margin: 15px 0;
  text-align: center;
`

const Textarea = styled.textarea`
  resize: none;
  width: 95%;
  height: 130px;
  padding: 5px;
  border: solid 2px #d2d2d2;
`

const DateArea = styled.div`
  text-align: center;
  margin-top: 10px;
`

const DateP = styled.h4`
  margin: 3px 0;
  color: #616161;
`

const EmailP = styled.h4`
  margin: 3px 0;
  color: #616161;
`

const Data = styled.p`
  margin: 0 auto;
  border: solid 2px #d2d2d2;
  border-radius: 3px;
  width: 80%;
`

const EmailArea = styled.div`
  margin-top: 10px;
  text-align: center;
`

const BottomArea = styled.div`
  text-align: center;
`

export default EditMyInfoComponent
