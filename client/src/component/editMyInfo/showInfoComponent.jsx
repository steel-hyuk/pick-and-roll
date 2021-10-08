import React from 'react'
import styled from 'styled-components'

const ShowInfoComponent = () => {
  return (
    <Wrap>
      <NameArea>
        <Name>닉네임</Name>
        <NameInput></NameInput>
      </NameArea>
      <IntroArea>
        <Name>자기 소개</Name>
        <Textarea></Textarea>
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

const IntroArea = styled.div`
  margin: 15px 0;
  text-align: center;
`

const Textarea = styled.div`
  resize: none;
  width: 95%;
  height: 130px;
  padding: 5px;
  border: solid 2px #d2d2d2;
  border-radius: 5px;
`

const DateArea = styled.div`
  text-align: center;
  margin-top: 10px;
`

const DateP = styled.h4`
  color: #616161;
  margin: 3px 0;
`

const EmailP = styled.h4`
  color: #616161;
  margin: 3px 0;
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

export default ShowInfoComponent
