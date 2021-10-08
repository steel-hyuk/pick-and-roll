import React from 'react'
import styled from 'styled-components'

const ChangePasswordComponent = () => {
  return (
    <Wrap>
      <NameArea>
        <Name>새로운 비밀번호를 입력하세요.</Name>
        <NameInput type="password" />
        <CheckText></CheckText>
        <CheckBtn>확인</CheckBtn>
      </NameArea>
      <NameArea>
        <Name>비밀번호를 다시 입력해주세요.</Name>
        <NameInput type="password" />
        <CheckText></CheckText>
        <CheckBtn>확인</CheckBtn>
        <ChangeBtn>변경 완료</ChangeBtn>
      </NameArea>
    </Wrap>
  )
}

const Wrap = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 13px;
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const NameArea = styled.div`
  margin: 20px 0;
  text-align: center;
`

const Name = styled.h3`
  color: #616161;
  margin: 5px 0;
  width: 100%;
`

const NameInput = styled.input`
  width: 80%;
  margin: 5px 0 3px 0;
  padding: 3px;
  border: solid 2px #d2d2d2;
  border-radius: 5px;
`

const CheckBtn = styled.button`
  margin-top: 6px;
  width: 80%;
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

const CheckText = styled.p`
  height: 20px;
  text-align: left;
  font-size: 11px;
  margin: 0 0 0 26px;
  color: rgb(255, 162, 0);
`

const ChangeBtn = styled.button`
  font-size: 17px;
  margin-top: 50px;
  width: 80%;
  height: 35px;
  border: 0;
  color: white;
  border-radius: 10px;
  background-color: rgb(162, 162, 162);
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  :hover {
    font-weight: bold;
    background-color: rgb(249, 213, 54);
  }
`

export default ChangePasswordComponent
